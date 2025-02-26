export const API_URL = import.meta.env.VITE_API_URL;

export async function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_URL}${input}`, init);

  if (!res.ok) {
    const errorMessage = `Error ${res.status}: ${res.statusText}`;
    throw new Error(errorMessage);
  }
  const response = await res.json();

  return response;
}
