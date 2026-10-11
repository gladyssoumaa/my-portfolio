import { ArrowUpRight, Code2, Compass, HeartHandshake } from "lucide-react";
import SectionHeading from "./section-heading";

const principles = [
  {
    icon: Code2,
    title: "Engineering with intention",
    text: "Building maintainable software with attention to architecture, reliability, and real-world constraints.",
  },
  {
    icon: Compass,
    title: "Thinking beyond the code",
    text: "Connecting technical decisions to user needs, product goals, and the problem being solved.",
  },
  {
    icon: HeartHandshake,
    title: "Learning through building",
    text: "Exploring new technologies through practical projects, experimentation, and continuous improvement.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-space container-wide ">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 text-lg ">
        <div>
          <SectionHeading
            eyebrow="A little about me"
            title="Curious by nature. An engineer by practice."
          />

          <div className="relative overflow-hidden rounded-2xl bg-sage/40 p-7 sm:p-9">
            <span className="text-lg font-bold uppercase tracking-[0.1em] text-copper">
              My approach
            </span>
            <p className="display-heading mt-5 text-3xl text-forest sm:text-2xl">
              Good technology should make complicated things feel simpler.
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-forest/15 pt-5">
              <span className="text-2sm text-red">
                Software · Intelligence · Impact
              </span>
              <ArrowUpRight className="text-copper" size={25} />
            </div>
          </div>
        </div>

        <div className="lg:pt-14">
          <p className="text-base leading-8 text-forest text-xl">
            I'm a software engineer with a strong interest in building products
            that bring together backend engineering, artificial intelligence,
            data, and thoughtful user experiences.
          </p>

          <p className="mt-5 text-base leading-8 text-forest text-xl">
            My work spans API development, AI-powered applications, web and
            mobile experiences and data-driven solutions. I enjoy moving
            between understanding a problem, designing a solution, implementing
            it and refining it through testing and feedback.
          </p>

          <p className="mt-5 text-base leading-8 text-forest text-xl">
            I'm particularly interested in technology that has a practical
            purpose, tools that help people make better decisions, reduce
            complexity and turn fragmented information into something useful.
          </p>

          <div className="mt-9 space-y-6">
            {principles.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6e8d9] text-forest">
                  <Icon size={25} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-copper">{title}</h3>
                  <p className="mt-1 text-xl leading-6 text-forest">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
