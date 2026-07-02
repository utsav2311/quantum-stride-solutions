import { useBackgroundMode } from '@/contexts/BackgroundModeContext';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Cloud, Sparkles } from 'lucide-react';

const BackgroundStyleToggle = () => {
  const { mode, toggle } = useBackgroundMode();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={toggle}
          aria-label={mode === 'vivid' ? 'Switch to subtle 3D background' : 'Switch to vivid 3D background'}
          className="fixed bottom-5 left-5 z-40 h-10 w-10 rounded-full border-border/50 bg-background/80 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:bg-background hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          {mode === 'vivid' ? (
            <Cloud className="h-4 w-4 text-foreground" />
          ) : (
            <Sparkles className="h-4 w-4 text-primary" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{mode === 'vivid' ? 'Subtle 3D' : 'Vivid 3D'}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default BackgroundStyleToggle;
