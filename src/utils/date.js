export function getNumberOfDays(year, month) {
  const date = new Date(year, month + 1, 0);

  const lastDay = date.getDate();

  return lastDay;
}

export function isToday(year, month, day) {
  const today = new Date();

  const date = new Date(year, month, day);

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
