import { UilArrowLeft, UilArrowRight } from '@iconscout/react-unicons';

export default function CardOptions({ handleMoveLeft, handleMoveRight, id }) {
  return (
    <div className="flex justify-between">
      <button
        className="flex items-center justify-center rounded p-0 opacity-50"
        onClick={() => handleMoveLeft(id)}
      >
        <UilArrowLeft />
      </button>
      <button
        className="flex items-center justify-center rounded p-0 opacity-50"
        onClick={() => handleMoveRight(id)}
      >
        <UilArrowRight />
      </button>
    </div>
  );
}
