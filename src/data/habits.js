import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

const DYNAMIC_DATA_FETCHING_OPTIONS = {
  cache: 'no-store',
}

export async function findUserHabits() {
  const cookieStore = cookies();
  const { value: authToken } = cookieStore.get('auth-token');

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
    redirect('/login');
  }
 
  return res.json();
}
