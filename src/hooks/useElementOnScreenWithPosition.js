import { useEffect, useState } from "react";

const useElementOnScreenWithPosition = (elementRef, rootMargin = "0px") => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [elementPosition, setElementPosition] = useState(null);

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

  useEffect(() => {
    const element = elementRef.current;

    const handleScroll = () => {
      if (element) {
        const { top, left } = element.getBoundingClientRect();
        const isElementVisible =
          top + element.offsetHeight >= 0 && top <= window.innerHeight;
        if (isElementVisible) {
          setElementPosition({ top, left });
        }
      }
    };

    if (isOnScreen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOnScreen, elementRef]);

  return { isOnScreen, elementPosition };
};

export default useElementOnScreenWithPosition;
