import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { DYNAMIC_DATA_FETCHING_OPTIONS } from './utils';


export async function findUserHabits() {
  const cookieStore = cookies();
  const { value: authToken } = cookieStore.get('auth-token') ?? {};

  const myHeaders = new Headers();
  
  myHeaders.append(
    "Authorization",
    `Bearer ${authToken}`
  );

  var requestOptions = {
    ...DYNAMIC_DATA_FETCHING_OPTIONS,
    method: "GET",
    headers: myHeaders,
  };

  const res = await fetch("http://localhost:8000/habits/", requestOptions)
  
  if (!res.ok) {
    return redirect('/login');
  }
 
  return res.json();
}

export async function createHabit(habit) {
  const cookieStore = cookies();
  const { value: authToken } = cookieStore.get('auth-token') ?? {};

  const myHeaders = new Headers();
  
  myHeaders.append(
    "Authorization",
    `Bearer ${authToken}`
  );

  myHeaders.append(
    "Content-Type",
    `application/json`
  );

  var requestOptions = {
    ...DYNAMIC_DATA_FETCHING_OPTIONS,
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(habit)
  };

  const res = await fetch("http://localhost:8000/habits/", requestOptions);

  if (res.status === 401) {
    return redirect('/login');
  }
 
  return res;
}
