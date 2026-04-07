import Image from "next/image";
import { SectionLabel } from "../shared/SectionLabel";
import aboutPic from "../../../public/brijesh.png";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionLabel>About Me</SectionLabel>
        <div className="w-10 h-0.5 bg-brand-green mx-auto mt-3 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full max-w-[380px] mx-auto aspect-square rounded-[20px] overflow-hidden border border-[rgba(16,185,129,0.2)] shadow-[0_0_60px_rgba(16,185,129,0.06)]">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a, #111, #0d0d0d)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={aboutPic}
                  alt="brijesh"
                  width={380}
                  height={380}
                  className="grayscale-100 hover:grayscale-0 transition-all duration-500 scale-95 rounded-xl hover:scale-100"
                />
              </div>
            </div>
            {/* Dot grid */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #10b981 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[32px] font-bold text-brand-white m-0">
              The person behind the code
            </h2>
            <p className="text-brand-white text-base leading-[1.75] m-0">
              I'm Brijesh, a CS student who stopped waiting to graduate before
              building real things. I've shipped 4 live projects — tools people
              actually use — and I'm just getting started.
            </p>
            <p className="text-brand-gray2 text-[15px] leading-[1.75] m-0">
              My stack is React, Node.js, TypeScript, Prisma, and PostgreSQL. I
              care about clean architecture, type safety, and writing code that
              the next developer won't hate.
            </p>
            <p className="text-brand-gray2 text-[15px] leading-[1.75] m-0">
              When I'm not coding I'm learning system design, contributing to
              open source, or helping other students debug their first Node.js
              server at 2am.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Based in India 🇮🇳", "CS Student + Freelancer"].map((b) => (
                <span
                  key={b}
                  className="py-[7px] px-3.5 rounded-full border border-brand-border bg-brand-card text-sm text-brand-gray2"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
