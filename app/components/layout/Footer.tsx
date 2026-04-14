export function Footer() {
  return (
    <footer className="border-t border-brand-border py-6">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
        <span className="text-[#444] text-[13px]">
          © {new Date().getFullYear()} Brijesh. All rights reserved
        </span>
        <span className="font-mono text-[13px] text-[#444]">brijeshdev.in</span>
      </div>
    </footer>
  );
}
