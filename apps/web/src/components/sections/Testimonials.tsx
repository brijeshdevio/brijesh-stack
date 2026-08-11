import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  Star,
  GitBranch,
} from "lucide-react";

type Relationship =
  "Client" | "Colleague" | "Manager" | "Open Source Contributor";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  relationship: Relationship;
  project: string;
  highlighted: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Brijesh built our entire authentication system from scratch — JWT rotation, OAuth2, RBAC, the works. It's been running in production for 8 months with zero security incidents. His code is cleaner than most seniors I've worked with.",
    name: "Arjun Mehta",
    role: "CTO at SaaSFlow",
    avatar: "AM",
    relationship: "Client",
    project: "AuthForge Microservice",
    highlighted: true,
  },
  {
    id: 2,
    quote:
      "What impressed me most was how he thinks beyond just 'making it work.' He considered edge cases, rate limiting, and even wrote Swagger docs without being asked. A backend engineer who actually cares about DX.",
    name: "Sarah Chen",
    role: "Lead Engineer at DevCraft",
    avatar: "SC",
    relationship: "Colleague",
    project: "CourseGen AI Platform",
    highlighted: false,
  },
  {
    id: 3,
    quote:
      "We needed a real-time collaboration feature shipped in 2 weeks. Brijesh delivered in 10 days — WebSocket sync, conflict resolution, and a buttery-smooth UI. The client called it 'magic.'",
    name: "Rahul Verma",
    role: "Product Manager at CollabHub",
    avatar: "RV",
    relationship: "Client",
    project: "StreamFlow Whiteboard",
    highlighted: false,
  },
  {
    id: 4,
    quote:
      "His open-source contributions speak volumes. Clean PRs, thoughtful commit messages, and he actually responds to issues. Rare to find someone who treats side projects with this level of professionalism.",
    name: "Diego Martinez",
    role: "Maintainer at OpenAPI Tools",
    avatar: "DM",
    relationship: "Open Source Contributor",
    project: "Open Source Libraries",
    highlighted: false,
  },
  {
    id: 5,
    quote:
      "Brijesh has this rare combination — deep backend knowledge AND frontend finesse. He architected our API, then built the dashboard consuming it. End-to-end ownership that's hard to find.",
    name: "Priya Kapoor",
    role: "Founder at MetricLens",
    avatar: "PK",
    relationship: "Client",
    project: "DevMetrics Dashboard",
    highlighted: false,
  },
  {
    id: 6,
    quote:
      "I've code-reviewed hundreds of developers. Brijesh's NestJS code is some of the cleanest I've seen — proper dependency injection, separation of concerns, and actual error handling. Not just tutorial-level stuff.",
    name: "Michael Torres",
    role: "Senior Architect at CodeBase",
    avatar: "MT",
    relationship: "Manager",
    project: "Enterprise API Suite",
    highlighted: false,
  },
];

const getRelationshipIcon = (relationship: Relationship) => {
  switch (relationship) {
    case "Client":
      return Briefcase;
    case "Colleague":
      return Users;
    case "Manager":
      return Star;
    case "Open Source Contributor":
      return GitBranch;
  }
};

function PinnedTestimonial({ data }: { data: Testimonial }) {
  const Icon = getRelationshipIcon(data.relationship);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-4xl"
    >
      {/* Pulsing Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl md:-inset-2"
      />

      <div className="relative flex flex-col rounded-2xl border border-primary/20 bg-card p-8 shadow-2xl md:p-10">
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 h-full w-1.5 rounded-l-2xl bg-primary" />

        {/* Quote Icon */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mb-4 text-primary/10 md:absolute md:top-8 md:left-8 md:mb-0"
        >
          <Quote className="h-10 w-10 fill-primary/10" />
        </motion.div>

        <p className="font-['DM_Sans'] text-lg leading-relaxed text-foreground italic md:mt-4 md:indent-14 md:text-xl">
          "{data.quote}"
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 border-t border-border/50 pt-6 md:mt-10 md:flex-row md:items-center md:justify-between md:border-0 md:pt-0">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
              <span className="font-['Syne'] text-base font-bold text-primary">
                {data.avatar}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['DM_Sans'] text-base font-medium text-foreground">
                {data.name}
              </span>
              <span className="font-['DM_Sans'] text-sm text-muted-foreground">
                {data.role}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-['DM_Sans'] text-xs font-medium text-primary">
              <Icon className="h-3.5 w-3.5" />
              {data.relationship}
            </div>
            <div className="flex items-center rounded-full bg-secondary px-3 py-1 font-['DM_Sans'] text-xs font-medium text-secondary-foreground">
              {data.project}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const pinnedTestimonial = testimonials.find((t) => t.highlighted)!;
  const carouselTestimonials = testimonials.filter((t) => !t.highlighted);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const stopAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) {
      autoplay.stop();
      setIsHovered(true);
    }
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) {
      autoplay.play();
      setIsHovered(false);
    }
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="relative w-full border-t border-border bg-background py-24 md:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center md:mb-24"
        >
          <span className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            TESTIMONIALS
          </span>
          <h2 className="mb-4 font-['Syne'] text-3xl font-bold text-foreground md:text-5xl">
            What People Say
          </h2>
          <p className="font-['DM_Sans'] text-base text-muted-foreground md:text-lg">
            Not my words — theirs.
          </p>
        </motion.div>

        {/* Pinned Testimonial */}
        <PinnedTestimonial data={pinnedTestimonial} />

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-20 w-full md:mt-24"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Fade Edges */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 hidden h-full w-12 bg-linear-to-r from-background to-transparent md:block lg:w-24" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 hidden h-full w-12 bg-linear-to-l from-background to-transparent md:block lg:w-24" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {carouselTestimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.id}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lg">
                      <div>
                        <Quote className="mb-4 h-5 w-5 fill-primary/20 text-primary/20" />
                        <p className="line-clamp-5 font-['DM_Sans'] text-sm leading-relaxed text-foreground md:text-base">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      <div className="mt-8 flex flex-col gap-4 border-t border-border/50 pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <span className="font-['Syne'] text-sm font-bold text-primary">
                              {testimonial.avatar}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-['DM_Sans'] text-sm font-medium text-foreground">
                              {testimonial.name}
                            </span>
                            <span className="font-['DM_Sans'] text-xs text-muted-foreground">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center self-start rounded-full bg-primary/10 px-2.5 py-1">
                          <span className="font-['DM_Sans'] text-[10px] font-semibold tracking-wide text-primary uppercase">
                            {testimonial.relationship}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between px-2 md:px-6">
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Scroll to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar synced to autoplay timer */}
          <div className="mx-auto mt-8 h-0.5 w-full max-w-md overflow-hidden rounded-full bg-border">
            <motion.div
              key={selectedIndex}
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "var(--current-width)" : "100%" }}
              transition={{
                duration: 4,
                ease: "linear",
              }}
              className="h-full bg-primary/40"
              onUpdate={(latest) => {
                if (typeof document !== "undefined") {
                  document.documentElement.style.setProperty(
                    "--current-width",
                    latest.width as string
                  );
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
