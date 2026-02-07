import { EDUCATION } from "@/constants";
import { Calendar, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center space-y-4">
          <h2 className="flex items-center text-sm font-bold tracking-widest text-cyan-400 uppercase">
            <span className="mr-3 h-[1px] w-8 bg-cyan-500"></span> Background
          </h2>
          <h3 className="text-center text-4xl font-extrabold text-white">
            Education & Certifications
          </h3>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-cyan-500/30"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 transition-opacity group-hover:opacity-10">
                <GraduationCap size={120} className="text-cyan-400" />
              </div>
              <div className="relative z-10 flex h-full flex-col space-y-6">
                <div className="space-y-2">
                  <div className="mb-2 flex items-center space-x-2 font-mono text-sm text-cyan-400">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {edu.degree}
                  </h4>
                  <p className="text-lg font-medium text-slate-300">
                    {edu.institution}
                  </p>
                </div>
                <p className="flex leading-relaxed text-slate-400">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
