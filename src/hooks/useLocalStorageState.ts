import { useState } from "react";

export const useLocalStorageState = <T>(
  key: string,
  defaultValue: T
): [value: T, setValue: (value: T) => void] => {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error(e);
    }
    return defaultValue;
  });

  const setValue = (value: T) => {
    setState(value);
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return [state, setValue];
};
