// src/features/users/components/UsersQuickLinks.tsx
import React from 'react';
import { Plus, UsersRound, Logs, Settings } from 'lucide-react';

export const UsersQuickLinks: React.FC = () => (
  <div className="mt-4">
    <div className="text-lg font-semibold mb-2">Quick Links</div>
    <div className="flex flex-wrap gap-2">
      <button className="border rounded px-4 py-2 flex items-center gap-2 text-sm bg-white hover:bg-gray-50">
        <Plus className="w-5 h-5" /> Invite a user
      </button>
      <button className="border rounded px-4 py-2 flex items-center gap-2 text-sm bg-white hover:bg-gray-50">
        <UsersRound className="w-5 h-5" /> Roles
      </button>
      <button className="border rounded px-4 py-2 flex items-center gap-2 text-sm bg-white hover:bg-gray-50">
        <Logs className="w-5 h-5" /> Audit log
      </button>
      <button className="border rounded px-4 py-2 flex items-center gap-2 text-sm bg-white hover:bg-gray-50">
        <Settings className="w-5 h-5" /> Settings
      </button>
    </div>
  </div>
);