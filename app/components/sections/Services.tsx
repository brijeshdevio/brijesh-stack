import { SectionLabel } from "../shared/SectionLabel";
import { TagPill } from "../shared/TagPill";
import { SERVICES } from "@/app/lib/constants";

export function Services() {
  return (
    <section id="work" className="py-28 bg-brand-bg2">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionLabel>What I Build</SectionLabel>
        <h2 className="text-[38px] font-bold text-brand-white text-center mt-3 mb-16 leading-[1.25]">
          End-to-end engineering, no handoffs needed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="card-hover relative overflow-hidden bg-brand-card border border-brand-border rounded-[20px] p-6"
            >
              {/* Green top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(to right, #10b981, transparent)",
                }}
              />
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(16,185,129,0.1)] flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-white mb-3">
                {s.title}
              </h3>
              <p className="text-brand-gray text-sm leading-[1.7] mb-5">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <TagPill key={t}>{t}</TagPill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
