import React from 'react';

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme',
      dangerouslySetInnerHTML: {
        __html: `
        (function () {
          const storageTheme = localStorage.getItem('theme');
          const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          const defaultTheme = storageTheme || osTheme;
          if (defaultTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();        
        `,
      },
    }),
  ]);
};
