import { createHabit } from "@/data/habits";
// import { NextResponse } from 'next/server';

/**
 * Create Habit Proxy
 */
export async function POST(request) {
  const body = await request.json();

  return createHabit(body);
}
