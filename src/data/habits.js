import { getAuthRequestOptions } from "@/utils/auth";
import { transformHabitsArrayToObject } from "@/utils/habits";
import { boundRequest } from "@/utils/request";
import { assertIsHabitLogList } from "@/utils/schema";
import { getUrlFor } from "@/utils/url";
import { redirect } from "next/navigation";

export async function findUserHabits() {
  const requestOptions = getAuthRequestOptions();
  const requestPath = getUrlFor("habits");

  const res = await boundRequest(requestPath, requestOptions);

  return res.json();
}

export async function findUserHabit(id) {
  const habitList = await findUserHabits();

  return habitList.filter((h) => h.id == id)?.pop();
}

export async function findUserHabitOrRedirect(id, redirectPath = "/") {
  const habit = await findUserHabit(id);

  if (!habit) return redirect(redirectPath);

  return habit;
}

export async function createHabit(habit) {
  const requestOptions = getAuthRequestOptions({
    method: "POST",
    body: habit,
  });
  const requestPath = getUrlFor("habits");

  const res = await boundRequest(requestPath, requestOptions);

  return res;
}

export async function updateHabit(habit) {
  const { id: habitId, ...habitBody } = habit;

  const requestOptions = getAuthRequestOptions({
    method: "PUT",
    body: habitBody,
  });
  const requestPath = getUrlFor(`/habits/${habitId}`);

  const res = await boundRequest(requestPath, requestOptions);

  return res;
}

export async function deleteHabit(habitId) {
  const requestOptions = getAuthRequestOptions({
    method: "DELETE",
  });
  const requestPath = getUrlFor(`habits/${habitId}`);

  const res = await boundRequest(requestPath, requestOptions);

  return res;
}

export async function findUserHabitLogOrRedirect(
  { habitId, targetDate },
  redirectPath = "/"
) {
  const requestOptions = getAuthRequestOptions();

  const requestPath = getUrlFor(`habits/${habitId}/logs`, [
    ["startDate", targetDate],
    ["endDate", targetDate],
  ]);

  const res = await boundRequest(requestPath, requestOptions);

  const logList = assertIsHabitLogList(await res.json());

  if (!logList) return redirect(redirectPath);

  return logList[0];
}

export async function findUserHabitLogs({ habitId, startDate, endDate }) {
  const requestOptions = getAuthRequestOptions();

  const requestPath = getUrlFor(`habits/${habitId}/logs`, [
    ["startDate", startDate],
    ["endDate", endDate],
  ]);

  const res = await boundRequest(requestPath, requestOptions);

  const habits = await res.json();

  return transformHabitsArrayToObject(habits);
}

export async function logUserHabit(log, habitId) {
  const requestOptions = getAuthRequestOptions({
    method: "POST",
    body: log,
  });
  const requestPath = getUrlFor(`habits/${habitId}/logs`);

  const res = await boundRequest(requestPath, requestOptions);

  return res;
}

export async function deleteUserHabitLog(habitId, logId) {
  const requestOptions = getAuthRequestOptions({
    method: "DELETE",
  });
  const requestPath = getUrlFor(`habits/${habitId}/logs/${logId}`);

  const res = await boundRequest(requestPath, requestOptions);

  return res;
}
