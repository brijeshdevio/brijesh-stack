"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "border-b border-brand-border bg-[#0a0a0add] backdrop-blur-[20px]"
            : "border-b border-transparent bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-brand-white font-mono text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green2 animate-blink-slow2" />
            brijesh.dev
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="nav-link"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="pulse-glow ml-2 py-1.5 px-4.5 rounded-full border border-brand-green text-brand-green2 bg-transparent text-sm font-medium cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer text-brand-gray2 flex"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-brand-border bg-[#0a0a0af8] py-4 px-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-left bg-transparent border-none cursor-pointer text-brand-gray2 text-[15px] py-1"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="w-fit py-1.5 px-4.5 rounded-full border border-brand-green text-brand-green2 bg-transparent text-sm"
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
