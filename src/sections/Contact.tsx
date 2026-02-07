import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900/5 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                Get in Touch
              </h2>
              <h3 className="text-5xl leading-tight font-extrabold text-white">
                Let’s Build Something Together
              </h3>
              <p className="text-lg leading-relaxed text-slate-400">
                I am open to full-stack developer opportunities, internships,
                and collaborative projects. If you are interested in my work or
                would like to discuss an opportunity, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex cursor-pointer items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase">
                    Email Me
                  </p>
                  <a
                    href="mailto:brijeshio@duck.com"
                    className="text-lg font-bold text-white transition-colors hover:text-cyan-400"
                  >
                    brijeshio@duck.com
                  </a>
                </div>
              </div>
              <div className="group flex cursor-pointer items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/brijeshdev"
                    className="text-lg font-bold text-white transition-colors hover:text-cyan-400"
                  >
                    linkedin.com/in/brijeshdev
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in relative rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl duration-1000 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                ></textarea>
              </div>
              <button className="w-full rounded-xl bg-cyan-600 py-4 font-bold text-white shadow-lg shadow-cyan-900/20 transition-all hover:bg-cyan-500 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
