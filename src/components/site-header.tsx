import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex flex-col leading-tight no-underline">
            <span className="label-mono">Public Research Archive</span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              Jelvantrix
            </span>
          </Link>
          <ThemeToggle />
        </div>
        <nav
          aria-label="Primary"
          className="flex flex-wrap gap-x-5 gap-y-2 border-t border-rule py-2.5 label-mono"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground underline" }}
              inactiveProps={{ className: "hover:text-foreground" }}
              className="no-underline transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}