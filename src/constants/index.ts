import type {
  EducationEntry,
  EngineeringHighlight,
  Project,
  SkillGroup,
  TNavItem,
} from "@/types";

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

export const PROJECTS: Project[] = [
  {
    id: "snapurl",
    title: "SnapURL",
    subtitle: "SaaS Image Upload & Delivery Platform",
    description:
      "A developer-focused SaaS platform that allows users to securely upload images and generate fast public URLs.",
    features: [
      "Secure image upload",
      "JWT & OAuth authentication",
      "API key system",
      "Public URL generation",
      "User dashboard",
    ],
    techStack: ["React", "TypeScript", "NestJS", "MongoDB", "JWT", "Argon2"],
    links: { demo: "#", github: "#", caseStudy: "#" },
    image:
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "passgen",
    title: "Secure Password Generator",
    subtitle: "Advanced Password Management Web App",
    description:
      "A secure password generator with features such as bulk generation, email sharing, cloud storage for authenticated users.",
    features: [
      "Custom password rules",
      "Bulk generation",
      "Email sharing",
      "User authentication",
      "Cloud & local storage",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: { demo: "#", github: "#" },
    image:
      "https://images.unsplash.com/photo-1633265485768-3069de8437b7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "auth-api",
    title: "Auth-Driven Application",
    subtitle: "Authentication & API-Driven System",
    description:
      "A full-stack application focusing on complex authentication flows, protected routes, and role-based access control.",
    features: [
      "Protected routes",
      "Backend validation",
      "RBAC (Role-Based Access Control)",
      "Audit logging",
    ],
    techStack: ["React", "Node.js", "JWT", "PostgreSQL"],
    links: { github: "#" },
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
  },
];

export const HIGHLIGHTS: EngineeringHighlight[] = [
  {
    title: "Authentication Architecture",
    points: [
      "JWT access & refresh tokens",
      "Secure password hashing",
      "Token expiration & renewal",
    ],
  },
  {
    title: "API Design",
    points: [
      "RESTful structure",
      "Validation with Zod",
      "Centralized error handling",
    ],
  },
  {
    title: "File Upload Security",
    points: ["File type validation", "Size limits", "Safe storage strategies"],
  },
  {
    title: "Scalability Considerations",
    points: [
      "Modular backend architecture",
      "Database indexing",
      "Rate limiting",
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chandigarh University",
    period: "2026 - present",
    description:
      "Currently pursuing BCA with focus on Software Development, Programming, and IT Systems. Exploring core subjects like Data Structures, Web Development, and Database Management, along with emerging technologies like AI & Machine Learning.",
  },
  {
    degree: "Full-Stack Development Certification",
    institution: "karmanX (by Tanay Pratap)",
    period: "2024 - 2025",
    description:
      "Completed an intensive full-stack program covering backend development, databases, authentication, and modern frontend technologies like React. Built real-world applications and gained hands-on experience in APIs, deployment, and scalable web architecture.",
  },
];
