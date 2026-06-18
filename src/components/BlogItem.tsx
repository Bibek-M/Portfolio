import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import type { BlogPost } from "../data/portfolioData";

export default function BlogItem({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.href}
      className="group grid gap-5 border-b border-light-border py-5 last:border-b-0 sm:grid-cols-[150px_1fr_auto] dark:border-white/10"
    >
      <img
        src={post.image}
        alt=""
        className="h-28 w-full rounded-xl object-cover sm:h-24"
      />
      <div>
        <h2 className="text-base font-bold text-light-text group-hover:text-light-primary dark:text-dark-text dark:group-hover:text-dark-primary">
          {post.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-light-muted dark:text-dark-muted">
          {post.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-light-muted dark:text-dark-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={14} />
            {post.readTime}
          </span>
        </div>
      </div>
      <div className="hidden items-center text-light-primary sm:flex dark:text-dark-primary">
        <ArrowRight size={18} />
      </div>
    </a>
  );
}
