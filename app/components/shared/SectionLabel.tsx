export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-2">
      <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-brand-green2 uppercase">
        {children}
      </span>
    </div>
  );
}
