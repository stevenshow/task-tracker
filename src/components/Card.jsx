export default function Card({ title, id }) {
  return (
    <div className="border-1 m-auto w-full rounded border border-red-200" key={id}>
      <div>{title}</div>
    </div>
  );
}
