import { Linkedin, Mail, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900/5 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                Contact
              </h2>

              <h3 className="text-5xl leading-tight font-extrabold text-white">
                Let’s Build Scalable Systems Together
              </h3>

              <p className="text-lg leading-relaxed text-slate-400">
                I’m a backend-focused full-stack engineer open to full-time
                roles, internships, and freelance opportunities. If you're
                building APIs, developer tools, or scalable systems — let’s
                connect.
              </p>

              {/* 🔥 Hiring Signals */}
              <div className="space-y-3 text-sm text-slate-400">
                <p>
                  <span className="me-2 rounded-full text-cyan-500">✔</span>{" "}
                  Open to full-time & freelance work
                </p>
                <p>
                  <span className="me-2 rounded-full text-cyan-500">✔</span>{" "}
                  Backend & API-focused roles preferred
                </p>
                <p>
                  <span className="me-2 rounded-full text-cyan-500">✔</span>
                  Usually respond within 24 hours
                </p>
              </div>
            </div>

            {/* CONTACT LINKS */}
            <div className="space-y-6">
              {/* EMAIL */}
              <div className="group flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:brijeshio@duck.com"
                    className="text-lg font-bold text-white transition-colors hover:text-cyan-400"
                  >
                    brijeshio@duck.com
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="group flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/brijeshdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white transition-colors hover:text-cyan-400"
                  >
                    linkedin.com/in/brijeshdev
                  </a>
                </div>
              </div>

              {/* 🔥 GITHUB (IMPORTANT) */}
              <div className="group flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <Github size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/brijeshdevio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white transition-colors hover:text-cyan-400"
                  >
                    github.com/brijeshdevio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative h-fit rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project, idea, or role..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                ></textarea>
              </div>

              {/* 🔥 STRONG CTA */}
              <button className="w-full rounded-xl bg-cyan-600 py-4 font-bold text-white shadow-lg shadow-cyan-900/20 transition-all hover:bg-cyan-500 active:scale-[0.98]">
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
