export default function Day({ number, habitLog, habitType, isToday }) {
  function addLeadingZero(number) {
    return String(number).padStart(2, "0");
  }

  const todayClass = isToday ? "today" : "";

  if (!habitLog.value) {
    return <span className={`${todayClass}`}>{addLeadingZero(number)}</span>;
  }

  if (habitType === "Binary") {
    return (
      <span className={`active ${todayClass}`}>{addLeadingZero(number)}</span>
    );
  }

  return (
    <span
      className={`active-timer ${todayClass}`}
      style={{
        background: `rgba(188, 26, 26, ${habitLog.value / habitLog.max})`,
      }}
    >
      {addLeadingZero(number)}
    </span>
  );
}
