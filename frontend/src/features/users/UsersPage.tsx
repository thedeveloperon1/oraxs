// src/features/users/UsersPage.tsx
import React, { useState } from 'react';
import { useUsersData } from './hooks/useUsersData';
import { UsersFilter } from './components/UsersFilter';
import { UsersTable } from './components/UsersTable';
import { UsersQuickLinks } from './components/UsersQuickLinks';

const UsersPage: React.FC = () => {
  const { users, loading, error } = useUsersData();
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  const [clinic, setClinic] = useState('');
  const [status, setStatus] = useState('');

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  const filtered = users
    .filter(u => (search ? u.name.toLowerCase().includes(search.toLowerCase()) : true))
    .filter(u => (role ? u.role === role : true))
    .filter(u => (clinic ? u.clinic === clinic : true))
    .filter(u => (status ? String(u.status) === status : true));

  return (
    <div className="p-4">
      <UsersFilter
        search={search}
        onSearchChange={setSearch}
        role={role}
        onRoleChange={setRole}
        clinic={clinic}
        onClinicChange={setClinic}
        status={status}
        onStatusChange={setStatus}
      />
      <div className="bg-white border rounded mb-6 overflow-x-auto">
        <UsersTable users={filtered} />
      </div>
      <UsersQuickLinks />
    </div>
  );
};

export default UsersPage;