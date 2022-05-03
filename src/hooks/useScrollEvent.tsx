import { useEffect, useRef } from 'react';

export default function useScrollEvent(callback: () => void): void {
  const isMount = useRef<boolean>(false);

  function toFit(cb: () => void) {
    let flag = false;

    return function trigger() {
      if (flag) {
        return;
      }
      flag = true;
      return requestAnimationFrame(() => {
        flag = false;
        if (isMount.current) {
          return cb();
        } else {
          return;
        }
      });
    };
  }

  useEffect(() => {
    isMount.current = true;
    window.addEventListener('scroll', toFit(callback));
    return () => {
      isMount.current = false;
      window.removeEventListener('scroll', toFit(callback));
    };
  }, []);
}
