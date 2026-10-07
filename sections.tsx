import { skills, experience, site } from "@/data/content";
const wrap = "mx-auto max-w-6xl px-5 py-24";
const h2 = "text-3xl font-semibold tracking-tight sm:text-4xl";
const card = "rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6";
export function About() {
  return (<section id="about" className={wrap}><h2 className={h2}>A little about me</h2>
    <p className="mt-4 max-w-2xl text-[var(--muted)]">I'm a product professional who enjoys figuring out why something isn't working before jumping into how to fix it. My background combines an MBA in Business Analytics & Supply Chain Management with experience across product, customer-facing work, operations, and analytics. At TeachEdison, I worked on AI-powered education products and learned how much product quality depends on understanding the user, defining the right problem, and working closely with design and engineering. I'm particularly interested in AI products, education technology, and products that simplify complex workflows for users.</p></section>);
}
export function Skills() {
  return (<section id="skills" className={wrap}><h2 className={h2}>Skills</h2>
    <div className="mt-10 grid gap-4 md:grid-cols-3">{Object.entries(skills).map(([k, v]) => (<div key={k} className={card}><h3 className="font-semibold">{k}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">{v.map(s => <li key={s} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--text)]">{s}</li>)}</ul></div>))}</div></section>);
}
export function Experience() {
  return (<section id="experience" className={wrap}><h2 className={h2}>Experience</h2>
    <ol className="mt-10 space-y-4">{experience.map(e => (<li key={e.org + e.role} className={card}>
      <p className="text-xs text-[var(--muted)]">{e.dates}</p><h3 className="mt-1 font-semibold">{e.role} · {e.org}</h3>
      <p className="mt-3 text-sm text-[var(--muted)]"><b className="text-[var(--soft)]">Scope:</b> {e.worked}</p>
      <p className="mt-1 text-sm text-[var(--muted)]"><b className="text-[var(--soft)]">Learned:</b> {e.learned}</p>
      {e.impact && <p className="mt-1 text-sm text-[var(--muted)]"><b className="text-[var(--soft)]">Impact:</b> {e.impact}</p>}</li>))}</ol>
    {site.resume && <a href={site.resume} className="mt-8 inline-block rounded-full bg-[var(--soft)] px-5 py-2.5 text-sm font-medium text-[var(--bg)]">Download Resume</a>}</section>);
}
export function Contact() {
  return (<section id="contact" className={wrap}><h2 className={h2}>Let's build something useful.</h2>
    <p className="mt-4 max-w-xl text-[var(--muted)]">I'm open to Product Manager, Associate Product Manager, and product-focused opportunities where I can solve meaningful user problems and help turn ideas into useful products.</p>
    <div className="mt-6 flex flex-wrap gap-3 text-sm">
      <a className="rounded-full bg-[var(--soft)] px-5 py-2.5 font-medium text-[var(--bg)]" href={`mailto:${site.email}`}>Get in touch →</a>
      {site.linkedin && <a className="rounded-full border border-[var(--line)] px-5 py-2.5" href={site.linkedin}>LinkedIn</a>}
      {site.github && <a className="rounded-full border border-[var(--line)] px-5 py-2.5" href={site.github}>GitHub</a>}</div></section>);
}
export function Footer() {
  return (<footer className="border-t border-[var(--line)] px-5 py-10 text-center text-sm text-[var(--muted)]">{site.name} · Product Management · AI Products · Customer-Centered Thinking<br />Product thinking · Data · Technology · © 2026</footer>);
}
