import { motion } from "framer-motion";
import { GraduationCap, ScrollText, MapPin, Briefcase } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "6+", label: "Projects Shipped" },
    { number: "2+", label: "Years Building" },
    { number: "10+", label: "APIs Built" },
    { number: "Always", label: "Learning" },
  ];

  const quickFacts = [
    { icon: GraduationCap, text: "BCA — Chandigarh University" },
    { icon: ScrollText, text: "NIELIT O Level Certified" },
    { icon: MapPin, text: "Lucknow, India" },
    { icon: Briefcase, text: "Open to full-time & freelance" },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[55%_45%] lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="mb-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              ABOUT
            </span>

            <h2 className="mb-8 font-['Syne'] text-3xl font-bold text-foreground md:text-5xl">
              The person behind the code.
            </h2>

            <div className="flex flex-col gap-6 font-['DM_Sans'] text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I'm Brijesh — a self-taught full-stack engineer from Lucknow,
                India, currently pursuing my BCA from Chandigarh University. I
                don't wait to learn — I build.
              </p>
              <p>
                From production auth systems to AI-powered SaaS platforms, I
                focus on shipping things that actually work, not just look good
                in demos. My stack is NestJS, React, TypeScript, and PostgreSQL
                — and I care deeply about clean architecture, real error
                handling, and APIs other developers actually enjoy using.
              </p>
              <p>
                When I'm not coding, I'm reading about systems, startups, and
                how great products are built from the ground up.
              </p>
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center transition-all hover:bg-muted/50 hover:shadow-lg hover:ring-1 hover:shadow-primary/10 hover:ring-primary"
                >
                  <span className="mb-1 font-['Syne'] text-3xl font-bold text-foreground">
                    {stat.number}
                  </span>
                  <span className="font-['DM_Sans'] text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 hidden h-12 w-12 rounded-tl-xl border-t-2 border-l-2 border-primary/20 md:block" />
            <div className="absolute -top-4 -right-4 hidden h-12 w-12 rounded-tr-xl border-t-2 border-r-2 border-primary/20 md:block" />
            <div className="absolute -bottom-4 -left-4 hidden h-12 w-12 rounded-bl-xl border-b-2 border-l-2 border-primary/20 md:block" />
            <div className="absolute -right-4 -bottom-4 hidden h-12 w-12 rounded-br-xl border-r-2 border-b-2 border-primary/20 md:block" />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/10"
            >
              {/* Initials Area */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-card">
                <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[60px]" />
                <span className="relative z-10 font-['Syne'] text-6xl font-bold text-primary">
                  BK
                </span>
                {/* Subtle grid background */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="h-px w-full bg-border" />

              {/* Quick Facts */}
              <div className="flex flex-col gap-4 p-8">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <fact.icon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-['DM_Sans'] text-sm text-muted-foreground">
                      {fact.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Currently Building */}
              <div className="flex flex-col gap-4 border-t border-border bg-muted/20 p-6">
                <span className="font-['DM_Sans'] text-xs tracking-wider text-muted-foreground uppercase">
                  Currently building
                </span>
                <div className="flex flex-wrap gap-3">
                  {["Mockly - Online Test"].map((project) => (
                    <div
                      key={project}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                      </span>
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
