import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Providers } from "@/components/motion-sections";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sivamanikandan R — Associate Product Manager",
  description: "Portfolio of Sivamanikandan R, an Associate Product Manager focused on AI products, product strategy, customer insights, and user-centered product development.",
  openGraph: { title: "Sivamanikandan R — Associate Product Manager", description: "Product thinking, analytics, experimentation, technology.", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={GeistSans.className}><body><Providers>{children}</Providers></body></html>;
}
