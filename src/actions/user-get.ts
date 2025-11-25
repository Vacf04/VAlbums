'use server';
import { apiRequest } from '@/functions/api-request';
import { cookies } from 'next/headers';

export type LoginFormDataType = {
  email: string;
  password: string;
};

export type UserResponseType = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function userGet() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (token) {
      const data = await apiRequest<UserResponseType>('auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        cache: 'no-store',
      });
      if (data.data) {
        return { success: true, data: data.data, error: null };
      } else {
        return data;
      }
    } else {
      return { success: false, data: null, error: 'Token Expired.' };
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return { success: false, data: null, error: 'Error, Try Again Later.' };
    } else {
      console.error(e);
      return { success: false, data: null, error: 'Unknow Error.' };
    }
  }
}
