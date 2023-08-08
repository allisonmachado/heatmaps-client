export function transformHabitsArrayToObject(habits) {
  const transformedObject = {};
  const maxTimer = { value: 0 };

  habits.forEach((item) => {
    const dateKey = item.day.slice(0, 10);

    if (item.timerValue && item.timerValue > maxTimer.value) {
      maxTimer.value = item.timerValue;
    }

    const objectValue = {
      id: item.id,
      habitId: item.habitId,
      timerValue: item.timerValue,
      maxTimer,
    };

    transformedObject[dateKey] = objectValue;
  });

  return transformedObject;
}
