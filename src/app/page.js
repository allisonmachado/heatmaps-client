import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Habit</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Study Software Development</td>
                <td>
                  <Link href="/habits/1">
                    <button type="button" className="btn btn-outline-secondary">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Study Software Development</td>
                <td>
                  <Link href="/habits/2">
                    <button type="button" className="btn btn-outline-secondary">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary">
            New Habit
          </button>
        </div>
      </div>
    </>
  );
}
