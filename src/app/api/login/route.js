import { loginRequest } from "@/data/user";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * Login Proxy
 */
export async function POST(request) {
  const body = await request.json();

  const loginResult = await loginRequest({
    email: body.email,
    password: body.password,
  });

  if (!loginResult.ok) {
    return loginResult;
  }

  const data = await loginResult.json();

  cookies().set({
    name: "auth-token",
    value: data.accessToken,
    httpOnly: true,
    path: "/",
  });

  return NextResponse.json({ ...data });
}
