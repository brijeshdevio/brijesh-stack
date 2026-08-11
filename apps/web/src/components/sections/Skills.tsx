import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Terminal,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

interface SkillPill {
  name: string;
}

interface SkillSubcategory {
  label: string;
  skills: SkillPill[];
}

interface CodeSnippet {
  filename: string;
  code: { line: number; content: React.ReactNode }[];
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  subcategories: SkillSubcategory[];
  snippet: CodeSnippet;
}

const backendSnippet: CodeSnippet = {
  filename: "jwt-auth.guard.ts",
  code: [
    {
      line: 1,
      content: (
        <>
          <span className="text-accent">@Injectable</span>()
        </>
      ),
    },
    {
      line: 2,
      content: (
        <>
          <span className="text-primary">export class</span>{" "}
          <span className="text-foreground">JwtAuthGuard</span>{" "}
          <span className="text-primary">extends</span>{" "}
          <span className="text-accent">AuthGuard</span>(
          <span className="text-green-400">'jwt'</span>) {"{"}
        </>
      ),
    },
    {
      line: 3,
      content: (
        <>
          {" "}
          <span className="text-accent">handleRequest</span>(
          <span className="text-foreground">err, user, info</span>) {"{"}
        </>
      ),
    },
    {
      line: 4,
      content: (
        <>
          {" "}
          <span className="text-primary">if</span> (
          <span className="text-foreground">err</span> || !
          <span className="text-foreground">user</span>){" "}
          <span className="text-primary">throw new</span>{" "}
          <span className="text-accent">UnauthorizedException</span>();
        </>
      ),
    },
    {
      line: 5,
      content: (
        <>
          {" "}
          <span className="text-primary">return</span>{" "}
          <span className="text-foreground">user</span>;
        </>
      ),
    },
    { line: 6, content: <> {"}"}</> },
    { line: 7, content: <>{"}"}</> },
  ],
};

const frontendSnippet: CodeSnippet = {
  filename: "useDebounce.ts",
  code: [
    {
      line: 1,
      content: (
        <>
          <span className="text-primary">const</span>{" "}
          <span className="text-accent">useDebounce</span> = &lt;
          <span className="text-foreground">T</span>&gt;(
          <span className="text-foreground">value: T, delay</span> ={" "}
          <span className="text-foreground">300</span>) =&gt; {"{"}
        </>
      ),
    },
    {
      line: 2,
      content: (
        <>
          {" "}
          <span className="text-primary">const</span> [
          <span className="text-foreground">debounced, setDebounced</span>] ={" "}
          <span className="text-accent">useState</span>(
          <span className="text-foreground">value</span>);
        </>
      ),
    },
    {
      line: 3,
      content: (
        <>
          {" "}
          <span className="text-accent">useEffect</span>(() =&gt; {"{"}
        </>
      ),
    },
    {
      line: 4,
      content: (
        <>
          {" "}
          <span className="text-primary">const</span>{" "}
          <span className="text-foreground">timer</span> ={" "}
          <span className="text-accent">setTimeout</span>(() =&gt;{" "}
          <span className="text-accent">setDebounced</span>(
          <span className="text-foreground">value</span>),{" "}
          <span className="text-foreground">delay</span>);
        </>
      ),
    },
    {
      line: 5,
      content: (
        <>
          {" "}
          <span className="text-primary">return</span> () =&gt;{" "}
          <span className="text-accent">clearTimeout</span>(
          <span className="text-foreground">timer</span>);
        </>
      ),
    },
    {
      line: 6,
      content: (
        <>
          {" "}
          {"}"}, [<span className="text-foreground">value, delay</span>]);
        </>
      ),
    },
    {
      line: 7,
      content: (
        <>
          {" "}
          <span className="text-primary">return</span>{" "}
          <span className="text-foreground">debounced</span>;
        </>
      ),
    },
    { line: 8, content: <>{"}"};</> },
  ],
};

const databaseSnippet: CodeSnippet = {
  filename: "schema.prisma",
  code: [
    {
      line: 1,
      content: (
        <>
          <span className="text-primary">model</span>{" "}
          <span className="text-foreground">User</span> {"{"}
        </>
      ),
    },
    {
      line: 2,
      content: (
        <>
          {" "}
          <span className="text-foreground">id</span>{" "}
          <span className="text-accent">String</span>{" "}
          <span className="text-primary">@id @default</span>(
          <span className="text-accent">cuid</span>())
        </>
      ),
    },
    {
      line: 3,
      content: (
        <>
          {" "}
          <span className="text-foreground">email</span>{" "}
          <span className="text-accent">String</span>{" "}
          <span className="text-primary">@unique</span>
        </>
      ),
    },
    {
      line: 4,
      content: (
        <>
          {" "}
          <span className="text-foreground">posts</span>{" "}
          <span className="text-accent">Post</span>[]
        </>
      ),
    },
    {
      line: 5,
      content: (
        <>
          {" "}
          <span className="text-foreground">createdAt</span>{" "}
          <span className="text-accent">DateTime</span>{" "}
          <span className="text-primary">@default</span>(
          <span className="text-accent">now</span>())
        </>
      ),
    },
    { line: 6, content: <>{"}"}</> },
  ],
};

