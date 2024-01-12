import { RefObject, useEffect, useRef } from 'react';

export const useObserver = (
  ref: RefObject<HTMLDivElement>,
  callback: (v: boolean) => void,
) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const showPanel: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        callback(false);
      }
      if (!entries[0].isIntersecting) {
        callback(true);
      }
    };

    observer.current = new IntersectionObserver(showPanel);
    if (ref.current !== null) {
      observer.current?.observe(ref.current);
    }
  }, []);
};
