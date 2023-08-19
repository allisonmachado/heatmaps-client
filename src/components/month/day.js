"use client";

import { useRouter } from "next/navigation";

export default function Day({
  number,
  date,
  habitId,
  habitLog,
  habitType,
  habitColor,
  isToday,
}) {
  const router = useRouter();

  function convertTimerRGBA(habitColor, habitLog) {
    const red = parseInt(habitColor.substring(0, 2), 16);
    const green = parseInt(habitColor.substring(2, 4), 16);
    const blue = parseInt(habitColor.substring(4, 6), 16);

    const rgba = `rgba(${red}, ${green}, ${blue}, ${
      habitLog.value / habitLog.max
    })`;

    return rgba;
  }

  function addLeadingZero(number) {
    return String(number).padStart(2, "0");
  }

  const todayClass = isToday ? "today" : "";

  if (!habitLog.value) {
    return <span className={`${todayClass}`}>{addLeadingZero(number)}</span>;
  }

  if (habitType === "Binary") {
    return (
      <span
        className={`active ${todayClass}`}
        onClick={() =>
          router.push(
            `/habits/${habitId}/logs/${habitLog.id}/delete?date=${date}`
          )
        }
      >
        {addLeadingZero(number)}
      </span>
    );
  }

  return (
    <span
      className={`active-timer ${todayClass}`}
      onClick={() =>
        router.push(
          `/habits/${habitId}/logs/${habitLog.id}/delete?date=${date}`
        )
      }
      style={{
        background: convertTimerRGBA(habitColor, habitLog),
      }}
    >
      {addLeadingZero(number)}
    </span>
  );
}
