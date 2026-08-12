import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
}

export function useReveal<T extends HTMLElement>({
  threshold = 0.15,
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}
