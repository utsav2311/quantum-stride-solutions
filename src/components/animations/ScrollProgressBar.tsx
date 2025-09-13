import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';

interface ScrollProgressBarProps {
  className?: string;
  position?: 'top' | 'bottom';
  color?: 'primary' | 'accent' | 'gradient';
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className,
  position = 'top',
  color = 'primary'
}) => {
  const scrollProgress = useScrollProgress();

  const getColorClass = () => {
    switch (color) {
      case 'accent':
        return 'bg-accent';
      case 'gradient':
        return 'bg-gradient-to-r from-primary to-accent';
      default:
        return 'bg-primary';
    }
  };

  const positionClass = position === 'top' ? 'top-0' : 'bottom-0';

  return (
    <div
      className={cn(
        'fixed left-0 right-0 h-1 z-50 transition-all duration-300',
        positionClass,
        className
      )}
    >
      <div
        className={cn(
          'h-full transition-all duration-150 ease-out',
          getColorClass()
        )}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};