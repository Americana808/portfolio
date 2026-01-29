import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-sm font-semibold hover:opacity-80">
          Marco Portillo
        </a>

        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">projects</a>
          <a href="/resume.pdf" className="hover:underline">resume</a>
          <a href="#contact" className="hover:underline">contact</a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
