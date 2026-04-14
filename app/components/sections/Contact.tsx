import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SectionLabel } from "../shared/SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Top green line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(16,185,129,0.6), transparent)",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-[rgba(16,185,129,0.05)] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 text-center relative">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-5xl font-bold text-brand-white leading-[1.2] mt-3 m-0">
          Have something to build?
          <br />
          {`Let's`} talk.
        </h2>
        <p className="text-brand-gray text-base mt-4 mx-auto mb-0 max-w-[440px] leading-[1.7]">
          {` I'm`} currently available for freelance projects and internships. I
          respond within 24 hours.
        </p>

        <div className="mt-10">
          <a
            href="mailto:brijeshio@duck.com"
            className="text-[22px] font-semibold text-brand-white no-underline border-b border-transparent pb-0.5 transition-colors duration-200 hover:border-brand-white"
          >
            brijeshio@duck.com
          </a>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {[
            {
              icon: <BsGithub size={20} />,
              label: "GitHub",
              url: "https://github.com/brijeshdevio",
            },
            {
              icon: <BsLinkedin size={20} />,
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/brijeshsoftdev",
            },
            {
              icon: <BsTwitterX size={20} />,
              label: "Twitter",
              url: "https://x.com/brijeshgpdev",
            },
          ].map((s) => (
            <a
              href={s.url}
              key={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                key={s.label}
                aria-label={s.label}
                className="w-12 h-12 rounded-xl border border-brand-border bg-brand-card flex items-center justify-center text-brand-gray cursor-pointer transition-all duration-200 hover:text-brand-green2 hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              >
                {s.icon}
              </button>
            </a>
          ))}
        </div>

        <p className="text-[#444] text-xs mt-10 font-mono">
          Based in India · Open to remote work globally
        </p>
      </div>
    </section>
  );
}
