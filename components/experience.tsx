import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./section-heading";

const experiences = [
  {
    type: "PROJECT EXPERIENCE",
    title: "AI & Backend Engineering",
    organization: "Selected engineering projects",
    period: "Project-based",
    description:
      "Designed and developed API-driven applications, AI-assisted workflows, and retrieval-based systems, with attention to testing, maintainability, and practical usability.",
    skills: ["Python", "FastAPI", "LLMs", "RAG", "NLP", "Computer Vision", "PostgreSQL", "Docker & Containerization", "ML", "Embeddings", "CNNs"],
  },
  {
    type: "PROJECT EXPERIENCE",
    title: "Mobile & Geospatial Development",
    organization: "Tahadhari",
    period: "Project-based",
    description:
      "Worked on a conservation-focused solution connecting risk prediction, patrol prioritization, mobile workflows, and geospatial information.",
    skills: ["Flutter", "Dart", "TypeScript", "JavaScript", "Tailwind CSS", "GIS", "Geospatial Analysis", "Data Processing", "Responsive Design"],
  },
  {
    type: "LEADERSHIP & COLLABORATION",
    title: "Peer Counseling",
    organization: "School experience",
    period: "Update with dates",
    description:
      "Developed communication, empathy, and interpersonal problem-solving skills through a peer-support role.",
    skills: ["Communication", "Listening", "Collaboration"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-space  text-forest">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Experience & growth"
          title="Learning, building, and contributing."
          description="My experience reflects a combination of hands-on engineering, practical projects, and collaborative work."
        />

        <div className="relative ml-2 border-l border-forest/25 pl-7 sm:ml-5 sm:pl-10">
          {experiences.map((item, index) => (
            <article
              key={item.title}
              className="relative pb-10 last:pb-0 sm:pb-12"
            >
              <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-forest bg-forest sm:-left-[47px]" />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[18px] font-bold uppercase tracking-[0.16em] text-red">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xl text-forest/70">{item.organization}</p>
                </div>

                <span className="w-fit rounded-full border border-black/75 px-3 py-1.5 text-[15px] text-forest/75">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-lg leading-7 text-forest/75">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-[15px] text-forest-light/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {index !== experiences.length - 1 && (
                <div className="mt-10 h-px max-w-3xl bg-white/10" />
              )}
            </article>
          ))}
        </div>

        <a
          href="/CV-Gladys.pdf"
          download
          className="mt-10 inline-flex items-center gap-2 text-lg font-semibold text-forest transition hover:text-white"
        >
          View my resume <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
