import React, { useEffect, useMemo, useRef } from 'react';
import { useThemeContext } from 'contexts/ThemeContext';
import useConfigQuery from 'hooks/useConfigQuery';

export default function Utterances() {
  const { theme } = useThemeContext();
  const {
    utterances: { repository, label },
  } = useConfigQuery();
  const elementRef = useRef<HTMLDivElement>(null);
  const utterancesTheme = useMemo(
    () => (theme === 'dark' ? 'github-dark' : 'github-light'),
    [theme],
  );

  useEffect(() => {
    if (elementRef.current === null) {
      return;
    }
    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: repository,
      'issue-term': 'pathname',
      label: label,
      theme: utterancesTheme,
      crossorigin: 'annonymous',
      async: 'true',
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    elementRef.current.appendChild(utterances);
  }, []);

  useEffect(() => {
    const utterancesFrame =
      document.querySelector<HTMLIFrameElement>('.utterances-frame');
    if (utterancesFrame === null) {
      return;
    }
    utterancesFrame.contentWindow?.postMessage(
      {
        type: 'set-theme',
        theme: utterancesTheme,
      },
      'https://utteranc.es',
    );
  }, [utterancesTheme]);

  return <div ref={elementRef} />;
}
