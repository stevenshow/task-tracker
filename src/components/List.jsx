import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

export default function List({ items, title }) {
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
        <div>
          <input className="w-full rounded bg-slate-600" type="text" />
          <div>
            <button
              className="ml-auto"
              onClick={() => {
                setAdding(false);
                addCard({ title: 'New Card', id: uuidv4() });
              }}
            >
              Add
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
