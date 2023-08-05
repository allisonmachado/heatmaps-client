import { deleteHabit } from "@/data/habits";
import { NextResponse } from "next/server";

/**
 * Delete Habit Proxy
 */
export async function DELETE(_request, { params }) {
  return deleteHabit(params.id);
}
