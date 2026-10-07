import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CaseStudies from "@/components/case-studies";
import { About, Skills, Experience, Contact, Footer } from "@/components/sections";
import { Reveal, Thinking, Metrics, ProductData, TechFlow, Questions } from "@/components/motion-sections";
export default function Page() {
  return (<main><Navbar /><Hero /><Reveal><About /></Reveal><CaseStudies /><Thinking /><Metrics /><ProductData /><TechFlow /><Questions />
    <Reveal><Skills /></Reveal><Reveal><Experience /></Reveal><Reveal><Contact /></Reveal><Footer /></main>);
}
