export function About() {
  return (
    <section className="w-full py-20">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-b pb-2">
          About Me
        </h2>

        {/* Paragraph */}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          I'm <span className="font-semibold text-primary">Brijesh</span>, a
          full-stack engineer focused on building modern, scalable web
          applications with clean UI/UX and production-ready architecture. I
          love creating real-world systems — task managers, dashboards,
          analytics, file explorers — and understanding how things work behind
          the scenes from browser to OS level.
        </p>

        {/* Highlights */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
          <span>• Frontend: React, TypeScript, Tailwind</span>
          <span>• Backend: Node.js, Express, MongoDB</span>
          <span>• System Design & Architecture Thinking</span>
        </div>
      </div>
    </section>
  );
}
