export default function Logo() {
  return (
    <a
      href="#hero"
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="font-['Syne'] text-2xl font-bold text-foreground">
        Brijesh<span className="text-primary">.</span>
      </div>
    </a>
  );
}
