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

export function getFirstAndLastDayOfYear(yearDiff = 0) {
  const today = new Date();
  const currentYear = today.getFullYear() + yearDiff;

  // First day of the year
  const firstDayOfYear = new Date(currentYear, 0, 1);
  const formattedFirstDay = firstDayOfYear.toISOString().slice(0, 10);

  // Last day of the year
  const lastDayOfYear = new Date(currentYear, 11, 31);
  const formattedLastDay = lastDayOfYear.toISOString().slice(0, 10);

  return {
    currentYear,
    firstDayOfYear: formattedFirstDay,
    lastDayOfYear: formattedLastDay,
  };
}

export function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
