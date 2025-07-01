// src/pages/users/index.tsx

import React from 'react';
import UsersPage from '../../features/users/UsersPage';

/**
 * UsersRoute wraps the UsersPage for the '/users' path
 */
const UsersRoute: React.FC = () => {
  return <UsersPage />;
};

export default UsersRoute;
