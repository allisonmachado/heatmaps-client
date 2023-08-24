import { deleteHabit, updateHabit } from "@/data/habits";

/**
 * Delete Habit Proxy
 */
export async function DELETE(_request, { params }) {
  return deleteHabit(params.id);
}

/**
 * Update Habit Proxy
 */
export async function PUT(request, { params }) {
  const body = await request.json();

  return updateHabit({
    id: params.id,
    ...body,
  });
}
