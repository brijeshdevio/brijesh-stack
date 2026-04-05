import { C } from "@/app/lib/constants";

export function TerminalVisual({ visible = true }: { visible?: boolean }) {
  const lines = [
    { type: "cmd", text: "node server.js" },
    { type: "out", text: "✓ Server running on :3000" },
    { type: "out", text: "✓ DB connected via Prisma" },
    { type: "cmd", text: "git push origin main" },
    { type: "out", text: "✓ Deployed to Vercel" },
    { type: "cmd", text: "npx ts-node seed.ts" },
    { type: "out", text: "✓ Seeded 24 records" },
    { type: "cursor", text: "" },
  ];
  return (
    <div className="relative w-full max-w-[420px] ml-auto">
      {/* Glow */}
      <div className="absolute -inset-8 bg-[rgba(16,185,129,0.07)] rounded-full blur-[48px] pointer-events-none" />
      {/* Window */}
      <div className="relative rounded-2xl border border-brand-border bg-brand-card overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.6)]">
        {/* Titlebar */}
        <div className="flex items-center gap-2 py-[10px] px-[16px] border-b border-brand-border bg-[#0d0d0d]">
          <span className="w-3 h-3 rounded-full bg-[rgba(239,68,68,0.7)]" />
          <span className="w-3 h-3 rounded-full bg-[rgba(234,179,8,0.7)]" />
          <span className="w-3 h-3 rounded-full bg-[rgba(16,185,129,0.7)]" />
          <span className="ml-3 text-xs text-[#444] font-mono">
            brijesh — zsh
          </span>
        </div>
        {/* Lines */}
        <div className="p-5 font-mono text-[13px] leading-[1.8]">
          {lines.map((l, i) =>
            l.type === "cmd" ? (
              <div key={i} className="flex items-center gap-2">
                <span className="text-brand-green2">❯</span>
                <span className="text-[rgba(255,255,255,0.8)]">{l.text}</span>
              </div>
            ) : l.type === "cursor" ? (
              <div key={i} className="flex items-center gap-2">
                <span className="text-brand-green2">❯</span>
                {visible && (
                  <span className="inline-block w-2 h-4 bg-brand-green2 animate-blink" />
                )}
              </div>
            ) : (
              <div key={i} className="pl-5 text-[rgba(110,231,183,0.6)]">
                {l.text}
              </div>
            ),
          )}
        </div>
      </div>
      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-brand-card border border-brand-border rounded-xl py-2 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <span className="text-xs text-brand-green2 font-mono">TypeScript</span>
        <span className="text-xs text-[#444] ml-1.5">strict: true</span>
      </div>
      <div className="absolute -bottom-4 -left-4 bg-brand-card border border-brand-border rounded-xl py-2 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <span className="text-xs text-brand-green2 font-mono">Prisma</span>
        <span className="text-xs text-[#444] ml-1.5">schema.prisma</span>
      </div>
    </div>
  );
}
