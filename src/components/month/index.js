import { getNumberOfDays, isToday } from "@/utils/date";
import "./main.css";
import { simpleRange } from "@/utils/array";

export default function Month({ year, month }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = months[month];
  const numberOfDays = getNumberOfDays(year, month);

  return (
    <>
      <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li>
            {currentMonth} {year}
          </li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul className="days">
        {simpleRange(numberOfDays).map((day) => (
          <li key={day}>
            {isToday(year, month, day + 1) ? <span className="today">{day + 1}</span> : <span>{day + 1}</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
