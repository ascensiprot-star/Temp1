import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Public Research Archive — Xylvanthrex Labs" },
      {
        name: "description",
        content:
          "Independent systems work in operating systems, compilers, cybersecurity, and distributed systems.",
      },
      { property: "og:title", content: "Public Research Archive — Xylvanthrex Labs" },
      {
        property: "og:description",
        content:
          "An archive documenting independent research and the formation of Xylvanthrex Labs.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  { id: "sentinel", name: "SENTINEL", domain: "Cybersecurity", status: "Active" },
  { id: "helix", name: "HELIX", domain: "Compilers", status: "Active" },
  { id: "erebus", name: "EREBUS", domain: "Operating Systems", status: "In development" },
  { id: "kronos", name: "KRONOS", domain: "Distributed Systems", status: "In development" },
  { id: "truvornex", name: "Truvornex", domain: "Applications", status: "Active" },
  { id: "nucleize", name: "Nucleize", domain: "Infrastructure", status: "In development" },
];

const recent = [
  { date: "2025 · Q4", entry: "SENTINEL 46-crate Rust implementation completed." },
  { date: "2025 · Q4", entry: "EREBUS-KRONOS booted in VirtualBox." },
  { date: "2026 · Q1", entry: "Truvornex migrated to Supabase with full PostgreSQL schema." },
  { date: "2026 · Q2", entry: "Nucleize frontend build started." },
];

function Index() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="label-mono mb-6">Volume I · Entry 001</div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            Huzaifa Ahmad.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground">
            I design and build operating systems, compilers, cybersecurity platforms, and distributed systems — independently, from first principles, under the institutional name Xylvanthrex Labs.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 label-mono">
            <Link to="/projects" className="border border-foreground bg-foreground px-3 py-2 text-background no-underline hover:opacity-90">
              Projects Archive
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="label-mono mb-2">Institutional Mission</div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Built by one person. Designed to last.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Huzaifa Ahmad is an independent systems builder based in Hyderabad, Pakistan. The archive documents a body of work spanning kernel engineering, compiler design, cybersecurity infrastructure, and applied software — built outside any institution, on long horizons.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            <Stat label="Projects shipped" value="VI" caption="From OS kernels to production applications" />
            <Stat label="Domains" value="IV" caption="Systems, compilers, security, distributed" />
            <Stat label="Stack" value="Rust-first" caption="With Go, TypeScript, and Python where appropriate" />
            <Stat label="Base" value="Hyderabad" caption="Sindh, Pakistan" />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <SectionHeader
            label="Projects Archive"
            title="A registry of ongoing technological systems"
            link={{ to: "/projects", label: "Full archive" }}
          />
          <div className="mt-6 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3 border border-rule">
            {projects.map((p) => (
              <Link
                key={p.id}
                to="/projects/$id"
                params={{ id: p.id }}
                className="block bg-background p-5 no-underline hover:bg-accent transition-colors"
              >
                <div className="label-mono">{p.domain}</div>
                <div className="font-serif text-2xl font-semibold tracking-tight mt-1">
                  {p.name}
                </div>
                <div className="label-mono mt-3 text-muted-foreground">
                  Status · {p.status}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              label="Recent Entries"
              title="Latest revisions to the archive"
            />
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {recent.map((r) => (
                <li key={r.date} className="grid gap-1 py-4 md:grid-cols-[140px_1fr] md:items-baseline">
                  <span className="label-mono">{r.date}</span>
                  <span>{r.entry}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader label="Reference" title="Foundational sections" />
            <ul className="mt-6 space-y-3">
              {[
                { to: "/about", title: "About the researcher", desc: "Background, systems thinking, long-term interests." },
              ].map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="group block border border-border p-4 no-underline hover:bg-accent">
                    <div className="font-serif text-lg font-semibold tracking-tight group-hover:underline">
                      {r.title}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{r.desc}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, caption }: { label: string; value: string; caption: string }) {
  return (
    <div className="border border-border p-5">
      <div className="label-mono">{label}</div>
      <div className="font-serif text-4xl font-semibold tracking-tight mt-1">{value}</div>
      <div className="text-sm text-muted-foreground mt-2">{caption}</div>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  link,
}: {
  label: string;
  title: string;
  link?: { to: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-rule pb-3">
      <div>
        <div className="label-mono">{label}</div>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mt-1">
          {title}
        </h2>
      </div>
      {link && (
        <Link to={link.to as never} className="label-mono whitespace-nowrap hover:underline">
          {link.label} →
        </Link>
      )}
    </div>
  );
}
