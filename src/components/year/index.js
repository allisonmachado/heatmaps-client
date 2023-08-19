import { simpleRange } from "@/utils/array";
import Month from "../month";
import "./main.css";
import { findUserHabit, findUserHabitLogs } from "@/data/habits";
import Link from "next/link";

export default async function Year({
  habitId,
  firstDayOfYear,
  lastDayOfYear,
  currentYear,
}) {
  const habit = await findUserHabit(habitId);

  const habitLogs = await findUserHabitLogs({
    habitId,
    startDate: firstDayOfYear,
    endDate: lastDayOfYear,
  });

  return (
    <>
      <div className="row">
        <div className="col text-start">
          <h1>{habit.title}</h1>
        </div>
        <div className="col text-end">
          <Link
            href={`/habits/${habitId}/delete`}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            {habit.type} Habit - Year {currentYear}
          </p>
        </div>
      </div>
      <div className="row">
        {new simpleRange(12).map((month) => (
          <div
            key={month}
            className="col-xs-12 col-sm-6 col-lg-4 col-xl-2 mb-4"
          >
            <Month
              year={currentYear}
              month={month}
              habit={habit}
              habitLogs={habitLogs}
            />
          </div>
        ))}
      </div>
    </>
  );
}
