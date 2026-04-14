import { SectionLabel } from "../shared/SectionLabel";
import { BrowserMockup } from "../shared/BrowserMockup";
import { TagPill } from "../shared/TagPill";
import { ChevronRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/app/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-[38px] font-bold text-brand-white text-center mt-3 mb-2">
          Things {`I've`} actually shipped
        </h2>
        <p className="text-brand-gray text-center text-base mb-16">
          Each project solved a real problem. {`Here's`} what I built and why.
        </p>

        {/* Alternating first 2 */}
        <div className="flex flex-col gap-6 mb-6">
          {PROJECTS.slice(0, 2).map((p, i) => (
            <div
              key={p.name}
              className="card-hover grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-brand-card border border-brand-border rounded-[20px] p-6 relative overflow-hidden"
            >
              <div
                className={`order-1 ${i % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <BrowserMockup project={p} />
              </div>
              <div
                className={`order-2 ${i % 2 === 1 ? "md:order-1" : "md:order-2"} flex flex-col gap-3.5`}
              >
                <span className="text-[11px] font-mono py-[3px] px-2.5 rounded-full border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.08)] text-brand-green2 w-fit">
                  {p.tag}
                </span>
                <h3 className="text-2xl font-bold text-brand-white m-0">
                  {p.name}
                </h3>
                <p className="text-brand-gray text-sm m-0">{p.problem}</p>
                <p className="text-brand-white text-sm leading-[1.7] m-0">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <TagPill key={t}>{t}</TagPill>
                  ))}
                </div>
                <div className="flex gap-6 mt-2">
                  <a href={p?.link} target="__blank">
                    <button className="flex items-center gap-1 text-sm text-brand-green2 font-medium bg-transparent border-none cursor-pointer">
                      Live Demo <ChevronRight size={16} />
                    </button>
                  </a>
                  <a href={p?.github} target="__blank">
                    <button className="flex items-center gap-1 text-sm text-brand-gray bg-transparent border-none cursor-pointer">
                      GitHub <ExternalLink size={14} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2-col grid for last 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.slice(2).map((p) => (
            <div
              key={p.name}
              className="card-hover bg-brand-card border border-brand-border rounded-[20px] overflow-hidden"
            >
              <BrowserMockup project={p} />
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[11px] font-mono py-[3px] px-2.5 rounded-full border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.08)] text-brand-green2 w-fit">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-brand-white m-0">
                  {p.name}
                </h3>
                <p className="text-brand-gray text-sm m-0">{p.problem}</p>
                <p className="text-brand-white text-sm leading-[1.7] m-0">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <TagPill key={t}>{t}</TagPill>
                  ))}
                </div>
                <div className="flex gap-6 mt-2">
                  <a href={p?.link} target="__blank">
                    <button className="flex items-center gap-1 text-sm text-brand-green2 font-medium bg-transparent border-none cursor-pointer">
                      Live Demo <ChevronRight size={16} />
                    </button>
                  </a>
                  <a href={p?.github} target="__blank">
                    <button className="flex items-center gap-1 text-sm text-brand-gray bg-transparent border-none cursor-pointer">
                      GitHub <ExternalLink size={14} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
