// src/components/common/RoleRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface RoleRouteProps {
  allowedRoles: AuthUser['role'][];
  children: JSX.Element;
}

export const RoleRoute: React.FC<RoleRouteProps> = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return children;
};