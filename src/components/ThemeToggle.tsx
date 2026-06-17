import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-full border border-light-border bg-light-card p-1 shadow-soft dark:border-white/10 dark:bg-dark-card dark:shadow-darksoft">
      <button
        type="button"
        aria-label="Use light mode"
        title="Light mode"
        onClick={() => setTheme('light')}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
          !isDark
            ? 'bg-light-primary/15 text-light-text'
            : 'text-dark-muted hover:text-dark-text'
        }`}
      >
        <Sun size={18} />
      </button>
      <button
        type="button"
        aria-label="Use dark mode"
        title="Dark mode"
        onClick={() => setTheme('dark')}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
          isDark
            ? 'bg-dark-primary/20 text-dark-primary'
            : 'text-light-muted hover:text-light-text'
        }`}
      >
        <Moon size={17} />
      </button>
    </div>
  );
}
