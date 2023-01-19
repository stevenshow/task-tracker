import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

export default function List({ items, title }) {
  const inputRef = useRef(null);
  const [cards, setCards] = useState(items);
  const [adding, setAdding] = useState(false);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div className="border-1 flex h-fit w-60 flex-col gap-4 rounded border p-4">
      <span>{title}</span>
      {cards.map((card) => {
        return <Card title={card.title} key={card.id} />;
      })}
      {adding ? (
        <div className="flex flex-col gap-2">
          <input className="bg-black-300 w-full rounded" ref={inputRef} type="text" />
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
          class="ml-auto flex h-6 w-5 items-center justify-center rounded bg-gray-400"
          onClick={() => setAdding(true)}
        >
          <div className="text-slate-100">+</div>
        </button>
      )}
    </div>
  );
}
