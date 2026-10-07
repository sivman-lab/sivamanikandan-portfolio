"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { LoopDiagram } from "@/components/motion-sections";
import { site } from "@/data/content";
export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-36 lg:grid-cols-2 lg:items-center">
      <div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-sm text-[var(--atext)]">Associate Product Manager · AI Products · Product Strategy</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Building better products starts with asking better questions.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-6 max-w-lg text-[var(--muted)]">
          I'm {site.name}, a product professional with hands-on experience building and improving AI-powered education products. I like starting with the problem, understanding the user, and then working with design and engineering to turn insights into simple, useful solutions.</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .24 }} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[var(--soft)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:bg-white">Explore my work <ArrowRight size={16} /></a>
          {site.resume && <a href={site.resume} className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm hover:bg-[var(--card)]">View resume</a>}
          <a href="#contact" className="text-sm text-[var(--muted)] hover:text-white">Let's talk →</a>
        </motion.div>
      </div>
      <LoopDiagram />
    </section>
  );
}
