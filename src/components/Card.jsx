import { useState } from 'react';

export default function Card({ id, remove, title }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="border-1 m-auto flex w-full rounded border border-green-200 shadow-md"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="p-1 text-white">{title}</div>
      {isHovering && (
        <button
          className="my-auto ml-auto mr-1 flex h-6 w-4 items-center justify-center rounded bg-gray-400"
          onClick={() => remove(id)}
        >
          <div className="text-slate-100">X</div>
        </button>
      )}
    </div>
  );
}
