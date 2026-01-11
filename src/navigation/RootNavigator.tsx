import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

/**
 * Root Navigation Component
 * Handles navigation between authenticated and unauthenticated screens
 */

const RootNavigator: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <div className={`splash-screen theme-${theme}`}>
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`root-navigator theme-${theme}`}>
      {isAuthenticated ? (
        // Authenticated navigation
        <div className="authenticated-container">
          <header className="header">
            <h1>MyApp - Financial Management</h1>
          </header>
          <nav className="sidebar">
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/transactions">Transactions</a></li>
              <li><a href="/budget">Budget</a></li>
              <li><a href="/reports">Reports</a></li>
              <li><a href="/settings">Settings</a></li>
            </ul>
          </nav>
          <main className="main-content">
            {/* TODO: Implement route-based content rendering */}
            <div className="placeholder">
              <p>Welcome to MyApp Financial Management</p>
              <p>Dashboard and other features coming soon...</p>
            </div>
          </main>
        </div>
      ) : (
        // Unauthenticated navigation
        <div className="unauthenticated-container">
          <header className="auth-header">
            <h1>MyApp</h1>
            <p>Financial Management Made Easy</p>
          </header>
          <main className="auth-content">
            {/* TODO: Implement authentication screens (Login/Signup) */}
            <div className="auth-placeholder">
              <p>Login or Sign up to continue</p>
              <button className="btn-primary">Login</button>
              <button className="btn-secondary">Sign Up</button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default RootNavigator;