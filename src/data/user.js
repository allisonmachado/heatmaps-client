import { DYNAMIC_DATA_FETCHING_OPTIONS } from "@/utils/constants";
import { getUrlFor } from "@/utils/url";

export async function loginRequest({ email, password }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    email,
    password,
  });

  const requestOptions = {
    ...DYNAMIC_DATA_FETCHING_OPTIONS,
    method: "POST",
    headers: myHeaders,
    body,
  };

  const requestPath = getUrlFor("/auth/login");

  return fetch(requestPath, requestOptions);
}
