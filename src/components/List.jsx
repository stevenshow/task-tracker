import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UilPlus, UilTimes } from '@iconscout/react-unicons';
import Card from './Card';

export default function List({ items, title, ...props }) {
  const inputRef = useRef(null);
  const [cards, setCards] = useState(items);
  const [adding, setAdding] = useState(false);

  const onlyWhitespace = (string) => string.trim().length === 0;

  const handleAdd = (newCard) => {
    // Stops user from entering an empty card
    if (onlyWhitespace(newCard.title)) return;
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const handleRemove = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleKeyDown = (event) => {
    // Add card if Enter key is pressed
    if (event.key === 'Enter') {
      handleAdd({ title: inputRef.current.value, id: uuidv4() });
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
        return (
          <Card remove={handleRemove} title={card.title} key={card.id} id={card.id} {...props} />
        );
      })}
      {adding ? (
        <div className="flex flex-col gap-4">
          <input
            autoFocus
            className="w-full rounded border-none p-1 opacity-75 focus:ring-0"
            onBlur={() => setAdding(false)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            type="text"
          />
          <div className="flex gap-2">
            <button
              className="ml-auto flex h-6 w-5 items-center justify-center rounded bg-gray-400"
              onClick={() => {
                setAdding(false);
              }}
            >
              <div className="text-slate-100">
                <UilTimes />
              </div>
            </button>
            <button
              className="flex h-6 w-5 items-center justify-center rounded bg-gray-400"
              onClick={() => {
                setAdding(false);
                handleAdd({ title: inputRef.current.value, id: uuidv4() });
              }}
            >
              <div className="text-slate-100">
                <UilPlus />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="ml-auto flex h-6 w-5 items-center justify-center rounded bg-gray-400"
          onClick={() => setAdding(true)}
        >
          <div className="text-slate-100">
            <UilPlus />
          </div>
        </button>
      )}
    </div>
  );
}
