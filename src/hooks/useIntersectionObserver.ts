import { useState, useEffect, RefObject } from "react";

export const useIntersectionObserver = (element: RefObject<HTMLElement>) => {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  const functionForObservable = (entries: any, observer: any) => {
    entries
      .filter((entry: any) => entry.isIntersecting)
      .forEach((entry: any) => {
        setIsOnScreen(true);
        observer.disconnect();
      });
  };

  useEffect(() => {
    if (element.current !== null) {
      const observer = new IntersectionObserver(functionForObservable, {
        threshold: 0.5,
      });

      observer.observe(element.current);
    }
  }, [element]);

  return isOnScreen;
};
