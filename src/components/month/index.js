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
  const firstWeekDay = new Date(year, month, 1).getDay();

  const extractHabitLog = (habitType, habitLogs, dateKey) => {
    const log = habitLogs[dateKey];

    if (!log) {
      return {
        id: null,
        value: null,
        max: 0,
      };
    }

    if (habitType === "Binary") {
      return {
        id: log.id,
        value: true,
        max: log.maxTimer.value,
      };
    }

    return {
      id: log.id,
      value: log.timerValue,
      max: log.maxTimer.value,
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
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
      </ul>

      <ul className="days">
        {/* fill in spaces for layout */}
        {simpleRange(firstWeekDay).map((day) => (
          <li key={day}>
            <span>&nbsp;</span>
          </li>
        ))}
        {simpleRange(numberOfDays).map((day) => {
          const adjustedDay = day + 1;
          const dateValue = new Date(year, month, adjustedDay);
          const dateKey = formatDateToYYYYMMDD(dateValue);

          return (
            <li key={day + firstWeekDay}>
              <Day
                number={adjustedDay}
                date={dateKey}
                habitId={habit.id}
                habitLog={extractHabitLog(habit.type, habitLogs, dateKey)}
                habitType={habit.type}
                habitColor={habit.color}
                isToday={isToday(year, month, adjustedDay)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
