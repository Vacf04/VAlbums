'use server';
import { cookies } from 'next/headers';

export type LoginFormDataType = {
  email: string;
  password: string;
};

export default async function login(loginFormData: LoginFormDataType) {
  try {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginFormData.email,
        password: loginFormData.password,
      }),
    });

    const data = await response.json();
    (await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        message: 'Error, Try Again Later',
      };
    } else {
      return { message: 'Unknown Error' };
    }
  }
}
