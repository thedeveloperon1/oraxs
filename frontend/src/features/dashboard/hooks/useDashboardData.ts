// src/features/dashboard/hooks/useDashboardData.ts
import { useState, useEffect } from 'react';
import { fetchData } from '../../../lib/api';
import { Stat, User } from '../types';

interface DashboardData {
  stats: Stat[];
  users: User[];
}

export function useDashboardData() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData<DashboardData>('/mock-dashboard.json')
      .then(({ stats, users }) => {
        setStats(stats);
        setUsers(users);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { stats, users, loading, error };
}
