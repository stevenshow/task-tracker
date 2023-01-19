import List from './List';

export default function Board({ lists }) {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      {Object.values(lists).map((list, index) => {
        return <List items={list.cards} key={list.id} title={Object.keys(lists)[index]} />;
      })}
    </div>
  );
}
