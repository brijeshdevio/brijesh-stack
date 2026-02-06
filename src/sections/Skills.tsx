import { SKILLS } from "@/constants";
import { Code2 } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="bg-slate-900/20 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
            My Toolkit
          </h2>
          <h3 className="text-4xl font-extrabold text-white">
            Skills & Technologies
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/10"
            >
              <h4 className="mb-6 border-b border-slate-800 pb-4 text-lg font-bold text-white">
                {group.category}
              </h4>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex cursor-default items-center text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    <Code2
                      size={16}
                      className="mr-3 text-slate-600 transition-colors group-hover:text-cyan-500"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
