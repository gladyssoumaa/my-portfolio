"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import SectionHeading from "./section-heading";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:solenecanopy@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-space container-wide">
      <div className="relative ml-2 border-l border-forest/25 pl-7 sm:ml-5 sm:pl-10">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's build something meaningful."
            description="Have a project in mind, an opportunity to discuss, or an interesting problem to solve? I'd love to hear from you."
          />

          <a
            href="mailto:gladyssoumaa@gmail.com"
            className="mt-4 inline-flex items-center gap-3 text-lg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      font-semibold text-forest transition hover:text-copper"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5e8d7]">
              <Mail size={25} />
            </span>
            <span>
              <span className="block">Email me</span>
              <span className="mt-1 block text-sm font-normal text-copper">
                gladyssoumaa@gmail.com
              </span>
            </span>
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-10 max-w-sm text-lg leading-7 text-forest">
            I'm interested in opportunities where thoughtful engineering,
            continuous learning, and solving meaningful problems come together.
          </p>
        </div>

        
      </div>
    </section>
  );
}
