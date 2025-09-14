import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  stagger?: boolean;
}

export const TextReveal = ({ 
  children, 
  delay = 0, 
  className = "",
  stagger = false 
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  if (stagger && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <div ref={ref} className={`${className}`}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 ${hasAnimated ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: `${delay + index * 100}ms`,
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <div
        className={`opacity-0 ${hasAnimated ? 'animate-text-reveal' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};