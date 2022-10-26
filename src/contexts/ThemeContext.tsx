import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Theme } from 'types';
import { getThemeStorage } from 'utils/storage';
import { addThemeClass, getOSTheme } from 'utils/theme';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const defaultState: ThemeState = {
  theme: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultState);

export const useThemeContext = () => useContext(ThemeContext);

const getDefaultTheme = () => getThemeStorage() || getOSTheme();

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme());

  const toggleTheme = useCallback(() => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', toggledTheme);
    setTheme(toggledTheme);
  }, [theme]);

  useEffect(() => {
    addThemeClass(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
