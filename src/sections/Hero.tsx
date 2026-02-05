import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-40 pb-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-in fade-in slide-in-from-bottom-8 relative z-10 space-y-8 duration-700">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span>Open to Opportunities</span>
          </div>
          <h1 className="text-5xl leading-tight font-extrabold text-white lg:text-7xl">
            Full-Stack <span className="text-cyan-400">Developer</span>
          </h1>
          <p className="max-w-lg text-xl leading-relaxed text-slate-400">
            Building Scalable & Secure Web Applications. I design modern SaaS
            applications using React, TypeScript, Node.js, and NestJS.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "NestJS",
              "MongoDB",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-700 bg-slate-800/50 px-3 py-1 font-mono text-xs text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:scale-[1.02] hover:bg-cyan-400"
            >
              View Projects{" "}
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={18}
              />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 font-bold text-white transition-all hover:scale-[1.02] hover:bg-slate-700/50"
            >
              Contact Me
            </a>
          </div>

          <button className="flex items-center space-x-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white">
            <Download size={18} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="animate-in fade-in zoom-in-95 relative duration-1000">
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-500/20 blur-[120px]"></div>
          <div className="transform rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:rotate-2">
            <div className="mb-6 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <p className="text-pink-400">
                const <span className="text-cyan-400">developer</span> = &#123;
              </p>
              <p className="pl-6 text-slate-300">
                name: <span className="text-yellow-200">'Brijesh'</span>,
              </p>
              <p className="pl-6 text-slate-300">
                role:{" "}
                <span className="text-yellow-200">'Full-Stack Engineer'</span>,
              </p>
              <p className="pl-6 text-slate-300">
                focus: [<span className="text-yellow-200">'Security'</span>,{" "}
                <span className="text-yellow-200">'Performance'</span>],
              </p>
              <p className="pl-6 text-slate-300">
                available: <span className="text-blue-400">true</span>
              </p>
              <p className="text-pink-400">&#125;;</p>
              <p className="mt-4 text-slate-500 italic">
                // Crafting clean architecture...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
