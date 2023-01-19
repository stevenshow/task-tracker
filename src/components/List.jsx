import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

export default function List({ items, title }) {
  const inputRef = useRef(null);
  const [cards, setCards] = useState(items);
  const [adding, setAdding] = useState(false);

  const addCard = (newCard) => {
    // Stops user from entering an empty card
    if (!newCard.title) return;
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleRemove = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleKeyDown = (event) => {
    // Add card if Enter key is pressed
    if (event.key === 'Enter') {
      addCard({ title: inputRef.current.value, id: uuidv4() });
      inputRef.current.value = '';
    }
    // Close the add card input field if Esc is pressed
    if (event.key === 'Escape') {
      setAdding(false);
    }
  };

  return (
    <div className="border-1 flex h-fit w-60 flex-col gap-4 rounded border p-4 shadow-md">
      <span className="font-bold">{title}</span>
      {cards.map((card) => {
        return <Card remove={handleRemove} title={card.title} key={card.id} id={card.id} />;
      })}
      {adding ? (
        <div className="flex flex-col gap-2">
          <input
            autoFocus
            className="bg-black-300 w-full rounded p-1"
            onKeyDown={handleKeyDown}
            ref={inputRef}
            type="text"
          />
          <div className="flex gap-2">
            <button
              className="ml-auto flex h-6 w-5 items-center justify-center rounded bg-gray-400"
              onClick={() => {
                setAdding(false);
                addCard({ title: inputRef.current.value, id: uuidv4() });
              }}
            >
              <div className="text-slate-100">Add</div>
            </button>
            <button
              className="flex h-6 w-5 items-center justify-center rounded bg-gray-400"
              onClick={() => {
                setAdding(false);
              }}
            >
              <div className="text-slate-100">X</div>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="ml-auto flex h-6 w-5 items-center justify-center rounded bg-gray-400"
          onClick={() => setAdding(true)}
        >
          <div className="text-slate-100">+</div>
        </button>
      )}
    </div>
  );
}
