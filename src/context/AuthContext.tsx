import React, { createContext, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';
import { STORAGE_KEYS } from '../utils/constants';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  authToken: string | null;
  register: (email: string, password: string, firstName: string, lastName: string, phone: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  restoreToken: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = React.useReducer((prevState: any, action: any) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return { ...prevState, authToken: action.payload, isLoading: false };
      case 'SIGN_IN':
        return { ...prevState, authToken: action.payload.token, user: action.payload.user };
      case 'SIGN_OUT':
        return { ...prevState, authToken: null, user: null };
      case 'UPDATE_USER':
        return { ...prevState, user: { ...prevState.user, ...action.payload } };
      default:
        return prevState;
    }
  }, { isLoading: true, authToken: null, user: null });

  const restoreToken = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      dispatch({ type: 'RESTORE_TOKEN', payload: token });
    } catch (e) {
      dispatch({ type: 'RESTORE_TOKEN', payload: null });
    }
  }, []);

  React.useEffect(() => {
    restoreToken();
  }, [restoreToken]);

  const register = useCallback(async (email: string, password: string, firstName: string, lastName: string, phone: string) => {
    const response = await fetch('https://api.myapp.local/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName, phone }),
    });
    const data = await response.json();
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
    dispatch({ type: 'SIGN_IN', payload: { token: data.token, user: data.user } });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const response = await fetch('https://api.myapp.local/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
    dispatch({ type: 'SIGN_IN', payload: { token: data.token, user: data.user } });
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    dispatch({ type: 'SIGN_OUT' });
  }, []);

  const updateProfile = useCallback(async (updates: Partial<User>) => {
    const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    const response = await fetch('https://api.myapp.local/users/profile', {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    dispatch({ type: 'UPDATE_USER', payload: data.user });
  }, []);

  const value: AuthContextType = {
    user: state.user,
    isLoading: state.isLoading,
    authToken: state.authToken,
    register,
    login,
    logout,
    updateProfile,
    restoreToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within AuthProvider');
  return context;
};