import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-b pb-2">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="h-40 bg-muted flex items-center justify-center">
                {/* <span className="text-muted-foreground text-sm">
                  Screenshot Placeholder
                </span> */}
                <img
                  src={`https://placehold.co/400x200?text=${project.title}`}
                  alt={project.title}
                  className="bg-cover min-w-full"
                />
              </div>

              <CardHeader className="mt-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button size="sm">Live Demo</Button>
                  <Button size="sm" variant="outline">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
