import { SectionLabel } from "../shared/SectionLabel";
import { Zap, Server, Check } from "lucide-react";
import { FRONTEND_SKILLS, BACKEND_SKILLS } from "@/app/lib/constants";

export function Skills() {
  return (
    <section id="stack" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionLabel>Stack</SectionLabel>
        <h2 className="text-[38px] font-bold text-brand-white text-center mt-3 mb-16">
          Tools I reach for on every project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[720px] mx-auto">
          {[
            {
              label: "Frontend",
              icon: <Zap size={16} className="text-brand-green2" />,
              skills: FRONTEND_SKILLS,
            },
            {
              label: "Backend",
              icon: <Server size={16} className="text-brand-green2" />,
              skills: BACKEND_SKILLS,
            },
          ].map((col) => (
            <div
              key={col.label}
              className="bg-brand-card border border-brand-border rounded-[20px] p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-5">
                {col.icon}
                <span className="text-[13px] font-semibold text-brand-white uppercase tracking-[0.1em]">
                  {col.label}
                </span>
              </div>
              {col.skills.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2.5 py-[7px] border-b border-[rgba(34,34,34,0.5)]"
                >
                  <Check size={15} className="text-brand-green2 shrink-0" />
                  <span className="text-brand-white text-[15px]">{s}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
