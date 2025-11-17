export function Skills() {
  return (
    <section className="w-full py-20 bg-muted/30 rounded-xl">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-b pb-2">
          Tech Stack
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Git</li>
              <li>Linux</li>
              <li>Docker (basic)</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
