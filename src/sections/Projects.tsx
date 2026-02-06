import { PROJECTS } from "@/constants";
import { ArrowRight, ExternalLink, Github, Layers } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between space-y-4 md:flex-row md:items-end md:space-y-0">
          <div className="space-y-4">
            <h2 className="flex items-center text-sm font-bold tracking-widest text-cyan-400 uppercase">
              <span className="mr-3 h-[1px] w-8 bg-cyan-500"></span> Portfolio
            </h2>
            <h3 className="text-4xl font-extrabold text-white">
              Featured Projects
            </h3>
          </div>
          <a
            href="http://github.com/brijeshdevio"
            className="group flex items-center text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-400"
          >
            View more on GitHub{" "}
            <ArrowRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:border-cyan-500/30 ${idx === 2 ? "mx-auto max-w-2xl lg:col-span-2" : ""}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              </div>
              <div className="space-y-6 p-8 lg:p-12">
                <div>
                  <h4 className="mb-2 font-mono text-xs tracking-widest text-cyan-400 uppercase">
                    {project.subtitle}
                  </h4>
                  <h3 className="mb-4 text-3xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="text-sm font-semibold text-slate-200">
                    Key Features:
                  </h5>
                  <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center space-x-2 text-xs text-slate-500"
                      >
                        <span className="h-1 w-1 rounded-full bg-cyan-500"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 border-t border-slate-800 pt-8">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center space-x-2 font-bold text-white transition-colors hover:text-cyan-400"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center space-x-2 font-bold text-white transition-colors hover:text-cyan-400"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      className="flex items-center space-x-2 font-bold text-white transition-colors hover:text-cyan-400"
                    >
                      <Layers size={18} />
                      <span>Case Study</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
