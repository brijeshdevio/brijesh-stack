export function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-mono py-[3px] px-[8px] rounded-md border border-brand-border2 text-brand-gray2 bg-[#0d0d0d]">
      {children}
    </span>
  );
}
