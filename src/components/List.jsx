import Card from './Card';

export default function List({ items }) {
  return (
    <div className="border-1 flex w-60 flex-col gap-4 rounded border p-4">
      {items.map((item) => {
        return <Card title={item.title} key={item.id} />;
      })}
    </div>
  );
}
