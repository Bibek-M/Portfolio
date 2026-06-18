import PageHeader from "../components/PageHeader";
import SkillCard from "../components/SkillCard";
import { usePortfolio } from "../context/PortfolioContext";

export default function Skills() {
  const { skills } = usePortfolio();

  return (
    <main className="page-shell">
      <PageHeader
        title="My Skills"
        eyebrow="Technologies and tools I use to bring ideas to life."
      />
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </section>
    </main>
  );
}
