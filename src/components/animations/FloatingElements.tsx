interface FloatingElement {
  id: number;
  size: string;
  position: { top: string; left: string };
  animation: string;
  delay: number;
  color: string;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export const FloatingElements = ({ count = 8, className = "" }: FloatingElementsProps) => {
  const animations = [
    'animate-float',
    'animate-floating-horizontal', 
    'animate-morphing',
    'animate-pulse-slow'
  ];

  const colors = [
    'bg-primary/5',
    'bg-accent/5',
    'bg-medical-teal/5',
    'bg-medical-blue/5'
  ];

  const elements: FloatingElement[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() > 0.5 ? 'w-32 h-32' : 'w-20 h-20',
    position: {
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    },
    animation: animations[Math.floor(Math.random() * animations.length)],
    delay: Math.random() * 2000,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute rounded-full ${element.size} ${element.color} ${element.animation}`}
          style={{
            top: element.position.top,
            left: element.position.left,
            animationDelay: `${element.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};