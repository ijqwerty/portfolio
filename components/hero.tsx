import Image from "next/image"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"

const resumeHref = encodeURI(profile.resumeHref)
const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground decoration-highlight underline-offset-4 transition-colors hover:text-foreground hover:underline"

export function Hero() {
  return (
    <section aria-label="Introduction" className="py-10 sm:py-14 lg:py-20">
      <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,1fr)_12.5rem] sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-8">
          <div className="hero-reveal hero-reveal-1 mb-5 flex items-center gap-4">
            <div className="hero-portrait relative size-16 shrink-0 overflow-hidden rounded-full sm:hidden">
              {/* Positions the 4:5 image so the face fills the circle. */}
              <span className="absolute -left-3 -top-[13px] h-[110px] w-[88px]">
                <Image
                  src="/avatar.jpg"
                  alt=""
                  fill
                  sizes="88px"
                  className="object-cover mix-blend-multiply"
                />
              </span>
            </div>
            <p className="eyebrow flex flex-col gap-1 sm:flex-row sm:gap-2">
              <span>{profile.title}</span>
              <span aria-hidden className="hidden sm:inline">
                ·
              </span>
              <span>{profile.location}</span>
            </p>
          </div>

          <h1 className="hero-reveal hero-reveal-2 mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {profile.name}
          </h1>

          <div className="hero-reveal hero-reveal-3 mb-8 max-w-2xl space-y-3">
            <p className="text-lg font-medium text-foreground md:text-xl">
              {profile.specialization}
            </p>
            <p className="text-base leading-relaxed text-body md:text-[1.0625rem]">
              {profile.positioning}
            </p>
          </div>

          <div className="hero-reveal hero-reveal-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="hero-cta min-h-11 w-full sm:w-auto">
              <a href="#work">
                View selected work
                <ArrowDown className="size-4" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hero-resume min-h-11 w-full sm:w-auto">
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                Resume
                <span className="sr-only"> (PDF, opens in a new tab)</span>
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>

          <ul
            className="hero-reveal hero-reveal-5 mt-5 flex flex-wrap items-center gap-x-6 gap-y-1"
            aria-label="Profiles and contact"
          >
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Github className="size-4" aria-hidden />
                GitHub
                <span className="sr-only"> profile (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Linkedin className="size-4" aria-hidden />
                LinkedIn
                <span className="sr-only"> profile (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <Mail className="size-4" aria-hidden />
                Email
                <span className="sr-only"> {profile.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-reveal hero-reveal-2 hidden w-full sm:block lg:col-span-4 lg:max-w-[17.5rem] lg:justify-self-end">
          <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-2xl">
            {/* Scaled from near the top so the white band below the shirt is clipped. */}
            <Image
              src="/avatar.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 280px, 200px"
              className="origin-[50%_10%] scale-[1.2] object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
