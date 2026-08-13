import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Logo from "@/assets/Logo";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "How I Work", href: "#how-i-work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const serviceItems = [
  "Backend Architecture",
  "API Development",
  "SaaS Product Building",
  "Database Design",
  "Frontend Engineering",
  "DevOps & Deployment",
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/brijeshdevio" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/brijeshsoftdev",
  },
  { icon: Mail, href: "mailto:brijeshio@duck.com" },
];

export default function FooterLayout() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-border bg-card pt-16 pb-6 md:pt-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 - Brand (spans 4/12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:col-span-4"
          >
            <Logo />
            <p className="mt-4 max-w-sm font-['DM_Sans'] text-sm leading-relaxed text-muted-foreground">
              Full-stack engineer building production-ready SaaS and APIs.
            </p>
            <p className="mt-2 max-w-sm font-['DM_Sans'] text-xs leading-relaxed text-muted-foreground">
              I specialize in robust backends, scalable databases, and seamless
              frontend that deliver real business value.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 font-['DM_Sans'] text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>Lucknow, India</span>
            </div>
          </motion.div>

          {/* Column 2 - Navigation (spans 2/12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col lg:col-span-2"
          >
            <h4 className="font-['DM_Sans'] text-sm font-semibold tracking-wider text-foreground uppercase">
              Navigation
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="group flex w-fit items-center font-['DM_Sans'] text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="mr-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    &rarr;
                  </span>
                  <span className="-ml-4 transition-all group-hover:ml-0">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Services (spans 3/12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col lg:col-span-3"
          >
            <h4 className="font-['DM_Sans'] text-sm font-semibold tracking-wider text-foreground uppercase">
              What I Do
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              {serviceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 font-['DM_Sans'] text-sm text-muted-foreground"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 4 - CTA (spans 3/12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col lg:col-span-3"
          >
            <h4 className="font-['DM_Sans'] text-sm font-semibold tracking-wider text-foreground uppercase">
              Let's Work Together
            </h4>
            <p className="mt-6 font-['DM_Sans'] text-sm leading-relaxed text-muted-foreground">
              Have a project in mind? Let's build something great.
            </p>

            <motion.button
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              onClick={scrollToContact}
              className="mt-6 w-full rounded-md bg-primary px-4 py-2 font-['DM_Sans'] text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 md:w-auto md:self-start"
            >
              Get in Touch
            </motion.button>

            <div className="mt-6 flex items-center gap-2">
              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-full w-full rounded-full bg-primary" />
                <span className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              </div>
              <span className="font-['DM_Sans'] text-xs text-muted-foreground">
                Available for new projects
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row md:gap-0"
        >
          <div className="order-2 font-['DM_Sans'] text-xs text-muted-foreground md:order-1">
            © {new Date().getUTCFullYear()} Brijesh Kumar. All rights reserved.
          </div>

          <div className="order-3 font-['DM_Sans'] text-xs text-muted-foreground md:order-2">
            Built with TypeScript, Tailwind & caffeine ☕
          </div>

          <div className="order-1 flex items-center gap-4 font-['DM_Sans'] text-xs text-muted-foreground md:order-3">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>

          {/* Integrated Back to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="absolute -top-5 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary md:-top-5 md:right-0"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
