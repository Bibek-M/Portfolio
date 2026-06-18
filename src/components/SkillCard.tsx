import type { SkillGroup } from "../data/portfolioData";
import IconBadge from "./IconBadge";

export default function SkillCard({ skill }: { skill: SkillGroup }) {
  return (
    <article className="surface rounded-2xl p-6 transition hover:-translate-y-1">
      <h2 className="text-base font-bold text-light-text dark:text-dark-text">
        {skill.title}
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {skill.icons.map((item) => (
          <IconBadge key={item.label} {...item} />
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-light-muted dark:text-dark-muted">
        {skill.description}
      </p>
    </article>
  );
}
