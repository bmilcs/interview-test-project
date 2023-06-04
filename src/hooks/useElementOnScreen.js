import { useEffect, useState } from "react";

const useElementOnScreen = (elementRef, rootMargin = "0px") => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { rootMargin },
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, rootMargin]);

  return isOnScreen;
};

export default useElementOnScreen;
