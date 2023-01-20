import { UilArrowLeft, UilArrowRight } from '@iconscout/react-unicons';

export default function CardOptions({ cardActions, listId, id }) {
  return (
    <div className="flex justify-between">
      <button
        className="flex items-center justify-center rounded p-0 opacity-50"
        onClick={() => cardActions.handleMoveLeft(id, listId)}
      >
        <UilArrowLeft />
      </button>
      <button
        className="flex items-center justify-center rounded p-0 opacity-50"
        onClick={() => cardActions.handleMoveRight(id)}
      >
        <UilArrowRight />
      </button>
    </div>
  );
}
