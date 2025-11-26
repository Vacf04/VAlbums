'use server';
import { apiRequest } from '@/functions/api-request';
import { UserResponseType } from './user-get';

export default async function register(registerFormData: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const data = await apiRequest<UserResponseType>('auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
      }),
    });
    return data;
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
