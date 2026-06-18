import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/laboratory", changefreq: "monthly", priority: "0.9" },
          { path: "/research", changefreq: "monthly", priority: "0.9" },
          { path: "/research/operating-systems", changefreq: "monthly", priority: "0.7" },
          { path: "/research/compilers", changefreq: "monthly", priority: "0.7" },
          { path: "/research/cybersecurity", changefreq: "monthly", priority: "0.7" },
          { path: "/research/artificial-intelligence", changefreq: "monthly", priority: "0.7" },
          { path: "/research/distributed-systems", changefreq: "monthly", priority: "0.7" },
          { path: "/projects", changefreq: "monthly", priority: "0.9" },
          { path: "/projects/sentinel", changefreq: "monthly", priority: "0.7" },
          { path: "/projects/helix", changefreq: "monthly", priority: "0.7" },
          { path: "/projects/erebus", changefreq: "monthly", priority: "0.7" },
          { path: "/projects/kronos", changefreq: "monthly", priority: "0.7" },
          { path: "/projects/truvornex", changefreq: "monthly", priority: "0.7" },
          { path: "/projects/nucleize", changefreq: "monthly", priority: "0.7" },
          { path: "/timeline", changefreq: "weekly", priority: "0.8" },
          { path: "/knowledge", changefreq: "weekly", priority: "0.8" },
          { path: "/philosophy", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.5" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});