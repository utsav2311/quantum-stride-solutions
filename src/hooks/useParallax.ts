import { useEffect, useState, RefObject } from 'react';

interface UseParallaxProps {
  speed?: number;
  direction?: 'up' | 'down';
}

export const useParallax = (
  elementRef: RefObject<HTMLElement>,
  { speed = 0.5, direction = 'up' }: UseParallaxProps = {}
) => {
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateTransform = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const rate = scrolled * speed;
        const yPos = direction === 'up' ? -rate : rate;
        setTransform(`translate3d(0, ${yPos}px, 0)`);
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateTransform);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, speed, direction]);

  return transform;
};