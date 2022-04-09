const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Noto Sans KR"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      backdrop: 'rgba(0,0,0,0.4)',
      white: '#ffffff',
      black: '#000000',
      highlight: 'rgba(253, 255, 50, 0.8)',
      custom: {
        50: '#fff',
        100: '#f1f1f1',
        200: '#eee',
        300: '#ccc',
        400: '#999',
        500: '#666',
        600: '#444',
        700: '#333',
        800: '#111',
        900: '#000',
      },
    },
    extend: {
      boxShadow: {
        card: '4px 12px 30px 4px rgba(0,0,0,0.1)',
      },
      aspectRatio: {
        thumbnail: '4 / 3',
      },
      zIndex: {
        sticky: 50,
        fixed: 100,
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        waveHand: {
          '0%, 60%, 100%': {
            transform: 'rotate(0deg)',
          },
          '10%, 30%': {
            transform: 'rotate(14deg)',
          },
          '20%': {
            transform: 'rotate(-8deg)',
          },
          '40%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'wave-hand': 'waveHand 2.5s linear infinite 1s',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
