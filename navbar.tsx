"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { links, site } from "@/data/content";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 12); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled || open ? "bg-[var(--bg)]/70 backdrop-blur-md border-b border-[var(--line)]" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-semibold tracking-tight">{site.name}</a>
        <ul className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
          {links.map(([l, id]) => <li key={id}><a className="hover:text-white transition-colors" href={`#${id}`}>{l}</a></li>)}
          <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--text)]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Open to APM roles</li>
        </ul>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <ul className="flex flex-col gap-4 px-5 pb-6 text-[var(--text)] lg:hidden">
        {links.map(([l, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>}
    </header>
  );
}
