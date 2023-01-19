import List from './List';

export default function Board({ lists }) {
  return (
    <div className="flex gap-8">
      {Object.values(lists).map((list, index) => {
        return <List items={list.cards} key={list.id} title={Object.keys(lists)[index]} />;
      })}
    </div>
  );
}
