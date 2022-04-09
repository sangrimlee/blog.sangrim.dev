import React from 'react';
import { useThemeContext } from 'contexts/ThemeContext';
import SVGIcon from './SVGIcon';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button aria-label="테마 변경" onClick={toggleTheme}>
      <SVGIcon
        icon={theme === 'light' ? 'DarkModeIcon' : 'LightModeIcon'}
        size={24}
      />
    </button>
  );
}
