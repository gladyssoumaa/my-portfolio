import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Database,
  Lightbulb,
  MonitorSmartphone,
} from "lucide-react";

import Image from "next/image";

const specialties = [
  {
    title: "AI & Machine Learning",
    detail: "RAG · LLMs · Data · NLP",
    icon: BrainCircuit,
  },
  {
    title: "Backend Systems",
    detail: "Python · FastAPI · PostgreSQL",
    icon: Database,
  },
  {
    title: "Web & Mobile",
    detail: "React · Next.js · Flutter · Dart",
    icon: MonitorSmartphone,
  },
  {
    title: "Product Thinking",
    detail: "UX · Research · Design · Product management",
    icon: Lightbulb,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full max-w-[1700px]  mx-auto px-8 pt-6 sm:pt-10 max-h-[100vh] flex flex-col justify-center items-center"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-sage/18 text-[#1c2421] w-full border-[#dddccc]/60 shadow-2xl">
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[900px] w-[800px] rounded-full bg-gradient-to-br from-[#c3a1d2]/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#bd5b32]/10 to-transparent blur-3xl" />

        <div className="grid items-center gap-12 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-28">
          <div className="relative order-2 lg:order-1 w-full max-w-3xl">
            <span className="text-lg font-bold uppercase tracking-[0.22em] text-[#bd5b32]">
              Hello, I'm Gladys
            </span>

            <h1 className="display-heading mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl text-[#0f0119]">
              Building technology with{" "}
              <span className="block mt-3 text-6xl sm:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0f0119] via-[#6515a3] to-[#bd5b32]">
                purpose.
              </span>
            </h1>

            <p className="mt-8 text-lg font-semibold tracking-wide text-forest/80 sm:text-xl md:text-2xl">
              Software Engineer | AI, Backend & Product Engineering
            </p>

            <p className="mt-5 text-base font-normal leading-relaxed text-forest/90 sm:text-xl max-w-3xl">
              I build useful software, intelligent systems and user-centered
              digital products that solve real problems and create lasting
              impact.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-copper text-forest text-lg font-bold text-base transition hover:bg-[#6515a3] hover:scale-105 duration-200 flex items-center gap-2 shadow-md"
              >
                View Projects <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-[#dddccc] text-forest text-lg font-semibold text-base transition hover:bg-[#f6f3e8] flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={20} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="https://github.com/gladyssoumaa"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-copper border border-[#dddccc] flex items-center justify-center text-[#45564a] hover:bg-[#eae6d7] transition-all"
                aria-label="GitHub — GitHub Profile"
              >
                <svg
                  xmlns="http://w3.org"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gladys-ouma-8922bb420/overlay/background-photo/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-copper border border-[#dddccc] flex items-center justify-center text-[#45564a] hover:bg-[#eae6d7] transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://w3.org"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#contact"
                className="w-11 h-11 rounded-full bg-copper border border-[#dddccc] flex items-center justify-center text-[#45564a] hover:bg-[#eae6d7] transition-all"
                aria-label="Contact Gladys"
              >
                <svg
                  xmlns="http://w3.org"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center w-full">
            <div className="absolute inset-0 border-[3px] border-[#c3a1d2]/40 rounded-[44px] rotate-6 transform scale-95" />
            <div className="absolute inset-0 border-[3px] border-[#bd5b32]/30 rounded-[44px] -rotate-3 transform scale-100" />

            <div className="relative w-[92%] h-[92%] rounded-[38px] overflow-hidden bg-gradient-to-tr  from-[#f6f3e8] to-[#c3a1d2]/10 border border-[#dddccc] flex flex-col items-center justify-center shadow-2xl">
              <div className="absolute inset-4 rounded-full border border-[#dddccc]/40" />

              <div className="relative w-full h-full">
                <Image
                  src="/me.png"
                  alt="Gladys - Software Engineer"
                  fill
                  loading="eager"
                  sizes="(max-width: 480px) 100vw, 480px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105 bg-sage/18"
                />
              </div>

              <span className="mt-4 text-sm font-bold tracking-[0.4em]">
                SOFTWARE ENGINEER
              </span>
            </div>

            <span className="absolute bottom-[-8%] left-[15%] text-sm tracking-[0.4em] text-[#45564a]/90">
              CREATIVITY × ENGINEERING
            </span>
            <div className="absolute top-[8%] right-[4%] text-[#bd5b32]  text-3xl animate-pulse">
              ✦
            </div>
            <div className="absolute bottom-[18%] left-[0%] text-[#6515a3] text-lg">
              ✦
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-[#dddccc]/60 sm:grid-cols-2 lg:grid-cols-4 bg-sage/1">
          {specialties.map(({ title, detail, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center gap-5 border-b border-[#dddccc]/5 px-6 py-7 last:border-b-0 sm:px-10 sm:py-8 lg:border-b-0 lg:border-r lg:border-[#dddccc]/5 lg:px-8 lg:py-10 lg:last:border-r-0"
            >
              <Icon
                className="shrink-0 text-[#6515a3]"
                size={30}
                strokeWidth={1.5}
              />
              <div>
                <p className="text-xl font-semibold tracking-wide text-[#0f0119]">
                  {title}
                </p>
                <p className="mt-1 text-lg text-[#45564a]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-12 flex w-fit items-center gap-2 text-xl font-bold uppercase tracking-[0.4em] text-[#bdcabe]/60 transition hover:text-sage animate-bounce"
      >
        Discover more <ArrowDown size={20} />
      </a>
    </section>
  );
}


