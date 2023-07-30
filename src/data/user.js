import { DYNAMIC_DATA_FETCHING_OPTIONS } from "./utils";

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

  return fetch("http://localhost:8000/auth/login", requestOptions);
}
