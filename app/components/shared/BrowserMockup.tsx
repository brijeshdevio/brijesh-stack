import { Globe } from "lucide-react";
import { PROJECTS } from "@/app/lib/constants";

type ProjectType = (typeof PROJECTS)[0];

export function BrowserMockup({ project: p }: { project: ProjectType }) {
  return (
    <div className="rounded-xl border border-brand-border bg-brand-card overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
      {/* Bar */}
      <div className="flex items-center gap-2 py-[10px] px-3 border-b border-brand-border bg-[#0d0d0d]">
        <span className="w-2.5 h-2.5 rounded-full bg-[rgba(239,68,68,0.6)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgba(234,179,8,0.6)]" />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: p.dot }}
        />
        <div className="flex-1 mx-3 bg-[#1a1a1a] rounded-md py-1 px-2.5 flex items-center gap-2">
          <Globe size={12} color="#444" />
          <span className="text-[12px] text-[#444] font-mono">
            {p.name.toLowerCase()}.vercel.app
          </span>
        </div>
      </div>
      {/* Screen */}
      <div
        className="h-[176px] flex items-center justify-center p-4"
        style={{ background: `linear-gradient(135deg, ${p.grad})` }}
      >
        <div className="text-center">
          <div className="text-[36px] font-bold text-[rgba(255,255,255,0.07)] font-mono">
            {p.name}
          </div>
          <div className="flex gap-1.5 justify-center mt-2">
            {[40, 60, 48].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)]"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
