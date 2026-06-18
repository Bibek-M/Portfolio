import { ExternalLink } from "lucide-react";
import type { Project } from "../data/portfolioData";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface rounded-2xl p-4 transition hover:-translate-y-1">
      <div className="relative `aspect-16/10` overflow-hidden rounded-xl bg-light-bg dark:bg-dark-bg">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
        />
        <a
          href={project.href}
          aria-label={`Open ${project.title}`}
          title="Open project"
          className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-light-card text-light-text shadow-soft transition hover:text-light-primary dark:bg-dark-card dark:text-dark-text dark:hover:text-dark-primary"
        >
          <ExternalLink size={16} />
        </a>
      </div>
      <h2 className="mt-5 text-lg font-bold text-light-text dark:text-dark-text">
        {project.title}
      </h2>
      <p className="mt-2 min-h-14 text-sm leading-6 text-light-muted dark:text-dark-muted">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-light-border px-3 py-1.5 text-xs font-medium text-light-muted dark:border-white/10 dark:text-dark-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
