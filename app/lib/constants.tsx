import { Layers, LayoutDashboard, Server } from "lucide-react";

export const NAV_LINKS = ["Work", "About", "Projects", "Contact"];

export const SERVICES = [
  {
    icon: <Layers size={24} color="#34d399" />,
    title: "SaaS MVPs",
    desc: "From auth to billing to deployment. I build complete SaaS products solo — React frontend, Node API, Prisma DB, Stripe payments.",
    tags: ["React", "Node.js", "Stripe", "Prisma"],
  },
  {
    icon: <LayoutDashboard size={24} color="#34d399" />,
    title: "Dashboards & Admin Tools",
    desc: "Internal tools, analytics dashboards, and data-heavy UIs built with shadcn/ui, TanStack Query and connected to your existing API.",
    tags: ["shadcn/ui", "TanStack", "REST API"],
  },
  {
    icon: <Server size={24} color="#34d399" />,
    title: "REST APIs & Backend Systems",
    desc: "Clean, validated, type-safe Express APIs with Zod, JWT/OAuth auth, Prisma ORM, and proper error handling. Deployed on Linux VPS or Vercel.",
    tags: ["Express", "Zod", "JWT", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    tag: "#image-hosting",
    name: "SnapURL",
    problem:
      "Uploading images and getting a permanent URL shouldn't require an account.",
    desc: "Built a serverless image hosting tool with S3-compatible storage, upload validation with Zod, and instant CDN-served URLs.",
    stack: ["Node.js", "Express", "Zod", "AWS S3", "React"],
    dot: "#34d399",
    grad: "rgba(6,78,59,0.6),rgba(2,26,20,0.3),#0d0d0d",
  },
  {
    tag: "#developer-tool",
    name: "HookRelay",
    problem:
      "Debugging webhooks is painful. Missing an event means starting over.",
    desc: "Built a webhook inspector and replay tool with a real-time event stream using WebSockets, persistent event log with Prisma, and a clean dashboard.",
    stack: ["Express", "WebSockets", "Prisma", "React", "TanStack Query"],
    dot: "#60a5fa",
    grad: "rgba(30,58,138,0.5),rgba(15,30,80,0.25),#0d0d0d",
  },
  {
    tag: "#utility",
    name: "ReelGrab",
    problem:
      "Downloading Instagram Reels shouldn't need a sketchy third-party app.",
    desc: "A clean web tool to download Instagram Reels by URL — fast, no ads, no account required.",
    stack: ["Node.js", "React", "Tailwind"],
    dot: "#c084fc",
    grad: "rgba(88,28,135,0.5),rgba(44,14,78,0.25),#0d0d0d",
  },
  {
    tag: "#file-sharing",
    name: "TickShare",
    problem:
      "Sharing files with expiry and access control, without paying for enterprise tools.",
    desc: "File sharing with expiration timers, access control, and shareable links. Built with Prisma + JWT-secured download endpoints.",
    stack: ["Node.js", "Prisma", "JWT", "React", "Shadcn"],
    dot: "#fb923c",
    grad: "rgba(124,45,18,0.5),rgba(67,20,7,0.25),#0d0d0d",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Brijesh built our admin dashboard in under two weeks. Clean code, no hand-holding needed, and he flagged issues before we even noticed them. Exactly the kind of developer you want on a project.",
    name: "Aryan Mehta",
    role: "Co-founder, early-stage SaaS startup",
    initials: "AM",
  },
  {
    quote:
      "I gave him a rough idea and a deadline. He came back with something better than I imagined — auth, dashboard, API, all connected and deployed. Would hire again without thinking twice.",
    name: "Priya Nair",
    role: "Freelance Product Designer",
    initials: "PN",
  },
  {
    quote:
      "Asked him to review my backend code and he rewrote half of it with proper Zod validation and error handling. Learned more in that code review than in 3 months of tutorials.",
    name: "Rohan Singh",
    role: "Junior Developer, bootcamp grad",
    initials: "RS",
  },
];

export const FRONTEND_SKILLS = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "TanStack Query",
  "Zustand",
  "Zod",
  "React Hook Form",
];
export const BACKEND_SKILLS = [
  "Node.js",
  "Express",
  "Prisma ORM",
  "PostgreSQL",
  "JWT & OAuth",
  "REST APIs",
  "Vercel",
  "Linux VPS",
];

// Common Style constants used
export const C = {
  bg: "#0a0a0a",
  bg2: "#080808",
  card: "#111111",
  card2: "#1a1a1a",
  border: "#222222",
  border2: "#2a2a2a",
  green: "#10b981",
  green2: "#34d399",
  white: "#f5f5f5",
  gray: "#6b7280",
  gray2: "#9ca3af",
};
