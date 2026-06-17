import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { nav } = usePortfolio();
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-light-primary/10 text-light-primary dark:bg-dark-primary/15 dark:text-dark-primary'
        : 'text-light-muted hover:text-light-text dark:text-dark-muted dark:hover:text-dark-text'
    }`;

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
      <Logo />

      <nav className="hidden items-center rounded-2xl border border-light-border bg-light-card/80 p-1 shadow-soft backdrop-blur lg:flex dark:border-white/10 dark:bg-dark-card/80 dark:shadow-darksoft">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.path} to={item.path} className={navClass}>
              <Icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          aria-label="Toggle navigation"
          title="Menu"
          onClick={() => setOpen((current) => !current)}
          className="icon-button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-5 right-5 top-20 z-50 rounded-2xl border border-light-border bg-light-card p-2 shadow-soft lg:hidden dark:border-white/10 dark:bg-dark-card dark:shadow-darksoft">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={navClass}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
