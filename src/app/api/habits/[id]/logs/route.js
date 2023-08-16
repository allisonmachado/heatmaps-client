import { logUserHabit } from "@/data/habits";

/**
 * Create Habit Log Proxy
 */
export async function POST(request, { params }) {
  const log = await request.json();
  const { id } = params;

  return logUserHabit(log, id);
}
