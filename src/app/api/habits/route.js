import { createHabit } from "@/data/habits";

/**
 * Create Habit Proxy
 */
export async function POST(request) {
  const body = await request.json();

  return createHabit(body);
}
