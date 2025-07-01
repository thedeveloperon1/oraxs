// src/pages/dashboard/index.tsx

import React from 'react';
import DashboardPage from '../../features/dashboard/DashboardPage';

// This wrapper file maps the '/dashboard' route to your feature component
const DashboardRoute: React.FC = () => {
  return <DashboardPage />;
};

export default DashboardRoute;
