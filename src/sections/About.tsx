import { ChevronRight } from "lucide-react";
import brijesh_about from "@/assets/brijesh_about.png";

export function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="group relative">
          <img
            src={brijesh_about}
            alt="Kali Avatar"
            className="relative z-10 rounded-2xl border border-slate-800 shadow-2xl grayscale transition-all duration-700 group-hover:grayscale-0"
          />
          <div className="absolute -right-6 -bottom-6 -z-0 h-full w-full rounded-2xl border-2 border-cyan-500/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="flex items-center text-sm font-bold tracking-widest text-cyan-400 uppercase">
              <span className="mr-3 h-[1px] w-8 bg-cyan-500"></span> About Me
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              I’m a backend-focused full-stack engineer who enjoys building
              scalable systems and developer tools.
            </p>
          </div>
          <p className="text-lg leading-relaxed text-slate-400">
            I specialize in APIs, webhook handling systems, and automation
            workflows using modern technologies like Node.js, Express, and
            Prisma.
          </p>
          <p className="text-lg leading-relaxed text-slate-400">
            Recently, I’ve been working on projects involving webhook delivery
            systems, logging pipelines, and real-time applications.
          </p>
          <p className="text-lg leading-relaxed text-slate-400">
            I’m currently looking for opportunities where I can contribute to
            building high-performance backend systems.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "Designing clean, scalable REST APIs with proper validation and error handling",
              "Implementing secure authentication (JWT, OAuth, password hashing)",
              "Building SaaS-style dashboards and developer tools",
              "Structuring maintainable React + TypeScript applications",
              "Database modeling and backend architecture decisions",
              "Performance optimization and system trade-off analysis",
            ].map((area, idx) => (
              <div key={idx} className="group flex items-start space-x-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <ChevronRight size={14} />
                </div>
                <span className="text-sm font-medium text-slate-300">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
