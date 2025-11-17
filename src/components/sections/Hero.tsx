import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full min-h-[350px] h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6 px-4 py-10">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Brijesh
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl text-primary font-semibold">
          Full Stack Engineer
        </h2>

        {/* Tagline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-xl">
          I build fast, modern and scalable full-stack applications that solve
          real-world problems with clean design and solid architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 pt-4">
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="pt-6 text-sm text-muted-foreground">
          JavaScript • TypeScript • React • Node.js • MongoDB • NestJS
        </div>
      </div>
    </section>
  );
}
