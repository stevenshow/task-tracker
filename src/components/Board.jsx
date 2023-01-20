import { useState } from 'react';
import List from './List';

export default function Board({ lists }) {
  const [boardLists, setBoardLists] = useState(lists);

  function moveCard(cardId, currentListId, desiredListId) {
    // Find the card by its id in the current list
    const currentList = lists[currentListId];
    const cardIndex = currentList.cards.findIndex((card) => card.id === cardId);
    const [card] = currentList.cards.splice(cardIndex, 1);

    // Add the card to the desired list
    lists[desiredListId].cards.push(card);
  }

  const handleMoveLeft = (id, listId) => {
    console.log(boardLists);
    console.log(id, listId);
  };

  const handleMoveRight = (id) => {};

  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      {Object.entries(boardLists).map(([key, value]) => {
        return (
          <List
            cardActions={{ handleMoveLeft, handleMoveRight }}
            listId={key}
            items={value.cards}
            key={value.id + key}
            title={value.title}
          />
        );
      })}
    </div>
  );
}
