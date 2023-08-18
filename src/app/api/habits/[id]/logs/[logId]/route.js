import { deleteUserHabitLog } from "@/data/habits";

/**
 * Delete Habit Log Proxy
 */
export async function DELETE(_request, { params }) {
  const { id, logId } = params;

  return deleteUserHabitLog(id, logId);
}
