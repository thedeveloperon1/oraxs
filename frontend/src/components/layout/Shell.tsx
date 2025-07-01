import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Shell = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`transition-all duration-200 ${collapsed ? 'ml-16' : 'ml-64'}`}>
        <Topbar collapsed={collapsed} />
        <main className="pt-16 p-4 bg-gray-50 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Shell;
