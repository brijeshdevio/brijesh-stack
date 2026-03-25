import reelGrap from "@/assets/projects/reel-grap.png";
import tickShare from "@/assets/projects/tick-share.png";
import snapUrl from "@/assets/projects/snap-url.png";
import hookRelay from "@/assets/projects/hook-relay.png";

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
    techStack: [
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "JWT",
      "Argon2",
      "Appwrite",
    ],
    links: {
      demo: "https://snapurl.brijeshdev.in",
      github: "https://github.com/brijeshdevio/snap-url",
    },
    image: snapUrl,
  },
  {
    id: "hookrelay",
    title: "HookRelay",
    subtitle: "Webhook Monitoring & Debugging Tool",
    description:
      "A developer-focused webhook monitoring platform to capture, inspect, and replay webhook events in real-time. Built for reliability, debugging, and complete visibility into event-driven systems.",
    features: [
      "Real-time webhook capture",
      "Webhook event replay",
      "Detailed request inspection (headers, body, logs)",
      "Live event streaming dashboard",
      "Reliable delivery tracking",
      "Secure endpoint management",
      "Developer-friendly UI",
    ],
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Hono",
      "PostgreSQL",
      "JWT",
      "BullMQ",
      "Redis",
    ],
    links: {
      demo: "https://hook-relay.brijeshdev.in/",
      github: "https://github.com/brijeshdevio/hook-relay",
    },
    image: hookRelay,
  },
  {
    id: "reelgrab",
    title: "ReelGrab",
    subtitle: "Instagram Reel Downloader Web App",
    description:
      "A fast and privacy-focused Instagram Reel downloader that allows users to download high-quality videos without watermark. Built for simplicity, speed, and seamless cross-device experience.",
    features: [
      "Fast reel processing",
      "HD video downloads",
      "No watermark downloads",
      "No login required",
      "Privacy-first (no data storage)",
      "Fully responsive design",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "TailwindCSS"],
    links: {
      demo: "https://reel-grap.brijeshdev.in",
      github: "https://github.com/brijeshdevio/reel-grap",
    },
    image: reelGrap,
  },
  {
    id: "tickshare",
    title: "TickShare",
    subtitle: "Temporary File Sharing Platform",
    description:
      "A secure temporary file sharing platform that allows users to upload files, set expiration times, and share encrypted links. Designed for privacy, control, and seamless file transfer across devices.",
    features: [
      "Auto-expiring file links",
      "Upload files up to 5MB",
      "End-to-end encrypted sharing",
      "Custom expiration (10 minutes to 7 days)",
      "Private shareable links",
      "Access tracking (views & activity)",
      "Fast and responsive UI",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Cloud Storage (Appwrite)",
      "TailwindCSS",
    ],
    links: {
      demo: "https://tick-share.brijeshdev.in/",
      github: "https://github.com/brijeshdevio/tick-share",
    },
    image: tickShare,
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
