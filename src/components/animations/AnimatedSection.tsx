import React, { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in' | 'zoom-in' | 'rotate-in';
  delay?: number;
  threshold?: number;
  stagger?: boolean;
  duration?: 'fast' | 'normal' | 'slow';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  stagger = false,
  duration = 'normal'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold, triggerOnce: true });

  const getDurationClass = () => {
    switch (duration) {
      case 'fast': return 'duration-300';
      case 'slow': return 'duration-1000';
      default: return 'duration-600';
    }
  };

  const getAnimationClass = () => {
    if (!isInView) return 'opacity-0';
    
    const baseClasses = `${getDurationClass()} ease-out transition-all`;
    
    switch (animation) {
      case 'fade-in':
        return `${baseClasses} opacity-100 translate-y-0`;
      case 'slide-up':
        return `${baseClasses} opacity-100 translate-y-0`;
      case 'slide-left':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'slide-right':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'scale-in':
        return `${baseClasses} opacity-100 scale-100`;
      case 'zoom-in':
        return `${baseClasses} opacity-100 scale-100`;
      case 'rotate-in':
        return `${baseClasses} opacity-100 rotate-0 scale-100`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'translate-y-12 opacity-0';
      case 'slide-left':
        return 'translate-x-12 opacity-0';
      case 'slide-right':
        return '-translate-x-12 opacity-0';
      case 'scale-in':
      case 'zoom-in':
        return 'scale-95 opacity-0';
      case 'rotate-in':
        return 'rotate-12 scale-95 opacity-0';
      default:
        return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        getInitialClass(),
        isInView && getAnimationClass(),
        stagger && 'stagger-children',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};