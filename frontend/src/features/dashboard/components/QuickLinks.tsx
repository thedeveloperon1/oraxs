// components/QuickLinks.tsx
import { LayoutDashboard, UsersRound as ManageUsersIcon, Hospital as ClinicIcon, FileClock } from 'lucide-react';

const quickLinks = [
  { label: 'Documentation', icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: 'Manage Users', icon: <ManageUsersIcon className="w-5 h-5" /> },
  { label: 'Add Clinic', icon: <ClinicIcon className="w-5 h-5" /> },
  { label: 'Billing', icon: <FileClock className="w-5 h-5" /> },
];

export const QuickLinks = () => (
  <div className="mt-4">
    <div className="text-lg font-semibold mb-2">Quick Links</div>
    <div className="flex flex-wrap gap-2">
      {quickLinks.map(link => (
        <button
          key={link.label}
          className="border rounded px-4 py-2 flex items-center gap-2 text-sm bg-white hover:bg-gray-50"
        >
          {link.icon}
          <span>{link.label}</span>
        </button>
      ))}
    </div>
  </div>
);