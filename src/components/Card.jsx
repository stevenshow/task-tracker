import { useState } from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import CardOptions from './CardOptions';

export default function Card({ id, remove, title, ...props }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="card border-1 relative m-auto flex flex w-full flex-col rounded border border-green-200 shadow-md"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="p-1 text-white">
        {title}
        <CardOptions id={id} {...props} />
      </div>
      {isHovering && (
        <button
          className="absolute right-0 top-0 flex h-6 w-4 items-center justify-center rounded bg-gray-400 opacity-75"
          onClick={() => remove(id)}
        >
          <div className="text-slate-100">
            <UilTimes />
          </div>
        </button>
      )}
    </div>
  );
}
