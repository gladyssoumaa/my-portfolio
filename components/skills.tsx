import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  MapPinned,
  Palette,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import SectionHeading from "./section-heading";

const groups = [
  {
    icon: Database,
    title: "Backend Engineering",
    description: "APIs, services, and data",
    skills: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Docker & Conteinerization"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Intelligent applications",
    skills: ["RAG", "LLMs", "Embeddings", "CNNs", "ML", "Computer Vision", "NLP"],
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern web experiences",
    skills: ["TypeScript", "React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Mobile experiences",
    skills: ["Flutter", "Dart", "Offline-first apps"],
  },
  {
    icon: GitBranch,
    title: "Engineering & QA",
    description: "Quality and delivery",
    skills: ["Git", "CI/CD", "Playwright", "Cypress", "Postman"],
  },
  {
    icon: MapPinned,
    title: "Data & Geospatial",
    description: "Spatial and predictive systems",
    skills: ["GIS", "Geospatial Analysis", "Data Processing"],
  },
  {
    icon: Palette,
    title: "Product & UX",
    description: "Human-centered product design",
    skills: ["Product Thinking", "UX Research", "UI Design"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Security and connected systems",
    skills: ["STRIDE", "OWASP", "Threat Modeling", "Vulnerability Assessment", "JWT", "Firewall", "SSL/TLS", "Secret Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-space bg-!forest-light/80 ">
      <div className="container-wide ">
        <SectionHeading
          eyebrow="My toolkit"
          title="A multidisciplinary engineering toolkit."
          description="The technologies and practices I draw on to design, build, test, and improve digital products. "
        />

    
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 ">
          {groups.map(({ icon: Icon, title, description, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#dcdacb] bg-sage/15 p-6 transition hover:-translate-y-1 hover:border-[#a8bd83]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-sage">
                <Icon size={21} strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-base font-bold text-forest text-2xl">{title}</h3>
              <p className="mt-2 text-lg text-forest/75">{description}</p>

              <div className="mt-5 flex flex-wrap gap-2 text-lg">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sage bg-sage/20 px-2.5 py-1.5 text-[15px] font-medium text-[#45564a]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
