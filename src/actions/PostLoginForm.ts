export type LoginFormDataType = {
  email: string;
  password: string;
};

export default async function PostLoginForm(loginFormData: LoginFormDataType) {
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

    const responseJson = await response.json();

    return responseJson;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error('Error in sign in, try again later.');
    }
  }
}
