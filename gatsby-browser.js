import React from 'react';
import ThemeProvider from './src/contexts/ThemeContext';
import 'typeface-noto-sans-kr';
import './src/styles/global.css';
import 'katex/dist/katex.min.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
