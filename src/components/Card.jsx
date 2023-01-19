export default function Card({ title, id }) {
  return (
    <div className="border-1 m-auto w-full rounded border border-green-200 shadow-md" key={id}>
      <div className="p-1 text-white">{title}</div>
    </div>
  );
}
