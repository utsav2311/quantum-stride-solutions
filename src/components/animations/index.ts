// Export all animation components and hooks
export { AnimatedSection } from './AnimatedSection';
export { ParallaxContainer } from './ParallaxContainer';
export { StaggeredGrid } from './StaggeredGrid';
export { MicroInteraction } from './MicroInteraction';
export { ScrollProgressBar } from './ScrollProgressBar';
export { ParticleSystem } from './ParticleSystem';
export { TextReveal } from './TextReveal';
export { FloatingElements } from './FloatingElements';

// Export hooks
export { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
export { useScrollProgress } from '../../hooks/useScrollProgress';
export { useParallax } from '../../hooks/useParallax';

// Animation utility functions
export const createStaggerDelay = (index: number, baseDelay: number = 100) => {
  return index * baseDelay;
};

export const easeOutExpo = 'cubic-bezier(0.19, 1, 0.22, 1)';
export const easeOutBack = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
export const easeInExpo = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';

// Animation presets
export const animationPresets = {
  gentle: {
    duration: 600,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 0
  },
  bouncy: {
    duration: 800,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    delay: 0
  },
  quick: {
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 0
  },
  dramatic: {
    duration: 1200,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    delay: 200
  }
};