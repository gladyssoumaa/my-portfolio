import { ArrowRight, BrainCircuit, Code2, Database } from "lucide-react";
import ProjectCard, { type Project } from "./project-card";
import SectionHeading from "./section-heading";

const projects: Project[] = [
  {
    number: "01",
    title: "RAG Video Game Review Assistant",
    category: "AI / RETRIEVAL",
    description:
      "An intelligent search experience for Amazon video game reviews that retrieves relevant review content to ground responses in source material.",
    impact:
      "Focus: relevant retrieval, traceable answers, and a more useful way to explore customer feedback.",
    technologies: ["Python", "RAG", "Embeddings", "Vector Search", "Data Crawling"],
    icon: BrainCircuit,
    visual: "rag",
  },
  {
    number: "02",
    title: "Tahadhari",
    category: "WILDLIFE CONSERVATION / GEOSPATIAL",
    description:
      "A conservation intelligence concept combining wildlife-risk prediction, patrol prioritization, and mobile access to fragmented field information.",
    impact:
      "Focus: turning risk signals into actionable patrol priorities, including offline field workflows.",
    technologies: ["Python", "Machine Learning", "Flutter", "Geospatial", "FASTAPI", "PostgreSQL"],
    icon: Database,
    visual: "wildlife",
  },
  {
    number: "03",
    title: "Code Rectifier",
    category: "AI / DEVELOPER TOOLS",
    description:
      "An AI-assisted software repair workflow designed to inspect project errors, investigate relevant documentation, and attempt targeted fixes.",
    impact:
      "Focus: structured debugging, bounded repair iterations, and validating changes.",
    technologies: ["Python", "LLMs", "Automation", "APIs"],
    icon: Code2,
    visual: "code",
  },
  {
    number: "04",
    title: "AI API Assistant",
    category: "BACKEND / AI",
    description:
      "A backend and web application concept that translates natural-language requests into API development tasks and supporting documentation.",
    impact:
      "Focus: making API workflows more approachable through natural-language interaction.",
    technologies: ["Python", "FastAPI", "React", "REST APIs"],
    icon: Database,
    visual: "api",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space container-wide ">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas, engineered into reality."
          description="A selection of projects exploring intelligent systems, backend engineering, and technology for practical problems."
        />

        <span className="mb-10 hidden text-sm text-red sm:block">
          04 FEATURED PROJECTS
        </span>
      </div>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2 min-h-[70vh]">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-forest transition hover:text-copper"
      >
        Interested in working together? <ArrowRight size={16} />
      </a>
    </section>
  );
}
