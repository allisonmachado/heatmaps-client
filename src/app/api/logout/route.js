import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  cookies().delete({
    name: "auth-token",
    httpOnly: true,
    path: "/",
    value: undefined,
  });

  redirect("/login");
}
