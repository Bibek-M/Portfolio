import type { IconType } from "../data/portfolioData";

type IconBadgeProps = {
  icon: IconType;
  label: string;
  color: string;
};

export default function IconBadge({
  icon: Icon,
  label,
  color,
}: IconBadgeProps) {
  return (
    <span
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-light-border bg-light-card text-xl shadow-sm dark:border-white/10 dark:bg-dark-bg"
    >
      <Icon style={{ color }} aria-label={label} />
    </span>
  );
}
