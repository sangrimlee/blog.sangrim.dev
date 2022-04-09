import { Theme } from 'types';

export const getThemeStorage = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    return theme === 'dark' ? 'dark' : 'light';
  }
  return undefined;
};

export const setThemeStorage = (theme: Theme) => {
  localStorage.setItem('theme', theme);
};
