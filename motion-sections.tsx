"use client";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "motion/react";
import { steps, metricLadder, funnel, lenses, arch, questions } from "@/data/content";
const wrap = "mx-auto max-w-6xl px-5 py-24";
const h2 = "text-3xl font-semibold tracking-tight sm:text-4xl";
const card = "rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6";
const ease = [0.22, 1, 0.36, 1] as const;

export function Providers({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll(); const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (<MotionConfig reducedMotion="user"><motion.div aria-hidden style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[var(--accent)]" />{children}</MotionConfig>);
}
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .6, delay, ease }}>{children}</motion.div>;
}
function useCycle(n: number, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setTimeout(() => setI(v => (v + 1) % n), ms); return () => clearTimeout(t); }, [i, n, ms]);
  return [i, setI] as const;
}

const loop = [["Problem", "Is this worth solving?"], ["User", "Who feels it, and how often?"], ["Hypothesis", "If we ___, then ___ because ___"], ["Solution", "What is the smallest thing that tests it?"], ["Experiment", "What would prove us wrong?"], ["Learn", "What do we change next?"]];
export function LoopDiagram() {
  const [a, setA] = useCycle(loop.length, 2200);
  const pos = (i: number, r: number) => { const t = (i / loop.length) * Math.PI * 2 - Math.PI / 2; return [200 + r * Math.cos(t), 200 + r * Math.sin(t)]; };
  const [ax, ay] = pos(a, 135);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" role="img" aria-label="Product loop: problem, user, hypothesis, solution, experiment, learn">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <motion.circle cx="200" cy="200" r="135" fill="none" stroke="var(--soft)" strokeOpacity=".25" strokeDasharray="3 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease }} />
        <motion.circle r="9" fill="var(--accent)" animate={{ cx: ax, cy: ay }} transition={{ type: "spring", stiffness: 70, damping: 14 }} />
        {loop.map(([t], i) => { const [x, y] = pos(i, 135), [lx, ly] = pos(i, 172);
          return (<g key={t} onClick={() => setA(i)} className="cursor-pointer">
            <motion.circle cx={x} cy={y} r="6" fill={i === a ? "var(--accent)" : "var(--green)"} stroke="var(--soft)" strokeOpacity={i === a ? 1 : .4} animate={{ scale: i === a ? 1.5 : 1 }} style={{ transformOrigin: `${x}px ${y}px` }} />
            <text x={lx} y={ly + 4} textAnchor="middle" fontSize="13" fill={i === a ? "var(--soft)" : "var(--muted)"}>{t}</text></g>); })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center px-24 text-center">
        <AnimatePresence mode="wait"><motion.p key={a} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }} className="text-sm text-[var(--text)]">{loop[a][1]}</motion.p></AnimatePresence>
      </div>
    </div>
  );
}

