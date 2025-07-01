// src/features/users/components/UsersFilter.tsx
import React from 'react';

interface UsersFilterProps {
  search: string;
  onSearchChange: (val: string) => void;
  role: string;
  onRoleChange: (val: string) => void;
  clinic: string;
  onClinicChange: (val: string) => void;
  status: string;
  onStatusChange: (val: string) => void;
}

export const UsersFilter: React.FC<UsersFilterProps> = ({ search, onSearchChange, role, onRoleChange, clinic, onClinicChange, status, onStatusChange }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    <div className="flex-1">
      <input
        type="text"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search users..."
        className="border rounded px-3 py-2 w-full text-sm"
      />
    </div>
    <select value={role} onChange={e => onRoleChange(e.target.value)} className="border rounded px-3 py-2 text-sm">
      <option value="">Role: All</option>
      <option value="Admin">Admin</option>
      <option value="Doctor">Doctor</option>
      <option value="Receptionist">Receptionist</option>
    </select>
    <select value={clinic} onChange={e => onClinicChange(e.target.value)} className="border rounded px-3 py-2 text-sm">
      <option value="">Clinic: All</option>
      <option value="Clinic A">Clinic A</option>
      <option value="Clinic B">Clinic B</option>
    </select>
    <select value={status} onChange={e => onStatusChange(e.target.value)} className="border rounded px-3 py-2 text-sm">
      <option value="">Status: All</option>
      <option value="true">Active</option>
      <option value="false">Inactive</option>
    </select>
    <button className="bg-action text-white rounded px-4 py-2 text-sm flex items-center gap-2">
      + Add User
    </button>
  </div>
);
