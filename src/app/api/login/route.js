import { loginRequest } from '@/data/user'

/**
 * Login Proxy
 */
export async function POST(request) {
  const body = await request.json()

  const loginResult = await loginRequest({
    email: body.email,
    password: body.password,
  });

  return loginResult;
}