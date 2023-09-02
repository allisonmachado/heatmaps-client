export default function ActionHeader({ title, subTitle }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>{title}</h1>
        </div>
      </div>
      {subTitle && (
        <div className="row">
          <div className="col">
            <p>{subTitle}</p>
          </div>
        </div>
      )}
    </>
  );
}
