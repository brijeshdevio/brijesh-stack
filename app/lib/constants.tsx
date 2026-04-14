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
    name: "PicURL",
    problem:
      "Uploading images and getting a permanent URL shouldn't require an account.",
    desc: "Built a serverless image hosting tool with Appwrite storage, upload validation with Zod, and instant CDN-served URLs.",
    stack: [
      "Typescript",
      "Node.js",
      "NestJS",
      "Zod",
      "Mongoose",
      "JWT & OAuth",
      "Appwrite",
      "React",
      "TanStack Query",
      "Tailwind & FlyonUI",
    ],
    dot: "#34d399",
    grad: "rgba(6,78,59,0.6),rgba(2,26,20,0.3),#0d0d0d",
    link: "https://picurl.brijeshdev.in/",
    github: "https://github.com/brijeshdevio/picurl",
  },
  {
    tag: "#auth-system",
    name: "Authify",
    problem: "Production-grade Authentication System (Full Stack)",
    desc: "Authify is a complete authentication and session management system built with a modern full-stack architecture. ",
    stack: [
      "Typescript",
      "Node.js",
      "Express",
      "PostgreSQL & Prisma",
      "Redis & BullMQ",
      "Nodemailer",
      "React",
      "TanStack Query",
      "Tailwind & Shadcn/ui",
    ],
    dot: "#60a5fa",
    grad: "rgba(30,58,138,0.5),rgba(15,30,80,0.25),#0d0d0d",
    link: "https://authify.brijeshdev.in/",
    github: "https://github.com/brijeshdevio/authify",
  },
  {
    tag: "#utility",
    name: "ReelGrab",
    problem:
      "Downloading Instagram Reels shouldn't need a sketchy third-party app.",
    desc: "A clean web tool to download Instagram Reels by URL — fast, no ads, no account required.",
    stack: ["Node.js", "Express", "External API", "React", "Tailwind"],
    dot: "#c084fc",
    grad: "rgba(88,28,135,0.5),rgba(44,14,78,0.25),#0d0d0d",
    link: "https://reelgrab.brijeshdev.in/",
    github: "https://github.com/brijeshdevio/reelgrab",
  },
  {
    tag: "#utility",
    name: "SnippetX",
    problem: "Code Snippet Saver & Organizer",
    desc: "SnippetX is a web application that allows developers to save, organize, search, and manage code snippets.",
    stack: [
      "Typescript",
      "Node.js",
      "NestJS",
      "Mongoose",
      "JWT",
      "Groq AI API",
      "React",
      "Tailwind & Daisyui",
      "TanStack Query",
    ],
    dot: "#fb923c",
    grad: "rgba(124,45,18,0.5),rgba(67,20,7,0.25),#0d0d0d",
    link: "https://snippetx.brijeshdev.in/",
    github: "https://github.com/brijeshdevio/snippetx",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "He helped me with both my ReactJS and a TypeScript project last semester. What I appreciate most is he doesn't do it for you — he guides you to figure it out yourself. I used to panic before deadlines but now I feel way more confident tackling new tech. Having someone like him to ask is honestly underrated.",
    name: "Ajay Gupta",
    role: "BCA Student",
    initials: "AG",
  },
  {
    quote:
      "I was completely lost with my Node.js backend assignment — couldn't figure out why my API routes kept breaking. He sat with me, didn't just fix it, but actually explained why it was happening. After that session I started thinking in terms of middleware and request flow instead of just copy-pasting code. Genuinely changed how I approach backend stuff.",
    name: "Aradhna Singh",
    role: "BCA Student",
    initials: "AS",
  },
  {
    quote:
      "React was honestly intimidating at first — all the hooks, state management, component structure. I asked him to help me with one project and he broke it down in a way that actually made sense. No jargon overload, just practical stuff I could apply immediately. My project got submitted on time and I actually understood what I built.",
    name: "Vishal",
    role: "Diploma Student",
    initials: "V",
  },
];

export const FRONTEND_SKILLS = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Daisy UI",
  "FlyonUI",
  "Axios",
  "React Router",
  "TanStack Query",
  "Zustand",
  "Zod",
  "React Hook Form",
];
export const BACKEND_SKILLS = [
  "Node.js",
  "Express",
  "Prisma",
  "Mongoose ORM",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "JWT & OAuth",
  "REST APIs",
  "Vercel",
  "Linux VPS",
  "Docker",
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
