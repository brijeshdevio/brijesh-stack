"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { TerminalVisual } from "../shared/TerminalVisual";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden md:overflow-visible"
    >
      {/* Green glows */}
      <div className="absolute top-[30%] left-0 w-[600px] h-[500px] bg-[rgba(16,185,129,0.05)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[20%] w-[280px] h-[280px] bg-[rgba(16,185,129,0.07)] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto py-24 px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[58%_42%] gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div
              className="transition-all duration-700 ease-out delay-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-[rgba(16,185,129,0.4)] bg-[rgba(16,185,129,0.1)] text-brand-green2 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green2 animate-blink-slow" />
                Open to work
              </span>
            </div>

            {/* Heading */}
            <div
              className="transition-all duration-700 ease-out delay-100"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <h1 className="text-5xl md:text-[72px] font-black leading-none tracking-tight m-0">
                <span className="block text-brand-white">I Build Things</span>
                <span className="block text-brand-green2 italic">
                  For the Web.
                </span>
              </h1>
            </div>

            {/* Sub */}
            <div
              className="transition-all duration-700 ease-out delay-200"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <p className="text-brand-gray2 text-lg leading-[1.7] max-w-[520px] m-0">
                Full-Stack Engineer specializing in{" "}
                <code className="text-brand-green2 hover:underline">
                  Node.js
                </code>{" "}
                and{" "}
                <code className="text-brand-green2 hover:underline">
                  Express
                </code>{" "}
                ,{" "}
                <code className="text-brand-green2 hover:underline">
                  PostgreSQL
                </code>
                . I turn ideas into production-ready SaaS products.
              </p>
            </div>

            {/* Stats */}
            <div
              className="transition-all duration-700 ease-out delay-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <div className="flex items-center">
                {[
                  { val: "4", label: "Projects Shipped" },
                  { val: "3", label: "SaaS Tools Live" },
                  { val: "Now", label: "Available" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`${
                      i === 0 ? "pr-6" : "px-6"
                    } ${i > 0 ? "border-l border-brand-border2" : ""}`}
                  >
                    <div className="text-[26px] font-bold text-brand-white">
                      {s.val}
                    </div>
                    <div className="text-xs text-brand-gray mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div
              className="transition-all duration-700 ease-out delay-500 flex flex-wrap gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 py-3 px-6 bg-brand-green text-white font-semibold text-[15px] rounded-[10px] border-none cursor-pointer hover:bg-brand-green2 transition-colors duration-200"
              >
                View My Work <ArrowRight size={16} />
              </button>
              <a href={"/Brijesh_Kumar_Resume.pdf"} target="__blank">
                <button className="flex items-center gap-2 py-3 px-6 bg-transparent text-brand-white font-semibold text-[15px] rounded-[10px] border border-[#333] cursor-pointer hover:border-white transition-colors duration-200">
                  Download CV <Download size={16} />
                </button>
              </a>
            </div>
          </div>

          {/* Right – Terminal */}
          <div
            className="transition-all duration-700 ease-out delay-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <TerminalVisual visible={visible} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[11px] text-brand-gray font-mono">scroll</span>
        <div
          className="w-[1px] h-8"
          style={{
            background: "linear-gradient(to bottom, #6b7280, transparent)",
          }}
        />
      </div>
    </section>
  );
}
