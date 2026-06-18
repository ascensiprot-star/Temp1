import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface ArticleProps {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  toc?: { id: string; label: string }[];
  children: ReactNode;
  meta?: { label: string; value: ReactNode }[];
}

export function Article({ eyebrow, title, lede, toc, children, meta }: ArticleProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <article>
        <header className="border-b border-rule pb-6 mb-8">
          {eyebrow && <div className="label-mono mb-2">{eyebrow}</div>}
          <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          {lede && (
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              {lede}
            </p>
          )}
        </header>
        <div className="grid gap-10 md:grid-cols-[1fr_220px]">
          <div className="prose-archive max-w-3xl">{children}</div>
          <aside className="hidden md:block">
            <div className="sticky top-6 space-y-6">
              {meta && meta.length > 0 && (
                <div className="border border-border p-4">
                  <div className="label-mono mb-3">Record</div>
                  <dl className="space-y-2 text-sm">
                    {meta.map((m) => (
                      <div key={m.label} className="grid grid-cols-[80px_1fr] gap-2">
                        <dt className="text-muted-foreground">{m.label}</dt>
                        <dd>{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              {toc && toc.length > 0 && (
                <nav aria-label="Contents" className="border border-border p-4">
                  <div className="label-mono mb-3">Contents</div>
                  <ol className="space-y-1.5 text-sm list-decimal list-inside marker:text-muted-foreground">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}

export function IndexList({
  items,
}: {
  items: { to: string; params?: Record<string, string>; eyebrow?: string; title: string; description: string; meta?: string }[];
}) {
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <li key={item.to + (item.params ? JSON.stringify(item.params) : "")} className="py-5">
          <Link
            to={item.to as never}
            params={item.params as never}
            className="group grid gap-2 md:grid-cols-[180px_1fr_120px] md:items-baseline no-underline"
          >
            <span className="label-mono">{item.eyebrow ?? ""}</span>
            <span className="block">
              <span className="font-serif text-xl font-semibold tracking-tight group-hover:underline">
                {item.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {item.description}
              </span>
            </span>
            <span className="label-mono md:text-right">{item.meta ?? ""}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}