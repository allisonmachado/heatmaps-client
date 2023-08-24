export default function NavigationRow({ leftOption, rightOption }) {
  return (
    <div className="row">
      <div className="col text-start">{leftOption}</div>
      <div className="col text-end">{rightOption}</div>
    </div>
  );
}
