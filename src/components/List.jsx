import Card from './Card';

export default function List({ items, title }) {
  return (
    <div className="border-1 flex w-60 flex-col gap-4 rounded border p-4">
      <span>{title}</span>
      {items.map((item) => {
        return <Card title={item.title} key={item.id} />;
      })}
    </div>
  );
}
