import { useState } from 'react';
import List from './List';

export default function Board({ lists }) {
  const [boardLists, setBoardLists] = useState(lists);

  const handleMoveLeft = (id) => {
    console.log(boardLists);
    console.log(id);
  };

  const handleMoveRight = (id) => {};

  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      {Object.values(boardLists).map((list, index) => {
        return (
          <List
            listId={list.id}
            items={list.cards}
            key={list.id}
            title={Object.keys(lists)[index]}
            handleMoveLeft={handleMoveLeft}
            hanldeMoveRight={handleMoveRight}
          />
        );
      })}
    </div>
  );
}
