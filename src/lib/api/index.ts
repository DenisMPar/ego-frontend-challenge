export const API_URL = import.meta.env.VITE_API_URL;

export function fetcher<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  return fetch(`${API_URL}${input}`, init).then((res) => res.json());
}
