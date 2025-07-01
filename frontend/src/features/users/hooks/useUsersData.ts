// src/features/users/hooks/useUsersData.ts
import { useState, useEffect } from 'react';
import { User } from '../types';
import { fetchData } from '../../../lib/api';

export function useUsersData() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData<User[]>('/mock-users.json')
      .then(data => setUsers(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}