export function convertMinutesToHours(minutes) {
  if (typeof minutes !== "number" || minutes < 0) {
    return "Invalid input";
  }

  const hours = minutes / 60;
  return hours.toFixed(2);
}

export function convertHoursToMinutes(hours) {
  if (typeof hours !== "number" || hours < 0) {
    return "Invalid input";
  }

  const minutes = hours * 60;
  return minutes;
}
