import { simpleRange } from "@/utils/array";
import Month from "../month";
import { findUserHabitLogs, findUserHabitOrRedirect } from "@/data/habits";
import Link from "next/link";
import NavigationRow from "../nav-row";

export default async function Year({
  habitId,
  firstDayOfYear,
  lastDayOfYear,
  currentYear,
}) {
  const habit = await findUserHabitOrRedirect(habitId);

  const habitLogs = await findUserHabitLogs({
    habitId,
    startDate: firstDayOfYear,
    endDate: lastDayOfYear,
  });

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>{habit.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            {habit.type} Habit - Year {currentYear}
          </p>
        </div>
      </div>
      <NavigationRow
        leftOption={
          <Link
            href={`?year=${currentYear - 1}`}
            type="button"
            className="btn btn-primary"
          >
            &#10094; Prev.
          </Link>
        }
        rightOption={
          <Link
            href={`?year=${currentYear + 1}`}
            type="button"
            className="btn btn-primary"
          >
            Next &#10095;
          </Link>
        }
      />
      <div className="row">
        {new simpleRange(12).map((month) => (
          <div
            key={month}
            id={`month-${month}`}
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
      <NavigationRow
        leftOption={
          <Link
            href={`/habits/${habitId}/update`}
            type="button"
            className="btn btn-primary"
          >
            Update
          </Link>
        }
        rightOption={
          <Link
            href={`/habits/${habitId}/delete`}
            type="button"
            className="btn btn-danger"
          >
            &#9747; Delete
          </Link>
        }
      />
    </>
  );
}
