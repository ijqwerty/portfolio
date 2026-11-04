import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { StackMastery } from "@/components/stack-mastery"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ArrowUp } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const footerLinkClass =
  "inline-flex min-h-11 items-center gap-1 rounded-sm text-xs text-muted-foreground decoration-highlight underline-offset-4 transition-colors hover:text-foreground hover:underline"

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="scroll-mt-14 pb-20 md:pb-28">
        <div className="page-container">
          <Hero />
          <div className="space-y-22 md:space-y-32">
            <Projects />
            <Experience />
            <StackMastery />
            <Contact />
          </div>
        </div>
      </main>
      <footer className="border-t border-border/60 py-6">
        <div className="page-container flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5" aria-label="Footer links">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                GitHub
                <span className="sr-only"> profile (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                LinkedIn
                <span className="sr-only"> profile (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className={footerLinkClass}>
                Email
                <span className="sr-only"> {profile.email}</span>
              </a>
            </li>
            <li>
              <a href="#main" className={footerLinkClass}>
                Back to top
                <ArrowUp className="size-3.5" aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
