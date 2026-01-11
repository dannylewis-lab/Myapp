import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { storageService } from '../services/storageService';

type Theme = 'light' | 'dark';
type Language = 'en' | 'es' | 'fr';

interface ThemeContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => Promise<void>;
  setLanguage: (lang: Language) => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguageState] = useState<Language>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme and language from storage
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const savedTheme = await storageService.getItem('theme') as Theme | null;
        const savedLanguage = await storageService.getItem('language') as Language | null;
        
        if (savedTheme) setTheme(savedTheme);
        if (savedLanguage) setLanguageState(savedLanguage);
      } catch (error) {
        console.error('Failed to load preferences:', error);
      } finally {
        setIsInitialized(true);
      }
    };

    loadPreferences();
  }, []);

  const toggleTheme = useCallback(async () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      await storageService.setItem('theme', newTheme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  }, [theme]);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    try {
      await storageService.setItem('language', lang);
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  }, []);

  if (!isInitialized) {
    return null; // Or a splash screen component
  }

  const value: ThemeContextType = {
    theme,
    language,
    toggleTheme,
    setLanguage,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};