export default function Day({ number, habitLog, habitType }) {
  function addLeadingZero(number) {
    return String(number).padStart(2, "0");
  }

  if (!habitLog.value) {
    return <span>{addLeadingZero(number)}</span>;
  }

  if (habitType === "Binary") {
    return <span className="active">{addLeadingZero(number)}</span>;
  }

  return (
    <span
      className="active-timer"
      style={{
        background: `rgba(188, 26, 26, ${habitLog.value / habitLog.max})`,
      }}
    >
      {addLeadingZero(number)}
    </span>
  );
}
