import { motion } from "framer-motion";
import {
  Compass,
  Database,
  Layout,
  Shield,
  Rocket,
  type LucideIcon,
} from "lucide-react";

interface SubPoint {
  label: string;
}

interface WorkflowPhase {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  subPoints: SubPoint[];
}

const workflowPhases: WorkflowPhase[] = [
  {
    id: 1,
    title: "Understand First, Code Later",
    description:
      "I start by understanding the problem deeply — who's it for, what's the core flow, and what can go wrong. Then I sketch the architecture: database schema, API contracts, and component tree before writing a single line.",
    icon: Compass,
    subPoints: [
      { label: "System design diagrams" },
      { label: "API contract first (OpenAPI)" },
      { label: "Database schema planning" },
      { label: "Edge case mapping" },
    ],
  },
  {
    id: 2,
    title: "Build the Engine Room",
    description:
      "I build the backend first — authentication, authorization, database models, and API endpoints. Everything gets typed, tested, and documented. If the API isn't solid, the frontend doesn't matter.",
    icon: Database,
    subPoints: [
      { label: "NestJS modular architecture" },
      { label: "Prisma + PostgreSQL" },
      { label: "JWT + RBAC auth" },
      { label: "Swagger documentation" },
    ],
  },
  {
    id: 3,
    title: "Polish the Surface",
    description:
      "With a rock-solid API, the frontend becomes a joy to build. I focus on responsive design, smooth animations, accessible components, and state management that doesn't fight back.",
    icon: Layout,
    subPoints: [
      { label: "React + TypeScript" },
      { label: "Tailwind + Shadcn UI" },
      { label: "Framer Motion animations" },
      { label: "Accessibility (a11y) baked in" },
    ],
  },
  {
    id: 4,
    title: "Break It Before They Do",
    description:
      "I test aggressively — unit tests for logic, integration tests for APIs, and end-to-end tests for critical flows. Edge cases get special attention. Error handling is never an afterthought.",
    icon: Shield,
    subPoints: [
      { label: "Jest + Supertest" },
      { label: "Playwright E2E" },
      { label: "Error boundary coverage" },
      { label: "Rate limiting & security" },
    ],
  },
  {
    id: 5,
    title: "Ship, Monitor, Improve",
    description:
      "I deploy with confidence using CI/CD pipelines, monitor real usage, and iterate based on feedback. Shipping is just the beginning — the best products evolve in production.",
    icon: Rocket,
    subPoints: [
      { label: "Docker + GitHub Actions" },
      { label: "Vercel / Railway / AWS" },
      { label: "Logging & monitoring" },
      { label: "Feedback-driven iterations" },
    ],
  },
];

export default function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="relative w-full overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      {/* Optional faint grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 100%",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            HOW I WORK
          </span>
          <h2 className="font-['Syne'] text-3xl font-bold text-foreground md:text-5xl">
            From Idea to Production
          </h2>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto mt-12 flex max-w-2xl flex-col items-center text-center"
        >
          {/* Quote Mark Watermark */}
          <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 font-['Syne'] text-8xl font-bold text-primary/10 select-none">
            "
          </span>
          <p className="relative z-10 font-['DM_Sans'] text-base leading-relaxed text-muted-foreground italic md:text-lg">
            I believe in{" "}
            <span className="font-medium text-primary not-italic">
              backend-first
            </span>{" "}
            thinking and{" "}
            <span className="font-medium text-primary not-italic">
              clean architecture
            </span>
            . My goal is to{" "}
            <span className="font-medium text-primary not-italic">
              ship fast
            </span>{" "}
            without breaking things, ensuring the final product provides a
            seamless{" "}
            <span className="font-medium text-primary not-italic">
              developer experience
            </span>{" "}
            for whoever touches the codebase next.
          </p>
          <div className="mt-8 h-0.5 w-20 bg-primary/30" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative mx-auto mt-20 w-full max-w-5xl md:mt-32">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 h-full w-0.5 bg-transparent md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full origin-top bg-border"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {workflowPhases.map((phase, index) => {
              // 0-indexed: index 0 (Phase 1, Odd) -> Right side
              // index 1 (Phase 2, Even) -> Left side
              const isLeftCard = index % 2 !== 0;

              return (
                <div
                  key={phase.id}
                  className={`relative flex w-full ${
                    isLeftCard ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute top-12 left-4 z-20 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-1/2">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4 }}
                      className="relative flex h-3 w-3 items-center justify-center rounded-full bg-primary"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                        className="absolute h-full w-full rounded-full bg-primary"
                      />
                    </motion.div>
                  </div>

                  {/* Card Container */}
                  <div className="w-full pt-2 md:w-1/2 md:px-4 md:pt-0 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isLeftCard ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl md:p-8"
                    >
                      {/* Phase Number Watermark */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="pointer-events-none absolute top-2 right-4 font-['Syne'] text-6xl font-bold text-primary opacity-5 select-none md:text-8xl"
                      >
                        0{phase.id}
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="mb-3 flex items-center gap-3">
                          <phase.icon className="h-6 w-6 shrink-0 text-primary" />
                          <h3 className="font-['Syne'] text-xl font-bold text-foreground">
                            {phase.title}
                          </h3>
                        </div>
                        <p className="font-['DM_Sans'] text-sm leading-relaxed text-muted-foreground md:text-base">
                          {phase.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {phase.subPoints.map((point, ptIdx) => (
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + ptIdx * 0.05 }}
                              key={point.label}
                              className="rounded-full bg-secondary px-3 py-1 font-['DM_Sans'] text-xs font-medium text-secondary-foreground"
                            >
                              {point.label}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
