import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { Article, IndexList } from "../components/article";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects Archive — Public Research Archive" },
      { name: "description", content: "A chronological registry of systems under development at Xylvanthrex Labs." },
      { property: "og:title", content: "Projects Archive — Public Research Archive" },
      { property: "og:description", content: "Project records for SENTINEL, HELIX, EREBUS, KRONOS, Truvornex, and Nucleize." },
    ],
  }),
  component: ProjectsLayout,
});

const projects = [
  { id: "sentinel", title: "SENTINEL", description: "A detection and response platform for adversarial environments.", meta: "Cybersecurity · Active" },
  { id: "helix", title: "HELIX", description: "A compiler intermediate representation and optimisation pipeline.", meta: "Compilers · Active" },
  { id: "erebus", title: "EREBUS", description: "An exploratory kernel for verifiable systems.", meta: "Operating Systems · In development" },
  { id: "kronos", title: "KRONOS", description: "A coordination substrate for distributed services.", meta: "Distributed Systems · In development" },
  { id: "truvornex", title: "Truvornex", description: "An inference and orchestration platform for model systems.", meta: "AI · Research" },
  { id: "nucleize", title: "Nucleize", description: "A platform-infrastructure research project.", meta: "Infrastructure · Research" },
];

function ProjectsLayout() {
  const matches = useMatches();
  const hasChild = matches.some((m) => m.routeId.startsWith("/projects/"));
  if (hasChild) return <Outlet />;

  return (
    <Article
      eyebrow="Volume IV · Projects Archive"
      title="Registry of projects"
      lede="Each entry below is treated as a historical record, revised as the underlying work develops."
    >
      <IndexList
        items={projects.map((p) => ({
          to: "/projects/$id",
          params: { id: p.id },
          eyebrow: p.meta,
          title: p.title,
          description: p.description,
        }))}
      />
    </Article>
  );
}