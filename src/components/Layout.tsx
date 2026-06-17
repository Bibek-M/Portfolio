import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-light-bg text-light-text transition-colors duration-300 dark:bg-dark-bg dark:text-dark-text">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-light-primary/10 blur-3xl dark:bg-dark-primary/10" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-light-primary/5 blur-3xl dark:bg-dark-primary/5" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
