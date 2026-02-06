import { HIGHLIGHTS } from "@/constants";
import { Terminal } from "lucide-react";

export function Engineering() {
  return (
    <section id="engineering" className="bg-slate-900/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
            Depth of Work
          </h2>
          <h3 className="text-4xl font-extrabold text-white">
            Engineering & Architecture
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-cyan-500/20 hover:bg-slate-800/50 lg:p-10"
            >
              <div className="mb-8 flex items-center space-x-4">
                <div className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform group-hover:scale-110">
                  <Terminal size={24} />
                </div>
                <h4 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {h.title}
                </h4>
              </div>
              <ul className="space-y-4">
                {h.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-slate-400 transition-colors group-hover:text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                    <span className="text-sm font-medium">{p}</span>
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
