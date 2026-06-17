export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-9 w-9 fill-current text-light-text dark:text-dark-text" aria-hidden="true">
          <path d="M14 50V18c0-7.2 5.8-13 13-13h2c11.6 0 21 9.4 21 21v6.4c0 5.5-4.5 10-10 10s-10-4.5-10-10V24c0-2.2-1.8-4-4-4s-4 1.8-4 4v26c0 2.2-1.8 4-4 4s-4-1.8-4-4Z" />
        </svg>
      </div>
      <span className="text-sm font-extrabold tracking-normal">Bibekananda Mohanta.</span>
    </div>
  );
}
