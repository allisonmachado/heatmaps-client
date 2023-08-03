export default async function DeleteHabit() {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Delete habit "XYZ"?</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 d-grid mx-auto">
          <a href='/habits/new' type="button" className="btn btn-danger">
            Yes
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 d-grid mx-auto">
          <a href='/habits/new' type="button" className="btn btn-link">
            Cancel
          </a>
        </div>
      </div>
    </>
  );
}
