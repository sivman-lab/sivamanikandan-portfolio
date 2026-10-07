"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { studies, type Study } from "@/data/content";
export default function CaseStudies() {
  const [active, setActive] = useState<Study | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null); const trigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden"; closeRef.current?.focus();
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; removeEventListener("keydown", k); trigger.current?.focus(); };
  }, [active]);
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Product Work</h2>
      <p className="mt-3 text-[var(--muted)]">A few examples of how I approach product problems, from real product work to product concepts.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {studies.map(s => (
          <motion.button key={s.id} layoutId={`card-${s.id}`} onClick={e => { trigger.current = e.currentTarget; setActive(s); }}
            whileHover={{ y: -3 }} className="group rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 text-left hover:border-[var(--accent)]/60 transition-colors">
            <p className="text-xs uppercase tracking-wide text-[var(--atext)]">{s.category}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.blurb}</p>
            <p className="mt-6 flex items-center gap-1 text-sm text-[var(--text)]">Read case study <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></p>
          </motion.button>))}
      </div>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 flex items-stretch justify-center p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={active.title}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="absolute inset-0 bg-black/70 backdrop-blur-md" />
            <motion.div layoutId={`card-${active.id}`} className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden border border-[var(--line)] bg-[var(--card)] sm:max-h-[85vh] sm:rounded-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] p-6">
                <div><p className="text-xs uppercase tracking-wide text-[var(--atext)]">{active.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{active.title}</h3></div>
                <button ref={closeRef} onClick={() => setActive(null)} aria-label="Close case study" className="rounded-full border border-[var(--line)] p-2 hover:bg-[var(--card)]"><X size={18} /></button>
              </div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="overflow-y-auto p-6">
                {active.sections.map(([h, b]) => (<div key={h} className="mb-6"><h4 className="text-sm font-medium text-[var(--soft)]">{h}</h4><p className="mt-1 text-[var(--muted)]">{b}</p></div>))}
                <p className="text-xs text-[var(--muted)]">Tools: {active.tools.join(", ")} · Outcome: {active.outcome}</p>
              </motion.div>
            </motion.div>
          </div>)}
      </AnimatePresence>
    </section>
  );
}
