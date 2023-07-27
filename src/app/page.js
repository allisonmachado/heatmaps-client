import Link from "next/link";

export default function Home() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Habit</th>
          <th scope="col">Check</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
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
          <th scope="row">2</th>
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
  );
}
