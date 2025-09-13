import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MicroInteractionProps {
  children: ReactNode;
  type?: 'lift' | 'scale' | 'glow' | 'bounce' | 'rotate' | 'pulse' | 'shake' | 'tilt';
  intensity?: 'subtle' | 'normal' | 'strong';
  className?: string;
  disabled?: boolean;
}

export const MicroInteraction: React.FC<MicroInteractionProps> = ({
  children,
  type = 'scale',
  intensity = 'normal',
  className,
  disabled = false
}) => {
  const getInteractionClasses = () => {
    if (disabled) return '';

    const intensityMap = {
      subtle: {
        lift: 'hover:-translate-y-1',
        scale: 'hover:scale-[1.02]',
        glow: 'hover:shadow-md',
        bounce: 'hover:animate-pulse',
        rotate: 'hover:rotate-1',
        pulse: 'hover:animate-pulse',
        shake: 'hover:animate-bounce',
        tilt: 'hover:rotate-1'
      },
      normal: {
        lift: 'hover:-translate-y-2',
        scale: 'hover:scale-105',
        glow: 'hover:shadow-lg hover:shadow-primary/20',
        bounce: 'hover:animate-bounce',
        rotate: 'hover:rotate-3',
        pulse: 'hover:animate-pulse',
        shake: 'hover:animate-bounce',
        tilt: 'hover:rotate-3'
      },
      strong: {
        lift: 'hover:-translate-y-4',
        scale: 'hover:scale-110',
        glow: 'hover:shadow-xl hover:shadow-primary/30',
        bounce: 'hover:animate-bounce',
        rotate: 'hover:rotate-6',
        pulse: 'hover:animate-pulse',
        shake: 'hover:animate-bounce',
        tilt: 'hover:rotate-6'
      }
    };

    return intensityMap[intensity][type];
  };

  return (
    <div
      className={cn(
        'transition-all duration-300 ease-out',
        'transform-gpu', // Use GPU acceleration
        getInteractionClasses(),
        className
      )}
    >
      {children}
    </div>
  );
};