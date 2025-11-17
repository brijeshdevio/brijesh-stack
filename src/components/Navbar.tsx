import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full bg-secondary p-3 border-b">
      <div className="w-full sm:w-[90%] mx-auto">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <Terminal size={25} className="text-primary" />
          <span className="font-bricolage-grotesque">BrijeshStack</span>
        </a>
      </div>
    </nav>
  );
}
