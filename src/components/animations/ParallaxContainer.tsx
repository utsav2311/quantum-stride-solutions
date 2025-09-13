import React, { useRef, ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const transform = useParallax(ref, { speed, direction });

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{ transform }}
    >
      {children}
    </div>
  );
};