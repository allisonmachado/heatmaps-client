const DYNAMIC_DATA_FETCHING_OPTIONS = {
  cache: 'no-store',
}

export async function findUserHabits() {
  const myHeaders = new Headers();
  
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoic3VwZXItam9obkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InN1cGVyLmpvaG4iLCJpYXQiOjE2OTA0Nzc1NTQsImV4cCI6MTY5MDU2Mzk1NH0.QnhHk1h24dYSRA24ERUfvaJ5n94732tLmpcevcjzbko"
  );

  var requestOptions = {
    ...DYNAMIC_DATA_FETCHING_OPTIONS,
    method: "GET",
    headers: myHeaders,
  };

  return fetch("http://localhost:8000/habits/", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
