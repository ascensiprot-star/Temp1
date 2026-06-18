import { createFileRoute } from "@tanstack/react-router";
import { Article } from "../components/article";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Public Research Archive" },
      { name: "description", content: "Channels of correspondence for research collaboration and long-term technological initiatives." },
      { property: "og:title", content: "Contact — Public Research Archive" },
      { property: "og:description", content: "Open to serious research collaborations, engineering partnerships, and long-term initiatives." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Article
      eyebrow="Volume VIII · Correspondence"
      title="Contact"
      lede="Open to serious research collaborations, engineering partnerships, and long-term technological initiatives."
    >
      <p>
        Correspondence is welcome from researchers, engineers, and institutions
        whose work intersects the laboratory&#39;s domains. Brief, specific
        messages are preferred.
      </p>
      <dl className="not-prose mt-6 divide-y divide-rule border-y border-rule">
        <div className="grid gap-2 py-4 md:grid-cols-[160px_1fr]">
          <dt className="label-mono">Email</dt>
          <dd>
            <a href="mailto:huxaifa0fficial@gmail.com" className="underline">
              huxaifa0fficial@gmail.com
            </a>
          </dd>
        </div>
        <div className="grid gap-2 py-4 md:grid-cols-[160px_1fr]">
          <dt className="label-mono">GitHub</dt>
          <dd>
            <a href="https://github.com/Jelvantrix" className="underline" rel="noreferrer">
              github.com/Jelvantrix
            </a>
          </dd>
        </div>
        <div className="grid gap-2 py-4 md:grid-cols-[160px_1fr]">
          <dt className="label-mono">LinkedIn</dt>
          <dd>
            <a href="https://www.linkedin.com/in/huzaifa-ahmad-0fficial/" className="underline" rel="noreferrer">
              linkedin.com/in/huzaifa-ahmad-0fficial/
            </a>
          </dd>
        </div>

      </dl>
    </Article>
  );
}