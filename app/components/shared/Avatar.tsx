export function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-[40px] h-[40px] rounded-full bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.35)] flex items-center justify-center shrink-0">
      <span className="text-[12px] font-bold text-brand-green2">
        {initials}
      </span>
    </div>
  );
}
