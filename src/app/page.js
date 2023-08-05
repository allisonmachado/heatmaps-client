import { findUserHabits } from "@/data/habits";
import Link from "next/link";

export default async function Home() {
  const habits = await findUserHabits();

  return (
    <>
      <div className="row">
        <div className="col">
          {habits.length ? (
            <>
              <h1>Habits:</h1>
              <ul className="list-group">
                {habits.map((h) => (
                  <Link
                    key={h.id}
                    href={`/habits/${h.id}`}
                    className="list-group-item list-group-item-action"
                  >
                    {h.title}
                  </Link>
                ))}
              </ul>
            </>
          ) : (
            <p>No habits created</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link href="/habits/new" type="button" className="btn btn-primary">
            New Habit
          </Link>
        </div>
      </div>
    </>
  );
}
