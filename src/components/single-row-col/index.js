export default function SingleRowCol({ children }) {
  return (
    <div className="row">
      <div className="col">
        <h1>{children}</h1>
      </div>
    </div>
  );
}
