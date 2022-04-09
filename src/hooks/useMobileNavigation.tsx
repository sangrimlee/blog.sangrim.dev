import { useCallback, useEffect } from 'react';

export default function useMobileNavigation(): [() => void, () => void] {
  const handleOpen = useCallback(() => {
    document.documentElement.classList.add('mobile-nav-open');
  }, []);

  const handleClose = useCallback(() => {
    document.documentElement.classList.remove('mobile-nav-open');
  }, []);

  useEffect(() => {
    handleClose();
  }, []);

  return [handleOpen, handleClose];
}
