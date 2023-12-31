import BulletPoint from "@/components/bullet-point";
import { findUserHabits } from "@/data/habits";
import { getCurrentMonthScrollId } from "@/utils/date";
import Link from "next/link";

export default async function Home() {
  const habits = await findUserHabits();
  const monthScrollId = getCurrentMonthScrollId();

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
                    href={`/habits/${h.id}#${monthScrollId}`}
                    className="list-group-item list-group-item-action"
                  >
                    <BulletPoint color={h.color} /> {h.title}
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
          <Link href="/habits/create" type="button" className="btn btn-primary">
            &#43; New Habit
          </Link>
        </div>
      </div>
    </>
  );
}
