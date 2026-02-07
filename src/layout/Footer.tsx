import { ShieldCheck, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-bold text-slate-900">
              B
            </div>
            <div>
              <span className="block text-xl font-bold text-white">
                Brijesh
              </span>
              <span className="text-xs text-slate-500">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Email
            </a>
            <button className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-700">
              Resume
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 border-t border-slate-900 pt-12 text-sm text-slate-500 md:flex-row md:space-y-0">
          <p>© 2026 Brijesh. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <ShieldCheck size={14} className="mr-1.5" /> Secure Design
            </span>
            <span className="flex items-center">
              <Terminal size={14} className="mr-1.5" /> High Performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
