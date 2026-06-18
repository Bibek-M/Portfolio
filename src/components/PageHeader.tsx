import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
};

export default function PageHeader({
  title,
  eyebrow,
  action,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-normal text-light-text sm:text-4xl dark:text-dark-text">
          {title}
        </h1>
        {eyebrow && (
          <p className="mt-3 max-w-md text-base leading-7 text-light-muted dark:text-dark-muted">
            {eyebrow}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
