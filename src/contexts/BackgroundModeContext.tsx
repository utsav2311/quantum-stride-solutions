import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type BackgroundMode = 'subtle' | 'vivid';

interface BackgroundModeContextType {
  mode: BackgroundMode;
  setMode: (mode: BackgroundMode) => void;
  toggle: () => void;
}

const BackgroundModeContext = createContext<BackgroundModeContextType | undefined>(undefined);

const STORAGE_KEY = 'bg3d-mode';

export const BackgroundModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<BackgroundMode>(() => {
    if (typeof window === 'undefined') return 'vivid';
    const stored = window.localStorage.getItem(STORAGE_KEY) as BackgroundMode | null;
    return stored === 'subtle' || stored === 'vivid' ? stored : 'vivid';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggle = () => setMode((prev) => (prev === 'vivid' ? 'subtle' : 'vivid'));

  return (
    <BackgroundModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </BackgroundModeContext.Provider>
  );
};

export const useBackgroundMode = () => {
  const context = useContext(BackgroundModeContext);
  if (!context) {
    throw new Error('useBackgroundMode must be used within a BackgroundModeProvider');
  }
  return context;
};
