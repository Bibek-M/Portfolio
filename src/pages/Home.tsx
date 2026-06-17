import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";

export default function Home() {
  const { profile, socials, facts } = usePortfolio();

  return (
    <main className="page-shell justify-center">
      <section className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-light-primary dark:bg-dark-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.34em] text-light-text dark:text-dark-text">
              Hey, I'm
            </span>
          </div>
          <h1 className="max-w-3xl text-5xl font-extrabold tracking-normal text-light-text sm:text-6xl lg:text-7xl dark:text-dark-text">
            Bibekananda{" "}
            <span className="text-light-primary dark:text-dark-primary">
              Mohanta.
            </span>
          </h1>
          <p className="mt-5 text-xl font-medium text-light-text dark:text-dark-text">
            {profile.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-light-muted dark:text-dark-muted">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="accent-button">
              View My Work <ArrowUpRight size={17} />
            </Link>
            <a href={`mailto:${profile.email}`} className="ghost-button">
              Contact Me{" "}
              <span className="h-1.5 w-1.5 rounded-full bg-light-primary dark:bg-dark-primary" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="icon-button"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-light-primary/35 dark:border-dark-primary/30" />
          <div className="absolute -right-4 top-10 h-64 w-64 rounded-[2rem] bg-light-primary/10 dark:bg-dark-primary/10" />
          <div className="absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-light-primary/65 dark:bg-dark-primary/45" />
          <div className="surface relative rounded-[2rem] p-0">
            <img
              src={profile.heroImage}
              alt="portrait"
              className="aspect-[4/5] w-full h-full rounded-[1.5rem] object-cover grayscale-[15%]"
            />
          </div>
        </div>
      </section>

      <section className="surface mt-12 grid gap-4 rounded-2xl p-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => {
          const Icon = fact.icon;
          return (
            <div
              key={fact.label}
              className="flex items-center gap-4 border-light-border px-2 py-3 lg:border-r lg:last:border-r-0 dark:border-white/10"
            >
              <span className="icon-button h-10 w-10 rounded-xl">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-light-text dark:text-dark-text">
                  {fact.label}
                </span>
                <span className="mt-1 block text-xs text-light-muted dark:text-dark-muted">
                  {fact.value}
                </span>
              </span>
            </div>
          );
        })}
      </section>
    </main>
  );
}
