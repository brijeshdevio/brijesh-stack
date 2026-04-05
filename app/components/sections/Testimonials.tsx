"use client";
import { SectionLabel } from "../shared/SectionLabel";
import { Avatar } from "../shared/Avatar";
import { TESTIMONIALS } from "@/app/lib/constants";

export function Testimonials() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 bg-brand-bg2">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionLabel>Kind Words</SectionLabel>
        <h2 className="text-[38px] font-bold text-brand-white text-center mt-3 mb-16">
          People I've worked with
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-brand-card rounded-[20px] p-6 border-l-2 border-l-[rgba(16,185,129,0.5)] border-t border-r border-b border-brand-border"
            >
              <div className="text-[52px] text-[rgba(52,211,153,0.45)] leading-none mb-3 font-bold">
                "
              </div>
              <p className="text-brand-white text-[15px] leading-[1.75] mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <Avatar initials={t.initials} />
                <div>
                  <div className="font-semibold text-brand-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-brand-gray text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-gray text-sm">
            Want to work together? I'm open to new projects.{" "}
            <button
              onClick={() => scrollTo("contact")}
              className="text-brand-green2 bg-transparent border-none cursor-pointer underline text-sm"
            >
              → Let's talk
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