export function Thinking() {
  const [s, setS] = useState(0);
  return (
    <section id="thinking" className={wrap}>
      <Reveal><h2 className={h2}>How I Think About Products</h2><p className="mt-3 text-[var(--muted)]">Pick a stage to see the question I ask and what I produce.</p></Reveal>
      <Reveal className="mt-10 grid gap-4 md:grid-cols-[260px_1fr]">
        <div className="flex gap-2 overflow-x-auto md:flex-col" role="group" aria-label="Product process stages">
          {steps.map(([t], i) => (
            <button key={t} onClick={() => setS(i)} aria-pressed={s === i} className={`relative whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm transition-colors ${s === i ? "text-[var(--bg)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}>
              {s === i && <motion.span layoutId="step-pill" className="absolute inset-0 rounded-xl bg-[var(--soft)]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">{t}</span></button>))}
        </div>
        <div className={`${card} min-h-56`}>
          <AnimatePresence mode="wait"><motion.div key={s} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: .25 }}>
            <h3 className="text-xl font-semibold">{steps[s][0]}</h3>
            <p className="mt-3 text-[var(--text)]">{steps[s][1]}</p>
            <p className="mt-6 text-xs uppercase tracking-wide text-[var(--atext)]">What I produce</p>
            <p className="mt-1 text-[var(--muted)]">{steps[s][2]}</p>
          </motion.div></AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

export function Metrics() {
  return (
    <section className={wrap}>
      <Reveal><h2 className={h2}>I Don't Just Build Features. I Measure Them.</h2><p className="mt-3 text-[var(--muted)]">A generic hierarchy with illustrative examples. The right metrics depend on the product.</p></Reveal>
      <div className="mt-10 space-y-3">
        {metricLadder.map(([t, d], i) => (
          <motion.div key={t} initial={{ opacity: 0, scaleX: .6 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .6, delay: i * .12, ease }}
            style={{ width: `${100 - i * 10}%`, transformOrigin: "left", background: i === 0 ? "var(--green)" : "var(--card)" }} className="rounded-2xl border border-[var(--line)] p-5">
            <h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-[var(--muted)]">{d}</p></motion.div>))}
      </div>
    </section>
  );
}

export function ProductData() {
  return (
    <section id="data" className={wrap}>
      <Reveal><h2 className={h2}>Product + Data</h2><p className="mt-3 text-[var(--muted)]">I use funnels, cohorts, experiments, and user feedback to check whether a product change actually worked.</p></Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal className={card}>
          <p className="text-xs uppercase tracking-wide text-[var(--atext)]">Illustrative product analytics, not real data</p>
          <h3 className="mt-2 font-semibold">Signup funnel</h3>
          <div className="mt-4 space-y-3">{funnel.map(([l, v], i) => (
            <div key={l}><div className="flex justify-between text-xs text-[var(--muted)]"><span>{l}</span><span>{v}%</span></div>
              <div className="mt-1 h-2.5 rounded-full bg-[var(--bg)]"><motion.div className="h-full rounded-full bg-[var(--accent)]" initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * .15, ease }} /></div></div>))}</div>
          <h3 className="mt-8 font-semibold">Retention curve</h3>
          <svg viewBox="0 0 300 90" className="mt-3 w-full" role="img" aria-label="Illustrative retention curve"><motion.path d="M0 8 C 40 50, 80 62, 130 70 S 230 76, 300 78" fill="none" stroke="var(--soft)" strokeWidth="2.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease }} /></svg>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">{lenses.map(([t, q], i) => (
          <Reveal key={t} delay={i * .06} className={`${card} transition-colors hover:border-[var(--accent)]`}><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-[var(--muted)]">{q}</p></Reveal>))}</div>
      </div>
    </section>
  );
}

export function TechFlow() {
  const [a, setA] = useCycle(arch.length, 2300);
  return (
    <section id="technical" className={wrap}>
      <Reveal><h2 className={h2}>Technical Enough to Build With Engineers</h2><p className="mt-3 max-w-2xl text-[var(--muted)]">I'm not an engineer. I understand enough about databases, APIs, and data flows to ask good questions and weigh trade-offs.</p></Reveal>
      <Reveal className="mt-10 grid gap-6 md:grid-cols-2">
        <ol className="relative space-y-2 pl-6">
          <span className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[var(--line)]" aria-hidden />
          <motion.span aria-hidden className="absolute left-[3px] h-2.5 w-2.5 rounded-full bg-[var(--accent)]" animate={{ top: `${a * 16.6 + 2}%` }} transition={{ type: "spring", stiffness: 90, damping: 16 }} />
          {arch.map(([t], i) => (<li key={t}><button onClick={() => setA(i)} aria-pressed={a === i} className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${a === i ? "border-[var(--accent)] bg-[var(--card)] text-[var(--text)]" : "border-[var(--line)] text-[var(--muted)]"}`}>{t}</button></li>))}
        </ol>
        <div className={`${card} flex flex-col justify-center`}>
          <p className="text-xs uppercase tracking-wide text-[var(--atext)]">The PM question at this layer</p>
          <AnimatePresence mode="wait"><motion.p key={a} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-3 text-2xl font-semibold tracking-tight">{arch[a][1]}</motion.p></AnimatePresence>
          <p className="mt-6 text-sm text-[var(--muted)]">Comfortable with: SQL, relational databases, APIs, analytics instrumentation. [CONFIRM each against what you've really done]</p>
        </div>
      </Reveal>
    </section>
  );
}

export function Questions() {
  const [o, setO] = useState<number | null>(null);
  return (
    <section className={wrap}>
      <Reveal><h2 className={h2}>Product Questions I Like Asking</h2></Reveal>
      <div className="mt-8 space-y-3">{questions.map(([q, a], i) => (
        <Reveal key={q} delay={i * .04}><div className={`${card} !p-0 overflow-hidden`}>
          <button onClick={() => setO(o === i ? null : i)} aria-expanded={o === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium"><span>{q}</span>
            <motion.span animate={{ rotate: o === i ? 45 : 0 }} className="text-xl text-[var(--atext)]" aria-hidden>+</motion.span></button>
          <AnimatePresence initial={false}>{o === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3, ease }}>
            <p className="px-5 pb-5 text-[var(--muted)]">{a}</p></motion.div>}</AnimatePresence></div></Reveal>))}</div>
    </section>
  );
}
