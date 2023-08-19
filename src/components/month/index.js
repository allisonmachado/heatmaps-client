import { formatDateToYYYYMMDD, getNumberOfDays, isToday } from "@/utils/date";
import "./main.css";
import { simpleRange } from "@/utils/array";
import Day from "./day";

export default function Month({ year, month, habit, habitLogs }) {
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

  const extractHabitLog = (habitType, habitLogs, dateKey) => {
    const value = habitLogs[dateKey];

    if (!value) {
      return {
        value: null,
        max: 0,
      };
    }

    if (habitType === "Binary") {
      return {
        value: true,
        max: 0,
      };
    }

    return {
      value: habitLogs[dateKey].timerValue,
      max: habitLogs[dateKey].maxTimer.value,
    };
  };

  return (
    <>
      <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li>{currentMonth}</li>
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
        {simpleRange(numberOfDays).map((day) => {
          const adjustedDay = day + 1;
          const dateValue = new Date(year, month, adjustedDay);
          const dateKey = formatDateToYYYYMMDD(dateValue);

          return (
            <li key={day}>
              <Day
                number={adjustedDay}
                habitLog={extractHabitLog(habit.type, habitLogs, dateKey)}
                habitType={habit.type}
                habitColor={habit.color}
                isToday={isToday(year, month, adjustedDay)}
              />
            </li>
          );
        })}
        {/* fill in spaces for layout */}
        {simpleRange(31 - numberOfDays).map((day) => (
          <li key={day + numberOfDays}>
            <span>&nbsp;</span>
          </li>
        ))}
      </ul>
    </>
  );
}
