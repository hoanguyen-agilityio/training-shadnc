// Libs
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

// Theme
import { useTheme } from '@/components';

// Components
import { Button } from '../ui/button';

interface IModeToggle {
  className?: string;
}

export const ModeToggle = ({ className }: IModeToggle) => {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={toggleTheme}
      aria-label="Light mode switch"
      className={cn(
        'relative h-14 w-28 rounded-full p-1 transition-all duration-300 ease-in-out',
        'hover:scale-105 focus:scale-105',
        isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300',
        className,
      )}
    >
      {/* Sun Icon */}
      <div
        className={cn(
          'absolute left-1 top-1 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ease-in-out',
          !isDark
            ? 'bg-gradient-to-br from-orange-400 to-yellow-500 text-white shadow-lg'
            : 'bg-transparent text-gray-500',
        )}
      >
        <Sun className="h-6 w-6" />
      </div>

      {/* Moon Icon */}
      <div
        className={cn(
          'absolute right-1 top-1 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ease-in-out',
          isDark ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent text-gray-500',
        )}
      >
        <Moon className="h-6 w-6" />
      </div>
    </Button>
  );
};
