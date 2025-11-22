export async function apiRequest<T = unknown>(
  route: string,
  options: RequestInit = {},
) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/${route}`;

  const response = await fetch(url, options);
  const responseJson = await response.json();
  if (!response.ok) {
    if (responseJson.error) {
      if (typeof responseJson.error === 'string') {
        return { success: false, data: null, error: [responseJson.message] };
      } else {
        return { success: false, data: null, error: responseJson.message };
      }
    }
  }

  return {
    success: true,
    data: responseJson as T,
    error: null,
  };
}
