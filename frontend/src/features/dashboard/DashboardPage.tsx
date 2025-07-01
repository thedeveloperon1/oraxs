// DashboardPage.tsx
import { useDashboardData } from './hooks/useDashboardData';
import { StatsCard }          from './components/StatsCard';
import { UserTable }          from './components/UserTable';
import { QuickLinks }         from './components/QuickLinks';

const DashboardPage = () => {
  const { stats, users, loading, error } = useDashboardData();

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map(stat => <StatsCard key={stat.label} stat={stat} />)}
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className="text-sm font-semibold">Filter A-Z ▼</button>
        <button className="bg-action text-white rounded px-4 py-1 text-sm">+ Add User</button>
      </div>
      <div className="bg-white border rounded mb-6 overflow-x-auto">
        <UserTable users={users} />
      </div>
      <QuickLinks />
    </div>
  );
};

export default DashboardPage;
