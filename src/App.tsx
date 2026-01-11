import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import RootNavigator from './navigation/RootNavigator';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="app">
          <RootNavigator />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;