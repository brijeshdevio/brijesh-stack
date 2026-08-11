import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "How I Work", href: "#how-i-work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function NavbarLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const elementsToObserve: Element[] = [];

    NAV_LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
        elementsToObserve.push(element);
      }
    });

    return () => {
      elementsToObserve.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b bg-background/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="group relative flex items-center gap-1 font-['Syne'] text-xl font-bold tracking-tight text-foreground focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-primary transition-transform duration-300 group-hover:-translate-x-1">
            [
          </span>
          Brijesh
          <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
            ]
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative font-['DM_Sans'] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
              {activeSection === link.href && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="font-['DM_Sans'] transition-all duration-300 hover:scale-105">
              Hire Me
            </Button>
          </motion.div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-accent hover:text-accent-foreground"
                aria-label="Open menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-75 flex-col border-l bg-background/95 p-6 shadow-2xl backdrop-blur-xl"
            >
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="text-left font-['Syne'] text-xl font-bold text-foreground">
                  <span className="text-primary">[</span> Brijesh{" "}
                  <span className="text-primary">]</span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-['DM_Sans'] text-lg font-medium transition-colors ${
                      activeSection === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <Button className="w-full py-6 font-['DM_Sans'] text-lg transition-all duration-300 hover:shadow-md hover:shadow-primary/40">
                  Hire Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
