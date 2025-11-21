'use server';
import { apiRequest } from '@/functions/api-request';
import { cookies } from 'next/headers';

export type LoginFormDataType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
};

export default async function login(loginFormData: LoginFormDataType) {
  try {
    const data = await apiRequest<LoginResponseType>('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginFormData.email,
        password: loginFormData.password,
      }),
    });
    (await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    return { success: true, data: null, error: null };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return { success: false, data: null, error: 'Error, try again later.' };
    } else {
      console.error(e);
      return { success: false, data: null, error: 'Unknown Error.' };
    }
  }
}
