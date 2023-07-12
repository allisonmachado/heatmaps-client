export function getNumberOfDays(year, month) {
  const date = new Date(year, month + 1, 0);
  
  const lastDay = date.getDate();
  
  return lastDay;
}
