// types.ts
export interface Stat {
  value: string;
  label: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: boolean;
}