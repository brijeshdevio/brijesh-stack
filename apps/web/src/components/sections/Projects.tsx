import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Category = "AI" | "SaaS" | "API" | "Full-Stack" | "DevTools";

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: Category;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "CourseGen AI",
    description:
      "AI-powered course generator that creates structured learning paths with resources, quizzes, and progress tracking.",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
    featured: true,
  },
  {
    title: "AuthForge",
    description:
      "Production-ready authentication microservice with JWT rotation, OAuth2, RBAC, and email verification baked in.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "API",
    featured: false,
  },
  {
    title: "PicURL",
    description:
      "URL shortener with analytics dashboard, custom slugs, QR codes, and team collaboration features.",
    tech: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL", "NextAuth"],
    liveUrl: "#",
    githubUrl: "#",
    category: "SaaS",
    featured: false,
  },
  {
    title: "StreamFlow",
    description:
      "Real-time collaborative whiteboard with WebSocket sync, drawing tools, and export to PDF/PNG.",
    tech: ["React", "Socket.io", "Konva.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
    featured: true,
  },
  {
    title: "DevMetrics",
    description:
      "GitHub analytics dashboard that visualizes commit history, PR velocity, and team productivity metrics.",
    tech: ["React", "Recharts", "GitHub API", "TailwindCSS", "TypeScript"],
    githubUrl: "#",
    category: "DevTools",
    featured: false,
  },
  {
    title: "ShopCraft",
    description:
      "Headless e-commerce platform with multi-vendor support, inventory management, and Stripe payments.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Redis", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
    featured: false,
  },
];

const categories = ["All", "AI", "SaaS", "API", "Full-Stack", "DevTools"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="relative w-full bg-background py-24 md:py-32">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            PROJECTS
          </span>
          <h2 className="font-['Syne'] text-3xl font-bold text-foreground md:text-5xl">
            What I've Built
          </h2>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-1.5 font-['DM_Sans'] text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={project.title}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:shadow-xl ${
                  project.featured
                    ? "border-t-2 border-t-primary md:col-span-2 lg:col-span-2"
                    : "col-span-1"
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <h3 className="mb-2 font-['Syne'] text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-6 font-['DM_Sans'] text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-2.5 py-0.5 font-['DM_Sans'] text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto flex items-center gap-4">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 font-['DM_Sans'] text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-1.5 font-['DM_Sans'] text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      <FaGithub className="h-4 w-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
