"use client";

import { useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dddccc]/70 bg-[#f6f3e8]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-wide flex min-h-[76px] items-center justify-between gap-5"
      >
        <a
          href="#home"
          className="shrink-0 text-lg font-bold tracking-[0.2em]"
        >
          <span className="mr-2 text-red">●</span>
          GLADYS OUMA
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[20px] font-medium text-forest transition hover:text-copper hover:scale-105 duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/gladys-ouma-cv.pdf"
          download
          className="hidden items-center gap-2 rounded-full bg-copper px-5 py-3 text-lg font-bold text-white transition hover:bg-[#984323] sm:inline-flex"
        >
          <Download size={14} />
          Download CV
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-[#dddccc] p-2 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#dddccc] bg-cream px-5 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm hover:bg-[#eae6d7]"
              >
                {link.label}
                <ArrowUpRight size={15} />
              </a>
            ))}

            <a
              href="/gladys-ouma-cv.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-copper px-4 py-3 text-sm font-semibold text-white"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