const devopsSnippet: CodeSnippet = {
  filename: "docker-compose.yml",
  code: [
    {
      line: 1,
      content: (
        <>
          <span className="text-primary">services:</span>
        </>
      ),
    },
    {
      line: 2,
      content: (
        <>
          {" "}
          <span className="text-foreground">api:</span>
        </>
      ),
    },
    {
      line: 3,
      content: (
        <>
          {" "}
          <span className="text-foreground">build:</span>{" "}
          <span className="text-green-400">.</span>
        </>
      ),
    },
    {
      line: 4,
      content: (
        <>
          {" "}
          <span className="text-foreground">ports:</span>
        </>
      ),
    },
    {
      line: 5,
      content: (
        <>
          {" "}
          - <span className="text-green-400">"3000:3000"</span>
        </>
      ),
    },
    {
      line: 6,
      content: (
        <>
          {" "}
          <span className="text-foreground">depends_on:</span>
        </>
      ),
    },
    {
      line: 7,
      content: (
        <>
          {" "}
          - <span className="text-foreground">postgres</span>
        </>
      ),
    },
  ],
};

const learningSnippet: CodeSnippet = {
  filename: "main.rs",
  code: [
    {
      line: 1,
      content: (
        <>
          <span className="text-primary">fn</span>{" "}
          <span className="text-accent">main</span>() {"{"}
        </>
      ),
    },
    {
      line: 2,
      content: (
        <>
          {" "}
          <span className="text-primary">let</span>{" "}
          <span className="text-foreground">numbers</span> ={" "}
          <span className="text-accent">vec!</span>[
          <span className="text-foreground">1, 2, 3</span>];
        </>
      ),
    },
    {
      line: 3,
      content: (
        <>
          {" "}
          <span className="text-primary">let</span>{" "}
          <span className="text-foreground">doubled</span>:{" "}
          <span className="text-accent">Vec</span>&lt;_&gt; ={" "}
          <span className="text-foreground">numbers</span>.
          <span className="text-accent">iter</span>().
          <span className="text-accent">map</span>(|
          <span className="text-foreground">x</span>|{" "}
          <span className="text-foreground">x</span> *{" "}
          <span className="text-foreground">2</span>).
          <span className="text-accent">collect</span>();
        </>
      ),
    },
    {
      line: 4,
      content: (
        <>
          {" "}
          <span className="text-accent">println!</span>(
          <span className="text-green-400">"{`{:?}`}"</span>,{" "}
          <span className="text-foreground">doubled</span>);
        </>
      ),
    },
    { line: 5, content: <>{"}"}</> },
  ],
};

