import { createFileRoute } from "@tanstack/react-router";
import { Article } from "../components/article";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Public Research Archive" },
      { name: "description", content: "Background, systems thinking philosophy, and long-term research direction of the founder of Xylvanthrex Labs." },
      { property: "og:title", content: "About — Public Research Archive" },
      { property: "og:description", content: "A first-person account of the researcher behind Xylvanthrex Labs." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Article
      eyebrow="Volume I · Biographical Entry"
      title="Huzaifa Ahmad"
      lede="A first-person account of the work, the methods, and the long-term direction that gave rise to Xylvanthrex Labs."
      meta={[
        { label: "Type", value: "Biographical" },
        { label: "Status", value: "Living document" },
        { label: "Revised", value: "Continuously" },
      ]}
      toc={[
        { id: "background", label: "Background" },
        { id: "philosophy", label: "Systems thinking" },
        { id: "approach", label: "Approach to research" },
        { id: "interests", label: "Long-term interests" },
        { id: "why-systems", label: "Why systems matter" },
        { id: "why-engineering", label: "Why deep engineering matters" },
        { id: "vision", label: "Vision" },
      ]}
    >
      <h2 id="background">Background</h2>
      <p>
        My independent systems work began in earnest in 2023–2024, building
        full-stack systems from first principles — operating system kernels,
        compilers, cybersecurity platforms, and the infrastructure that
        supports them. I am based in Hyderabad, Pakistan, and operate outside institutional structures by choice,
        working as an independent builder rather than within traditional
        academic or corporate frameworks.
      </p>
      <p>
        The work is driven by a conviction that the most consequential
        technologies are not products, but the foundations on which other
        products are built. Operating systems, compilers, security
        infrastructure, and distributed computation architectures define the
        boundary of what the rest of software is even able to attempt.
      </p>

      <h2 id="philosophy">Systems thinking philosophy</h2>
      <p>
        I treat a system not as a collection of features but as a continuous
        surface of trade-offs. The interesting questions are rarely about which
        component is fastest in isolation. They concern interfaces, invariants,
        and the long-range consequences of early structural choices. A
        well-designed system tolerates revision; a poorly designed one
        ossifies.
      </p>

      <h2 id="approach">Approach to research</h2>
      <p>
        I work specification-first, then move to rapid implementation using a
        combination of direct Rust and systems code, tooling pipelines, and
        architectural direction. Each project begins as a written specification
        before any code is written — this bias toward making ideas legible before
        they are executable is the central discipline of the work.
      </p>
      <ul>
        <li>Specifications before implementations.</li>
        <li>Written reasoning over verbal consensus.</li>
        <li>Rapid implementation through tooling assistance.</li>
        <li>Few projects, carried out with conviction.</li>
      </ul>

      <h2 id="interests">Long-term technological interests</h2>
      <p>
        Across domains, the questions that hold my attention concern
        durability and auditability. How does a detection system remain
        auditable across years of evolving threat models? How is a compiler
        intermediate representation designed so its structural decisions do not
        become liabilities? How can an operating system kernel balance
        verification with engineering practicality?
      </p>

      <h2 id="why-systems">Why systems matter</h2>
      <p>
        Systems determine the practical limits of computation. A change at the
        application layer is local; a change at the systems layer reshapes the
        space of what applications can be. Investing in foundations is the
        slowest and most leveraged form of technological work.
      </p>

      <h2 id="why-engineering">Why deep engineering matters</h2>
      <p>
        Deep engineering is the discipline of caring about the parts of a
        system that no one will ever see. It is the willingness to revise a
        memory allocator three times so that the system above it can be simple.
        Most institutions cannot sustain this kind of work. An independent
        laboratory exists precisely to do so.
      </p>

      <h2 id="vision">Vision for an enduring institution</h2>
      <p>
        The long-term goal is building an independent research institution
        capable of contributing to foundational computing at a serious level.
        The current body of work — the kernels, compilers, detection systems,
        and platforms documented here — is the opening chapter of that effort.
      </p>
    </Article>
  );
}