import { DYNAMIC_DATA_FETCHING_OPTIONS } from "@/utils/constants";
import { cookies } from "next/headers";

export function getAuthRequestOptions({ method = "GET", body = undefined }) {
  const cookieStore = cookies();
  const { value: authToken } = cookieStore.get("auth-token") ?? {};

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authToken}`);

  if (body) {
    myHeaders.append("Content-Type", `application/json`);
    body = JSON.stringify(body);
  }

  return {
    ...DYNAMIC_DATA_FETCHING_OPTIONS,
    headers: myHeaders,
    method,
    body,
  };
}
