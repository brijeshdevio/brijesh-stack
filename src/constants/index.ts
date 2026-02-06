import type { SkillGroup, TNavItem } from "@/types";

export const NAV_ITEMS: TNavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "React Router",
      "TanStack Query",
      "Axios",
      "Zustand/Jotai",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "OAuth",
      "Argon2 / bcrypt",
      "Rate Limiting",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Linux",
      "Vercel",
      "Cloud Deployments",
      "Zod",
      "Multer",
    ],
  },
];
