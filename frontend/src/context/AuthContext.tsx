// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface AuthUser {
  id: string;
  name: string;
  role: 'SuperAdmin' | 'Admin' | 'Doctor' | 'Receptionist' | 'Patient';
  token: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // Attempt restore from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('auth_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async (username: string, password: string) => {
    // replace with real API call
    const fakeUser: AuthUser = {
      id: '1',
      name: username,
      role: username === 'super' ? 'SuperAdmin' : 'Admin',
      token: 'fake-jwt-token'
    };
    setUser(fakeUser);
    localStorage.setItem('auth_user', JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};