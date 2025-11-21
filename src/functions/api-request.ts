export async function apiRequest<T = unknown>(
  route: string,
  options: RequestInit = {},
) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/${route}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Api error`);
  }

  return (await response.json()) as T;
}
