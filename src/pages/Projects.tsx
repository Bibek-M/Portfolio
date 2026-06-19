import { ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { usePortfolio } from '../context/PortfolioContext';

export default function Projects() {
  const { projects } = usePortfolio();

  return (
    <main className="page-shell">
      <PageHeader
        title="My Projects"
        eyebrow="A selection of my recent work."
        action={
          <a href="https://github.com/" className="ghost-button">
            View All Projects <ArrowUpRight size={17} />
          </a>
        }
      />
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </main>
  );
}
