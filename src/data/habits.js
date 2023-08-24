import { getAuthRequestOptions } from "@/utils/auth";
import { transformHabitsArrayToObject } from "@/utils/habits";
import { getUrlFor } from "@/utils/url";
import { redirect } from "next/navigation";

export async function findUserHabits() {
  const requestOptions = getAuthRequestOptions();
  const requestPath = getUrlFor("habits");

  const res = await fetch(requestPath, requestOptions);

  if (res.status === 401) {
    return redirect("/login");
  }

  return res.json();
}

export async function findUserHabit(id) {
  const habitList = await findUserHabits();

  return habitList.filter((h) => h.id == id)?.pop();
}

export async function createHabit(habit) {
  const requestOptions = getAuthRequestOptions({
    method: "POST",
    body: habit,
  });
  const requestPath = getUrlFor("habits");

  const res = await fetch(requestPath, requestOptions);

  if (res.status === 401) {
    return redirect("/login");
  }

  return res;
}

export async function deleteHabit(habitId) {
  const requestOptions = getAuthRequestOptions({
    method: "DELETE",
  });
  const requestPath = getUrlFor(`habits/${habitId}`);

  const res = await fetch(requestPath, requestOptions);

  if (res.status === 401) {
    return redirect("/login");
  }

  return res;
}

export async function findUserHabitLogs({ habitId, startDate, endDate }) {
  const requestOptions = getAuthRequestOptions();

  const requestPath = getUrlFor(`habits/${habitId}/logs`, [
    ["startDate", startDate],
    ["endDate", endDate],
  ]);

  const res = await fetch(requestPath, requestOptions);

  if (res.status === 401) {
    return redirect("/login");
  }

  const habits = await res.json();

  return transformHabitsArrayToObject(habits);
}

export async function logUserHabit(log, habitId) {
  const requestOptions = getAuthRequestOptions({
    method: "POST",
    body: log,
  });

  const requestPath = getUrlFor(`habits/${habitId}/logs`);
  const res = await fetch(requestPath, requestOptions);

  if (res.status === 401) {
    return redirect("/login");
  }

  return res;
}

export async function deleteUserHabitLog(habitId, logId) {
  const requestOptions = getAuthRequestOptions({
    method: "DELETE",
  });

  const requestPath = getUrlFor(`habits/${habitId}/logs/${logId}`);
  const res = await fetch(requestPath, requestOptions);

  if (res.status === 401) {
    return redirect("/login");
  }

  return res;
}
