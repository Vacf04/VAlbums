'use server';
import { cookies } from 'next/headers';

export type LoginFormDataType = {
  email: string;
  password: string;
};

export default async function userGet() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (token) {
      const response = await fetch('http://localhost:3001/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        cache: 'no-store',
      });
      const data = await response.json();
      return data;
    } else {
      return null;
    }
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
