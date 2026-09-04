import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { StackMastery } from "@/components/stack-mastery"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { profile } from "@/lib/portfolio-data"

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
      <main id="main" className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Hero />
          <div className="space-y-20 md:space-y-24">
            <Experience />
            <StackMastery />
            <Projects />
            {/* <Education /> */}
            <Contact />
          </div>
        </div>
      </main>
      <footer className="border-t border-border/60 py-8">
        <p className="mx-auto max-w-4xl px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  )
}