const skillsData: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    snippet: backendSnippet,
    subcategories: [
      {
        label: "Core Frameworks",
        skills: [
          { name: "NestJS" },
          { name: "Express.js" },
          { name: "Fastify" },
        ],
      },
      {
        label: "Communication",
        skills: [{ name: "REST" }, { name: "GraphQL" }, { name: "WebSockets" }],
      },
      {
        label: "Data Access",
        skills: [
          { name: "Prisma ORM" },
          { name: "TypeORM" },
          { name: "Drizzle" },
        ],
      },
      {
        label: "Security",
        skills: [
          { name: "JWT" },
          { name: "OAuth2" },
          { name: "RBAC" },
          { name: "API Keys" },
        ],
      },
      {
        label: "Optimization",
        skills: [
          { name: "Rate limiting" },
          { name: "Caching" },
          { name: "Queue systems" },
        ],
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: Layout,
    snippet: frontendSnippet,
    subcategories: [
      {
        label: "Core & Frameworks",
        skills: [
          { name: "React" },
          { name: "Next.js" },
          { name: "TypeScript" },
        ],
      },
      {
        label: "Styling & UI",
        skills: [
          { name: "Tailwind CSS" },
          { name: "Shadcn UI" },
          { name: "Radix" },
        ],
      },
      {
        label: "Animation",
        skills: [{ name: "Framer Motion" }, { name: "GSAP" }],
      },
      {
        label: "State & Forms",
        skills: [
          { name: "Zustand" },
          { name: "React Query" },
          { name: "React Hook Form" },
        ],
      },
      {
        label: "Best Practices",
        skills: [
          { name: "Responsive design" },
          { name: "Accessibility (a11y)" },
        ],
      },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    snippet: databaseSnippet,
    subcategories: [
      {
        label: "Engines",
        skills: [
          { name: "PostgreSQL" },
          { name: "MongoDB" },
          { name: "Redis" },
        ],
      },
      {
        label: "Cloud DBs",
        skills: [
          { name: "Supabase" },
          { name: "Firebase" },
          { name: "PlanetScale" },
        ],
      },
      {
        label: "Storage",
        skills: [{ name: "AWS S3" }, { name: "Cloudinary" }],
      },
      {
        label: "Architecture",
        skills: [
          { name: "Database design" },
          { name: "Indexing" },
          { name: "Migrations" },
        ],
      },
      {
        label: "Performance",
        skills: [
          { name: "Connection pooling" },
          { name: "Query optimization" },
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Terminal,
    snippet: devopsSnippet,
    subcategories: [
      {
        label: "Containerization",
        skills: [{ name: "Docker" }, { name: "Docker Compose" }],
      },
      {
        label: "Automation",
        skills: [{ name: "GitHub Actions" }, { name: "CI/CD pipelines" }],
      },
      {
        label: "Hosting",
        skills: [
          { name: "Nginx" },
          { name: "PM2" },
          { name: "Vercel" },
          { name: "Railway" },
        ],
      },
      {
        label: "OS & Scripting",
        skills: [{ name: "Linux (Ubuntu)" }, { name: "Shell scripting" }],
      },
      {
        label: "Version Control",
        skills: [{ name: "Git" }, { name: "GitHub" }, { name: "Code review" }],
      },
    ],
  },
];

export const learningCategory: SkillCategory = {
  id: "learning",
  title: "Currently Learning",
  icon: BookOpen,
  snippet: learningSnippet,
  subcategories: [
    {
      label: "Systems & Orchestration",
      skills: [
        { name: "Rust (systems programming)" },
        { name: "Kubernetes basics" },
      ],
    },
    {
      label: "Architecture",
      skills: [{ name: "System design patterns" }],
    },
    {
      label: "Advanced Tech",
      skills: [{ name: "WebAssembly" }, { name: "gRPC & Protocol Buffers" }],
    },
  ],
};

function SnippetDisplay({ snippet }: { snippet: CodeSnippet }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 font-['JetBrains_Mono',monospace] text-xs font-medium text-muted-foreground">
          {snippet.filename}
        </div>
      </div>
      {/* Body */}
      <div className="overflow-x-auto p-4 font-['JetBrains_Mono',monospace] text-sm leading-relaxed">
        <table className="w-full border-collapse">
          <tbody>
            {snippet.code.map((line) => (
              <tr key={line.line}>
                <td className="w-8 pr-4 text-right text-xs text-muted-foreground/50 select-none">
                  {line.line}
                </td>
                <td className="whitespace-pre">{line.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full border-t border-border bg-background py-24 md:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            SKILLS
          </span>
          <h2 className="mb-4 font-['Syne'] text-3xl font-bold text-foreground md:text-5xl">
            Tools I Use Daily
          </h2>
          <p className="font-['DM_Sans'] text-base text-muted-foreground md:text-lg">
            And the ones I'm learning to master next.
          </p>
        </motion.div>

        {/* Categories Layout */}
        <div className="mt-16 flex flex-col gap-12 lg:gap-24">
          {skillsData.map((category, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={category.id}
                className={`flex flex-col items-center gap-8 md:flex-row lg:gap-16 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-1/2 lg:w-7/12"
                >
                  <div className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/20 hover:shadow-lg md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <category.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-['Syne'] text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="mb-6 h-px w-full bg-border" />

                    <div className="flex flex-col gap-6">
                      {category.subcategories.map((sub, subIdx) => (
                        <div key={subIdx} className="flex flex-col gap-3">
                          <span className="font-['DM_Sans'] text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            {sub.label}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {sub.skills.map((skill, skillIdx) => (
                              <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: skillIdx * 0.05 }}
                                key={skill.name}
                                className="rounded-md bg-secondary px-3 py-1 font-['DM_Sans'] text-sm text-secondary-foreground transition-all duration-200 hover:cursor-pointer hover:bg-primary hover:text-foreground"
                              >
                                {skill.name}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Snippet inside card */}
                    <div className="mt-8 block md:hidden">
                      <SnippetDisplay snippet={category.snippet} />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Snippet (Desktop) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden w-full md:block md:w-1/2 lg:w-5/12"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                  >
                    <SnippetDisplay snippet={category.snippet} />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

          {/* Currently Learning Category (Centered) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex w-full flex-col items-center lg:mt-12"
          >
            <div className="w-full max-w-5xl rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/20 hover:shadow-lg md:p-8">
              <div className="mb-4 flex items-center justify-center gap-3">
                <learningCategory.icon className="h-6 w-6 text-primary" />
                <h3 className="font-['Syne'] text-xl font-bold text-foreground">
                  {learningCategory.title}
                </h3>
              </div>

              <div className="mb-6 h-px w-full bg-border" />

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start lg:gap-16">
                <div className="flex flex-col gap-6">
                  {learningCategory.subcategories.map((sub, subIdx) => (
                    <div key={subIdx} className="flex flex-col gap-3">
                      <span className="font-['DM_Sans'] text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        {sub.label}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sub.skills.map((skill, skillIdx) => (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIdx * 0.05 }}
                            key={skill.name}
                            className="rounded-md bg-secondary px-3 py-1 font-['DM_Sans'] text-sm text-secondary-foreground"
                          >
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <SnippetDisplay snippet={learningCategory.snippet} />
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
