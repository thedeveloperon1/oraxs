/**
 * Central API client that toggles between mock data in dev
 * and real backend in production via VITE_API_URL.
 */
export async function fetchData<T>(endpoint: string): Promise<T> {
  const base = import.meta.env.DEV
    ? ''                    // for dev serve mocks from public/
    : import.meta.env.VITE_API_URL; // production backend URL
  const url = `${base}${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}