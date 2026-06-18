import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="label-mono mb-2">Archive</div>
            <p className="text-sm text-muted-foreground">
              A continuing record of independent systems work and the
              formation of Xylvanthrex Labs.
            </p>
          </div>
          <div>
            <div className="label-mono mb-2">Sections</div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            </ul>
          </div>
          <div>
            <div className="label-mono mb-2">Information</div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="label-mono mb-2">Reference</div>
            <p className="text-sm text-muted-foreground">
              The contents of this archive are written and maintained as part of
              independent systems work. Entries are revised as the work develops.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-4 label-mono">
          <span>© {year} Xylvanthrex Labs</span>
          <span>Last revision · ongoing</span>
        </div>
      </div>
    </footer>
  );
}