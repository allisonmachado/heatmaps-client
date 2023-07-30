import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
 
export async function GET() {
  cookies().set({
    name: 'auth-token',
    value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoic3VwZXItam9obkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InN1cGVyLmpvaG4iLCJpYXQiOjE2OTA3MTM1MDYsImV4cCI6MTY5MDc5OTkwNn0.GseuXMhyaEQZhtXMQus-qweHaEfTI2VDP9PecGkZaW4',
    httpOnly: true,
    path: '/',
  });
  redirect('/');
}