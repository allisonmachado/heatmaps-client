import { findUserHabits } from "@/data/habits";
import Link from "next/link";

export default async function Home() {
  const habits = await findUserHabits();

  return (
    <>
      <div className="row">
        <div className="col">
          {habits.length ? <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Habit</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((h) => (
                <tr key={h.id}>
                  <td>{h.title}</td>
                  <td>
                    <Link href={`/habits/${h.id}`}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> : <p>No habits created</p>}
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
