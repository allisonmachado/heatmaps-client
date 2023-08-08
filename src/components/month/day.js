export default function Day({ number, habitLog, habitType }) {
  if (!habitLog.value) {
    return <span>{number}</span>;
  }

  if (habitType === "Binary") {
    return <span className="active">{number}</span>;
  }

  return (
    <span
      style={{
        background: `rgba(188, 26, 26, ${habitLog.value / habitLog.max})`,
      }}
    >
      {number}
    </span>
  );
}
