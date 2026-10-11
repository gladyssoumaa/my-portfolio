import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  icon: LucideIcon;
  visual: "rag" | "wildlife" | "code" | "api";
  github?: string;
  demo?: string;
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className="project-visual relative flex h-64 w-full items-center justify-center bg-sage border-b border-[#dddccc]/60 overflow-hidden"
      aria-label={`${project.title} illustration`}
    >
      <div className="absolute inset-5 rounded-xl border border-[#dddccc]/40 bg-sage/20" />

      {project.visual === "rag" && (
        <div className="relative z-10 w-[80%] max-w-[330px] rounded-xl border border-[#dddccc] bg-[#fdfbf7]/40 p-4 shadow-xl">
          <div className="flex items-center gap-2 border-b border-[#dddccc]/60 pb-3">
            <div className="h-2 w-2 rounded-full bg-red" />
            <div className="h-2 w-2 rounded-full bg-forest" />
            <span className="ml-2 text-[15px] font-bold tracking-wide text-forest/80">
              REVIEW INTELLIGENCE
            </span>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-[#dddccc] bg-[#f6f3e8]/40 p-3">
            <Icon size={30} className="text- forest" />
            <span className="text-[15px] text-forest">
              Search relevant reviews...
            </span>
          </div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="mt-3 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-forest" />
              <div
                className="h-1.5 rounded-full bg-[#dddccc]"
                style={{ width: `${70 - item * 10}%` }}
              />
            </div>
          ))}
        </div>
      )}

      {project.visual === "wildlife" && (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full border border-forest/90" />
          <div className="absolute h-28 w-28 rounded-full border border-cream/40" />
          <div className="absolute h-16 w-16 rounded-full bg-forest/10 blur-xl" />
          <svg
            viewBox="0 0 300 180"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M-10 120 Q50 50 110 100 T210 70 T320 30"
              fill="none"
              stroke="#32bdb4"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
            <path
              d="M70 -10 Q90 45 150 90 T220 190"
              fill="none"
              stroke="#12db3b"
              strokeWidth="1.5"
            />
            <circle cx="150" cy="90" r="8" fill="#bd5b32" />
            <circle cx="150" cy="90" r="18" fill="none" stroke="#bd5b32" />
          </svg>
          <div className="absolute bottom-4 left-4 rounded-lg border border-[#dddccc] bg-[#fdfbf7]/40 px-3 py-2 text-[12px] font-bold text-forest shadow-sm">
            RISK ZONE · PATROL PRIORITY
          </div>
        </div>
      )}

      {project.visual === "code" && (
        <div className="relative z-10 grid w-[85%] grid-cols-[1.2fr_0.8fr] overflow-hidden rounded-xl border border-[#dddccc] bg-[#fdfbf7]/30 shadow-xl">
          <div className="space-y-3 p-4">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red" />
              <span className="h-2 w-2 rounded-full bg-forest" />
            </div>
            {[
              "def repair_code():",
              "  analyze_error()",
              "  find_solution()",
              "  apply_patch()",
            ].map((line, index) => (
              <p
                key={line}
                className={`font-mono text-[12px] ${
                  index === 0 ? "text-forest font-bold" : "text-forest/70"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center border-l border-[#dddccc] bg-[#fdfbf7]/40 p-3">
            <Icon className="text-forest" size={30} />
            <span className="mt-3 text-center text-[12px] font-bold text-forest">
              Repair workflow
            </span>
            <span className="mt-1 text-center text-[12px] font-medium text-red">
              Analyze · Fix · Verify
            </span>
          </div>
        </div>
      )}

      {project.visual === "api" && (
        <div className="relative z-10 w-[80%] rounded-xl border border-[#c3a1d2]/40 bg-[#fdfbf7]/40 p-5 shadow-xl">
          <div className="flex items-center gap-2">
            <Icon className="text-forest" size={30} />
            <span className="text-lg font-bold text-forest">
              API WORKFLOW
            </span>
          </div>
          <div className="mt-5 space-y-2 font-mono text-[14px]">
            <p className="text-forest font-bold">POST /api/generate</p>
            <p className="text-forest/70">{"{ prompt: userRequest }"}</p>
            <div className="h-px bg-[#dddccc]/60" />
            <p className="text-red font-semibold">200 OK · response ready</p>
          </div>
        </div>
      )}
    </div>
  );
}


export default function ProjectCard({ project }: { project: Project }) {
  const { number, title, category, description, impact, technologies } =
    project;

  return (
    <article className="project-card overflow-hidden rounded-2xl border border-[#e1dece] bg-sage/15">
      <ProjectVisual project={project} />

      <div className="p-5 sm:p-6">
        <p className="text-[15px] font-bold uppercase tracking-[0.15em] text-copper">
          {number} / {category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-forest">
          {title}
        </h3>

        <p className="mt-3 text-xl leading-6 text-forest/80">{description}</p>

        <div className="mt-3 border-l-2 border-sage-dark pl-3">
          <p className="text-sm leading-5 text-forest">{impact}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-copper/10 px-3 py-1.5 text-[12px] font-semibold text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-5 flex flex-wrap gap-4 border-t border-[#e1dece] pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-copper"
              >
                Source code <ArrowUpRight size={14} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-copper"
              >
                Live demo <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
