import { simpleRange } from "@/utils/array";
import Month from "../month";
import "./main.css";
import { findUserHabit, findUserHabitLogs } from "@/data/habits";

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
        <div className="col">
          <h1>
            {habit.title}@{currentYear} - {habit.type} Habit
          </h1>
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
              habitType={habit.type}
              habitLogs={habitLogs}
            />
          </div>
        ))}
      </div>
    </>
  );
}
