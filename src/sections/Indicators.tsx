import { Cpu, Globe, ShieldCheck } from "lucide-react";

export function Indicators() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div className="group flex flex-col items-center space-y-4 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-900">
            <Globe size={28} />
          </div>
          <h3 className="text-lg font-bold text-white">
            Production-Ready Projects
          </h3>
          <p className="text-sm text-slate-400">
            Built and deployed real-world applications with authentication,
            APIs, and cloud hosting.
          </p>
        </div>
        <div className="group flex flex-col items-center space-y-4 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-500 group-hover:text-slate-900">
            <Cpu size={28} />
          </div>
          <h3 className="text-lg font-bold text-white">Full-Stack Expertise</h3>
          <p className="text-sm text-slate-400">
            Experience across frontend, backend, databases, and deployment
            pipelines.
          </p>
        </div>
        <div className="group flex flex-col items-center space-y-4 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-slate-900">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-lg font-bold text-white">Security-Focused</h3>
          <p className="text-sm text-slate-400">
            Implemented JWT, OAuth, password hashing, rate limiting, and
            validation.
          </p>
        </div>
      </div>
    </section>
  );
}
