import { deleteHabit } from "@/data/habits";

/**
 * Delete Habit Proxy
 */
export async function DELETE(_request, { params }) {
  return deleteHabit(params.id);
}
