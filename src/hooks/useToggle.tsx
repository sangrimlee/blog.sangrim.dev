import { useCallback, useState } from 'react';

export default function useToggle(
  initialState?: boolean,
): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialState ?? false);

  const onToggle = useCallback(() => setState(!state), [state]);

  return [state, onToggle];
}
