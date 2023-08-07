import { simpleRange } from "@/utils/array";
import Month from "../month";
import "./main.css";
import { findUserHabitLogs } from "@/data/habits";
import { getFirstAndLastDayOfYear } from "@/utils/date";

const { firstDayOfYear, lastDayOfYear, currentYear } =
  getFirstAndLastDayOfYear();

export default async function Year({ habitId }) {
  const habitLogs = await findUserHabitLogs({
    habitId,
    startDate: firstDayOfYear,
    endDate: lastDayOfYear,
  });

  console.log(">>", habitLogs);

  return (
    <div className="row">
      {new simpleRange(12).map((month) => (
        <div key={month} className="col-xs-12 col-sm-6 col-lg-4 col-xl-2 mb-4">
          <Month year={currentYear} month={month} />
        </div>
      ))}
    </div>
  );
}
