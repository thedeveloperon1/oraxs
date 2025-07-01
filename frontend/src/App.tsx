// src/App.tsx (updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Shell from './components/layout/Shell';
import DashboardRoute from './pages/dashboard';
import UsersRoute from './pages/users';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { RoleRoute } from './components/common/RoleRoute';
import LoginPage from './pages/auth/LoginPage';

const App: React.FC = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Shell />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardRoute />} />
          <Route path="dashboard" element={<DashboardRoute />} />
          <Route
            path="users"
            element={
              <RoleRoute allowedRoles={[ 'SuperAdmin', 'Admin' ]}>
                <UsersRoute />
              </RoleRoute>
            }
          />
          {/* additional role-based routes here */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;