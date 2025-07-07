import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'admin' | 'teacher' | 'employee' | 'parent';

interface User {
  name: string;
  role: UserRole;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    // Simulated auth logic
    let role: UserRole = 'parent';
    if (email.includes('admin')) role = 'admin';
    else if (email.includes('teacher')) role = 'teacher';
    else if (email.includes('employee')) role = 'employee';

    setUser({ name: email.split('@')[0], role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
