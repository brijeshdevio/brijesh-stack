import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

import { Button } from "@/components/ui/button";

const CODE_LINES = [
  {
    num: 1,
    content: (
      <>
        <span className="text-primary">import</span> {"{ "}{" "}
        <span className="text-foreground">Controller, Get, UseGuards</span>{" "}
        {" }"} <span className="text-primary">from</span>{" "}
        <span className="text-green-400">'@nestjs/common'</span>;
      </>
    ),
  },
  {
    num: 2,
    content: (
      <>
        <span className="text-primary">import</span> {"{ "}{" "}
        <span className="text-foreground">JwtAuthGuard</span> {" }"}{" "}
        <span className="text-primary">from</span>{" "}
        <span className="text-green-400">'../auth/jwt-auth.guard'</span>;
      </>
    ),
  },
  {
    num: 3,
    content: (
      <>
        <span className="text-primary">import</span> {"{ "}{" "}
        <span className="text-foreground">CourseService</span> {" }"}{" "}
        <span className="text-primary">from</span>{" "}
        <span className="text-green-400">'./course.service'</span>;
      </>
    ),
  },
  { num: 4, content: <> </> },
  {
    num: 5,
    content: (
      <>
        <span className="text-accent">@Controller</span>(
        <span className="text-green-400">'courses'</span>)
      </>
    ),
  },
  {
    num: 6,
    content: (
      <>
        <span className="text-accent">@UseGuards</span>(
        <span className="text-foreground">JwtAuthGuard</span>)
      </>
    ),
  },
  {
    num: 7,
    content: (
      <>
        <span className="text-primary">export class</span>{" "}
        <span className="text-foreground">CourseController</span> {"{"}
      </>
    ),
  },
  {
    num: 8,
    content: (
      <>
        {" "}
        <span className="text-primary">constructor</span>(
        <span className="text-primary">private readonly</span>{" "}
        <span className="text-foreground">courseService: CourseService</span>){" "}
        {"{}"}
      </>
    ),
  },
  { num: 9, content: <> </> },
  {
    num: 10,
    content: (
      <>
        {" "}
        <span className="text-muted-foreground italic">
          // Fetch all active courses for the user
        </span>
      </>
    ),
  },
  {
    num: 11,
    content: (
      <>
        {" "}
        <span className="text-accent">@Get</span>()
      </>
    ),
  },
  {
    num: 12,
    content: (
      <>
        {" "}
        <span className="text-primary">async</span>{" "}
        <span className="text-foreground">getActiveCourses</span>() {"{"}
      </>
    ),
  },
  {
    num: 13,
    content: (
      <>
        {" "}
        <span className="text-primary">const</span>{" "}
        <span className="text-foreground">courses</span> ={" "}
        <span className="text-primary">await this</span>.
        <span className="text-foreground">courseService</span>.
        <span className="text-foreground">findActive</span>();
      </>
    ),
  },
  { num: 14, content: <> </> },
  {
    num: 15,
    content: (
      <>
        {" "}
        <span className="text-primary">return</span> {"{"}
      </>
    ),
  },
  {
    num: 16,
    content: (
      <>
        {" "}
        <span className="text-foreground">status:</span>{" "}
        <span className="text-green-400">'success'</span>,
      </>
    ),
  },
  {
    num: 17,
    content: (
      <>
        {" "}
        <span className="text-foreground">data:</span>{" "}
        <span className="text-foreground">courses</span>,
      </>
    ),
  },
  { num: 18, content: <> {"};"}</> },
  { num: 19, content: <> {"}"}</> },
  { num: 20, content: <>{"}"}</> },
];

const PILLS = [
  "NestJS",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Docker",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-background pt-24 pb-16">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-primary/10 blur-[100px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Left Column (Content) */}
          <div className="flex flex-col items-start space-y-6 md:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary shadow-sm"
            >
              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-full w-full rounded-full bg-primary" />
                <span className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              </div>
              Available for work
            </motion.div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-['Syne'] text-5xl font-bold tracking-tight text-foreground md:text-7xl"
              >
                I Build Things
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-['Syne'] text-5xl font-bold tracking-tight text-primary md:text-7xl"
              >
                For Production.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-xl font-['DM_Sans'] text-lg leading-relaxed text-muted-foreground"
            >
              I build production-ready SaaS products — backend-first, full-stack
              delivered. <br className="hidden md:block" />
              Specializing in NestJS &middot; React &middot; TypeScript &middot;
              PostgreSQL
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full scrollbar-none flex-nowrap space-x-4 overflow-x-auto overflow-y-hidden pt-2 pb-2 [-ms-overflow-style:none] md:flex-wrap [&::-webkit-scrollbar]:hidden"
            >
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  className="h-12 px-8 font-['DM_Sans'] text-base shadow-lg shadow-primary/20"
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outline"
                  className="group h-12 bg-transparent px-8 font-['DM_Sans'] text-base"
                  onClick={() => window.open("/cv.pdf", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-2 pt-6"
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/brijeshdevio",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://linkedin.com/in/brijeshsoftdev",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:bk6500416@gmail.com",
                  label: "Email",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full border border-transparent p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Visual Terminal) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="hidden md:col-span-5 md:block"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ rotateY: -5, rotateX: 2, transformStyle: "preserve-3d" }}
              className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/20"
            >
              {/* Terminal scanline overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.02)_50%)] bg-size-[100%_4px]" />

              {/* Fake Window Header */}
              <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs font-medium text-muted-foreground">
                  course.controller.ts
                </div>
                <div className="w-12" /> {/* Spacer for centering */}
              </div>

              {/* Code Snippet */}
              <div className="overflow-x-auto bg-card p-4 font-mono text-sm leading-relaxed text-foreground">
                <table className="w-full">
                  <tbody>
                    {CODE_LINES.map((line) => (
                      <tr key={line.num} className="group">
                        <td className="w-8 pr-4 text-right text-xs text-muted-foreground/50 transition-colors select-none group-hover:text-muted-foreground">
                          {line.num}
                        </td>
                        <td className="whitespace-pre">{line.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
