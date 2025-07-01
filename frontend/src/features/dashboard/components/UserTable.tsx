// components/UserTable.tsx
import { User } from '../types';

export const UserTable = ({ users }: { users: User[] }) => (
  <table className="w-full text-sm bg-white">
    <thead>
      <tr className="border-b">
        <th className="p-2 text-left">Name</th>
        <th className="p-2 text-left">Email</th>
        <th className="p-2 text-left">Role</th>
        <th className="p-2 text-center">Status</th>
      </tr>
    </thead>
    <tbody>
      {users.map(u => (
        <tr key={u.id} className="border-b hover:bg-gray-50">
          <td className="p-2">{u.name}</td>
          <td className="p-2">{u.email}</td>
          <td className="p-2 text-green-600">{u.role}</td>
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
        </tr>
      ))}
    </tbody>
  </table>
);