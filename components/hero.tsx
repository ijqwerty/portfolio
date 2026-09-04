import type { CSSProperties } from "react"
import Image from "next/image"
import {
  siCss,
  siHtml5,
  siJavascript,
  siPostgresql,
  siReact,
  type SimpleIcon,
} from "simple-icons"
import { ArrowDown, Download, Mail } from "lucide-react"
import { heroTechs, profile } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const iconMap: Record<string, SimpleIcon> = {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siPostgresql,
}

function resolveBrand(hex: string): string {
  const value = hex.replace("#", "").toLowerCase()
  if (value === "000" || value === "000000" || value === "fff" || value === "ffffff") {
    return "var(--foreground)"
  }
  return `#${hex}`
}

/** Arc positions around the avatar — inspired by the reference composition */
const iconPositions = [
  "hero-tech-pos-1",
  "hero-tech-pos-2",
  "hero-tech-pos-3",
  "hero-tech-pos-4",
  "hero-tech-pos-5",
] as const

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="hero-section relative flex flex-col justify-center py-10 md:min-h-[calc(50svh-3.5rem)] md:py-14"
    >
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8">
        <div className="hero-copy">
          <p className="hero-reveal hero-reveal-1 mb-3 text-base text-muted-foreground md:text-3xl">
            Hi, I&apos;m{" "}
            <span className="font-medium text-foreground">{profile.nickname}</span>
          </p>

          <h1 className="hero-reveal hero-reveal-2 mb-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
            {profile.title}
          </h1>

          <p className="hero-reveal hero-reveal-3 mb-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
            {profile.heroIntro}
          </p>

          <div className="hero-reveal hero-reveal-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="hero-cta w-full min-h-11 sm:w-auto">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" aria-hidden />
                Get in Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hero-resume w-full min-h-11 sm:w-auto">
              <a
                href={encodeURI(profile.resumeHref)}
                download={profile.resumeHref.split("/").pop()}
              >
                <Download className="size-4" aria-hidden />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-2 flex justify-center md:justify-end">
          <div className="hero-visual relative aspect-square w-[min(100%,16rem)] sm:w-[min(100%,18rem)] md:w-[min(100%,19rem)]">
            {/* <ul className="contents" aria-label="Featured technologies">
              {heroTechs.map((tech, index) => {
                const icon = tech.icon ? iconMap[tech.icon] : null
                const brand = icon ? resolveBrand(icon.hex) : "var(--foreground)"

                return (
                  <li
                    key={tech.name}
                    className={cn(
                      "hero-tech absolute z-10",
                      iconPositions[index],
                      `hero-tech-delay-${index + 1}`
                    )}
                    style={{ "--brand": brand } as CSSProperties}
                  >
                    <span className="hero-tech-chip flex size-10 items-center justify-center rounded-xl border border-border/80 bg-background/90 shadow-sm backdrop-blur-sm sm:size-11">
                      {icon ? (
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          aria-hidden
                          className="size-5 fill-[var(--brand)] sm:size-[1.35rem]"
                        >
                          <path d={icon.path} />
                        </svg>
                      ) : null}
                      <span className="sr-only">{tech.name}</span>
                    </span>
                  </li>
                )
              })}
            </ul> */}

            <div className="hero-avatar absolute inset-0 overflow-hidden rounded-[2rem] bg-secondary/50 sm:rounded-[2.25rem]">
              <Image
                src="/avatar.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 768px) 288px, 352px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero-reveal hero-reveal-5 mt-10 flex justify-center md:mt-14">
        <a
          href="#experience"
          className="hero-scroll group inline-flex flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to experience"
        >
          <span className="text-[0.6875rem] font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown
            className="hero-scroll-icon size-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden
          />
        </a>
      </div> */}
    </section>
  )
}
