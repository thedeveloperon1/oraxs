// src/features/users/components/UsersTable.tsx
import React from 'react';
import { User } from '../types';
import { ChevronDown } from 'lucide-react';

interface UsersTableProps {
    users: User[];
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => (
    <table className="w-full text-sm bg-white">
        <thead>
            <tr className="border-b">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Role</th>
                <th className="p-2 text-left">Clinic</th>
                <th className="p-2 text-center">Status</th>
                <th className="p-2 text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map(u => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{u.name}</td>
                    <td className="p-2">{u.email}</td>
                    <td className="p-2 text-green-600">{u.role}</td>
                    <td className="p-2">{u.clinic}</td>
                    <td className="p-2 text-center">
                        <span
                            className={`relative inline-block w-8 h-4 rounded-full transition-colors duration-300 ${u.status ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        >
                            <span
                                className={`absolute top-0.5 left-1 block w-3 h-3 bg-white rounded-full shadow transform transition-transform duration-300 ${u.status ? 'translate-x-3' : 'translate-x-0'
                                    }`}
                            />
                        </span>
                    </td>
                    <td className="p-2 text-right">
                        <button className="border bg-green-100 text-green-700 rounded px-3 py-1 text-sm flex items-center gap-1">
                            <span>Edit</span> <ChevronDown className="w-4 h-4" />
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
