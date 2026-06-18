import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Article } from "../components/article";

export const Route = createFileRoute("/projects/$id")({
  head: ({ params }) => {
    const p = projects[params.id];
    const title = p ? `${p.name} — Project Record` : "Project Record";
    return {
      meta: [
        { title },
        { name: "description", content: p?.overview ?? "Project record." },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.overview ?? "Project record." },
      ],
    };
  },
  loader: ({ params }): { project: Project } => {
    const project = projects[params.id];
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl">Project not found</h1>
      <p className="mt-3"><Link to="/projects" className="underline">Return to the archive</Link></p>
    </div>
  ),
});

interface Project {
  name: string;
  domain: string;
  status: string;
  since: string;
  overview: string;
  architecture: string[];
  technologies: string[];
  timeline: { date: string; entry: string }[];
  lessons: string[];
}

const projects: Record<string, Project> = {
  sentinel: {
    name: "SENTINEL",
    domain: "Cybersecurity",
    status: "Active",
    since: "2024",
    overview:
      "A 46-crate Rust cybersecurity platform with a Tauri desktop frontend, eBPF-based detection via the aya stack, Isolation Forest anomaly detection, and a pipeline orchestrator.",
    architecture: [
      "A streaming ingestion layer normalising telemetry from heterogeneous sources.",
      "A reasoning pipeline that produces detections together with the evidence supporting them.",
      "eBPF programs via the aya stack for kernel-level detection.",
      "Isolation Forest PRNG-based anomaly detection.",
      "A Tauri desktop frontend for local operation.",
      "A response surface that exposes containment actions as inspectable, revocable operations.",
      "An evaluation harness that replays historical incidents against current detection logic.",
      "Twelve architectural layers from ingestion to response.",
    ],
    technologies: ["Rust", "aya (eBPF)", "Tauri", "TypeScript", "Apache Kafka", "ClickHouse", "OpenTelemetry"],
    timeline: [
      { date: "2024 · Q3", entry: "Initial specification of the detection pipeline drafted." },
      { date: "2025 · Q1", entry: "First end-to-end prototype of ingestion and reasoning." },
      { date: "2025 · Q4", entry: "Full 46-crate Rust implementation completed." },
      { date: "2026 · Q2", entry: "Public revision of the detection-pipeline specification." },
    ],
    lessons: [
      "Detections without explanations decay; explanations sustain trust longer than precision metrics.",
      "Response actions designed around reversibility are easier to operate at institutional scale.",
    ],
  },
  helix: {
    name: "HELIX",
    domain: "Compiler Engineering",
    status: "Active",
    since: "2024",
    overview:
      "A GPT-2 inference engine and compiler intermediate representation written in Rust. The inference engine component is the more concrete deliverable.",
    architecture: [
      "A layered IR separating control, data, and effect concerns, implemented in Rust.",
      "An optimisation framework expressed as small, composable rewrites.",
      "A verification harness that checks invariants across rewrite sequences.",
      "GPT-2 inference engine as the reference implementation.",
    ],
    technologies: ["Rust", "LLVM", "MLIR-style dialect tooling"],
    timeline: [
      { date: "2024 · Q4", entry: "Initial IR sketch and goals document drafted." },
      { date: "2025 · Q3", entry: "First rewrite framework implemented." },
      { date: "2026 · Q1", entry: "Initial design notes for the IR released." },
    ],
    lessons: [
      "An IR is a long-lived contract; the cost of an early structural mistake compounds for years.",
      "Composable rewrites are far easier to reason about than monolithic passes.",
    ],
  },
  erebus: {
    name: "EREBUS",
    domain: "Operating Systems",
    status: "In development",
    since: "2025",
    overview:
      "EREBUS-KRONOS is a custom 32-bit OS with kernel, bootloader, filesystem, desktop environment, and networking stack — paired with a custom compiler and programming language written in Rust. Successfully booted in VirtualBox.",
    architecture: [
      "A small, well-specified core treating capabilities as first-class objects.",
      "Scheduling and memory subsystems designed around predictability.",
      "Custom bootloader and filesystem implementation.",
      "Desktop environment and networking stack.",
      "Custom compiler and programming language toolchain.",
    ],
    technologies: ["Rust", "x86 assembly", "QEMU", "VirtualBox", "custom toolchain"],
    timeline: [
      { date: "2025 · Q2", entry: "Architectural notes drafted." },
      { date: "2025 · Q4", entry: "Kernel boot confirmed in VirtualBox." },
    ],
    lessons: [
      "Verification pressure surfaces design weaknesses earlier than testing alone.",
      "Smallness is not a goal in itself; it is the cost of being able to reason about anything else.",
    ],
  },
  kronos: {
    name: "KRONOS",
    domain: "Distributed Systems",
    status: "In development",
    since: "2025",
    overview:
      "A coordination substrate for distributed services, treating consensus as a deliberate cost rather than a default.",
    architecture: [
      "A core consensus primitive used sparingly and explicitly.",
      "A messaging layer with first-class failure-domain awareness.",
      "Operational tools designed for diagnosis at scale.",
    ],
    technologies: ["Go", "Rust", "Raft", "OpenTelemetry"],
    timeline: [
      { date: "2025 · Q3", entry: "Initial architecture document drafted." },
      { date: "2026 · Q2", entry: "Prototype of the messaging layer in early testing." },
    ],
    lessons: [
      "Most distributed systems do not need the consistency they pay for.",
      "Operability is a property of the system as built, not the system as designed.",
    ],
  },
  truvornex: {
    name: "Truvornex",
    domain: "Applications",
    status: "Active",
    since: "2025",
    overview:
      "A hyperlocal neighborhood super-app being developed for initial launch in Pakistan and Finland, with a production stack.",
    architecture: [
      "Railway hosting for deployment infrastructure.",
      "Supabase/PostgreSQL backend with RLS policies.",
      "Node.js API layer.",
      "Capacitor mobile frontend.",
      "Realtime hooks for live updates.",
    ],
    technologies: ["Node.js", "Supabase", "PostgreSQL", "Capacitor", "Railway", "TypeScript"],
    timeline: [
      { date: "2025 · Q3", entry: "Initial concept." },
      { date: "2025 · Q4", entry: "Renamed from ServiceFlow to Truvornex, platform vision sharpened." },
      { date: "2026 · Q1", entry: "Migrated to Supabase, full schema and RLS generated." },
      { date: "2026 · Q2", entry: "Mobile build active." },
    ],
    lessons: [
      "The half-life of a model is short; the half-life of the surrounding system should be long.",
    ],
  },
  nucleize: {
    name: "Nucleize",
    domain: "Infrastructure",
    status: "In development",
    since: "2026",
    overview:
      "A formation engine — a platform for crystallizing committed teams around ideas. Next.js + TypeScript + Tailwind + Zustand, 47-section frontend-first build plan underway.",
    architecture: [
      "Frontend-first architecture using Next.js.",
      "State management via Zustand.",
      "47-section build plan for systematic implementation.",
      "Team formation and commitment tracking.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    timeline: [
      { date: "2026 · Q1", entry: "Concept defined." },
      { date: "2026 · Q2", entry: "47-section build plan drafted, frontend implementation active." },
    ],
    lessons: [
      "Most platforms grow by accretion; the discipline of subtraction is rarer and more valuable.",
    ],
  },
};

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  return (
    <Article
      eyebrow={`Volume IV · ${project.domain}`}
      title={project.name}
      lede={project.overview}
      meta={[
        { label: "Domain", value: project.domain },
        { label: "Status", value: project.status },
        { label: "Since", value: project.since },
      ]}
      toc={[
        { id: "overview", label: "Overview" },
        { id: "architecture", label: "Technical architecture" },
        { id: "technologies", label: "Technologies" },
        { id: "timeline", label: "Development timeline" },
        { id: "lessons", label: "Lessons" },
      ]}
    >
      <h2 id="overview">Overview</h2>
      <p>{project.overview}</p>

      <h2 id="architecture">Technical architecture</h2>
      <ul>
        {project.architecture.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <h2 id="technologies">Technologies</h2>
      <p className="font-mono text-sm">
        {project.technologies.join(" · ")}
      </p>

      <h2 id="timeline">Development timeline</h2>
      <ul>
        {project.timeline.map((t) => (
          <li key={t.date}>
            <span className="label-mono mr-2">{t.date}</span> {t.entry}
          </li>
        ))}
      </ul>

      <h2 id="lessons">Lessons learned</h2>
      <ul>
        {project.lessons.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </Article>
  );
}