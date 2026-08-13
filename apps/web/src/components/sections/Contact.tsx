import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Lock,
  Clock,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_: ContactFormData) => {
    setFormStatus("submitting");
    try {
      // Simulate network request. Replace with real endpoint (e.g., Formspree, Web3Forms)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        reset();
      }, 3000);
    } catch {
      setFormStatus("error");
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "brijeshio@duck.com",
      subtitle: "Send me an email",
      delay: 0.1,
    },
    {
      icon: MapPin,
      title: "Lucknow, India",
      subtitle: "Available remotely worldwide",
      delay: 0.2,
    },
    {
      icon: () => (
        <div className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute h-3 w-3 rounded-full bg-primary" />
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary opacity-75" />
        </div>
      ),
      title: "Open to opportunities",
      subtitle: "Full-time & freelance",
      delay: 0.3,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/brijeshdevio", delay: 0.4 },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/brijeshsoftdev",
      delay: 0.45,
    },
    { icon: Mail, href: "mailto:brijeshio@duck.com", delay: 0.55 },
  ];

  return (
    <section
      id="contact"
      className="relative w-full border-t border-border bg-background pt-24 pb-12 md:pt-32"
    >
      {/* Optional faint diagonal grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center md:mb-24"
        >
          <span className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            CONTACT
          </span>
          <h2 className="mb-4 font-['Syne'] text-3xl font-bold text-foreground md:text-5xl">
            Let's Build Something
          </h2>
          <p className="max-w-2xl font-['DM_Sans'] text-base text-muted-foreground md:text-lg">
            Whether it's a project, collaboration, or just a tech chat — my
            inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="mb-4 font-['Syne'] text-2xl font-bold text-foreground md:text-3xl">
              Get in Touch
            </h3>
            <p className="mb-10 font-['DM_Sans'] text-base leading-relaxed text-muted-foreground">
              I'm always interested in hearing about new projects and
              opportunities. Drop me a line and I'll get back to you as soon as
              I can.
            </p>

            <div className="flex flex-col gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: method.delay, duration: 0.4 }}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['DM_Sans'] text-sm font-medium text-foreground">
                      {method.title}
                    </span>
                    <span className="font-['DM_Sans'] text-xs text-muted-foreground">
                      {method.subtitle}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: social.delay, duration: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:scale-110 hover:border-primary/30 hover:text-primary hover:shadow-md"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-4 flex w-fit items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary"
              >
                <Clock className="h-4 w-4" />
                <span className="font-['DM_Sans'] text-xs font-semibold tracking-wide uppercase">
                  Typically responds within 24 hours
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-xl md:p-8 lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-xl">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="font-['DM_Sans'] text-sm font-medium text-foreground">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("name")}
                    disabled={formStatus === "submitting"}
                    placeholder="Your name"
                    className={`flex h-11 w-full rounded-md border bg-background px-3 py-2 font-['DM_Sans'] text-sm text-foreground transition-colors focus:ring-2 focus:ring-primary/20 focus:outline-none ${
                      errors.name ? "border-red-400" : "border-border"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                  {errors.name && (
                    <span className="font-['DM_Sans'] text-xs text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['DM_Sans'] text-sm font-medium text-foreground">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("email")}
                    disabled={formStatus === "submitting"}
                    type="email"
                    placeholder="your@email.com"
                    className={`flex h-11 w-full rounded-md border bg-background px-3 py-2 font-['DM_Sans'] text-sm text-foreground transition-colors focus:ring-2 focus:ring-primary/20 focus:outline-none ${
                      errors.email ? "border-red-400" : "border-border"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  />
                  {errors.email && (
                    <span className="font-['DM_Sans'] text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['DM_Sans'] text-sm font-medium text-foreground">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  {...register("subject")}
                  disabled={formStatus === "submitting"}
                  placeholder="What's this about?"
                  className={`flex h-11 w-full rounded-md border bg-background px-3 py-2 font-['DM_Sans'] text-sm transition-colors placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none ${
                    errors.subject ? "border-red-400" : "border-border"
                  } disabled:cursor-not-allowed disabled:opacity-50`}
                />
                {errors.subject && (
                  <span className="font-['DM_Sans'] text-xs text-red-400">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['DM_Sans'] text-sm font-medium text-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  {...register("message")}
                  disabled={formStatus === "submitting"}
                  rows={5}
                  placeholder="Tell me about your project, idea, or question..."
                  className={`flex w-full resize-none rounded-md border bg-background px-3 py-3 font-['DM_Sans'] text-sm text-foreground transition-colors focus:ring-2 focus:ring-primary/20 focus:outline-none ${
                    errors.message ? "border-red-400" : "border-border"
                  } disabled:cursor-not-allowed disabled:opacity-50`}
                />
                {errors.message && (
                  <span className="font-['DM_Sans'] text-xs text-red-400">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Status Messages */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-md bg-green-500/10 px-4 py-3 text-green-500"
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span className="font-['DM_Sans'] text-sm font-medium">
                    Thanks for reaching out! I'll get back to you within 24
                    hours.
                  </span>
                </motion.div>
              )}

              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-md bg-red-500/10 px-4 py-3 text-red-500"
                >
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span className="font-['DM_Sans'] text-sm font-medium">
                    Something went wrong. Please try again or email me directly.
                  </span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={formStatus === "submitting"}
                type="submit"
                className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary font-['DM_Sans'] text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {formStatus === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              <div className="mt-2 flex items-center justify-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-['DM_Sans'] text-xs text-muted-foreground">
                  Your info won't be shared. I respect your privacy.
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
