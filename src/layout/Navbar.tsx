import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${scrolled ? "border-b border-slate-800 bg-slate-900/95" : "border-transparent bg-transparent"} fixed top-0 z-50 w-full py-3 transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 font-bold text-slate-900 transition-transform group-hover:rotate-6">
            B
          </div>
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            Brijesh
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-1 text-sm font-medium transition-all duration-200 ${activeSection === item.href.substring(1) ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"}`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="animate-in fade-in slide-in-from-left-1 absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-cyan-500 duration-300"></span>
              )}
            </a>
          ))}
          <button className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/20 transition-all hover:bg-cyan-500 active:scale-95">
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-slate-950/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-xl font-bold transition-colors ${activeSection === item.href.substring(1) ? "text-cyan-400" : "text-slate-200 hover:text-cyan-400"}`}
          >
            {item.label}
          </a>
        ))}
        <button className="rounded-full bg-cyan-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cyan-900/40 transition-all hover:bg-cyan-500">
          Download Resume
        </button>
      </div>
    </nav>
  );
}
