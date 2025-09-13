import React, { useRef, ReactNode, Children } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface StaggeredGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'zoom-in';
  threshold?: number;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-in',
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold, triggerOnce: true });

  const getAnimationClasses = (index: number) => {
    const delay = index * staggerDelay;
    
    const baseClasses = 'transition-all duration-600 ease-out';
    
    if (!isInView) {
      switch (animation) {
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-95`;
        case 'zoom-in':
          return `${baseClasses} opacity-0 scale-90`;
        default:
          return `${baseClasses} opacity-0 translate-y-4`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100`;
  };

  return (
    <div ref={ref} className={cn('grid', className)}>
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className={getAnimationClasses(index)}
          style={{
            transitionDelay: isInView ? `${index * staggerDelay}ms` : '0ms',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};