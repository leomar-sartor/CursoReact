import { useCallback, useRef } from "react";

export const useDebounce = (delay = 800, DelayInFirstTime = false) => {
  const isFirstTime = useRef(DelayInFirstTime);
  const debouncing = useRef<NodeJS.Timeout>();

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirstTime.current) {
        isFirstTime.current = false;
        func();
      } else {
        if (debouncing.current) {
          clearTimeout(debouncing.current);
        }
        debouncing.current = setTimeout(() => func(), delay);
      }
    },
    [delay]
  );

  return { debounce };
};
