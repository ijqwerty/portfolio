import type { CSSProperties } from "react"
import {
  siAppwrite,
  siCss,
  siDjango,
  siGithub,
  siGraphql,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSanity,
  siShopify,
  siSupabase,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons"
import { Waypoints } from "lucide-react"
import { stackRows, type StackTech } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const iconMap: Record<string, SimpleIcon> = {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siNodedotjs,
  siPython,
  siDjango,
  siPostgresql,
  siGraphql,
  siSupabase,
  siShopify,
  siAppwrite,
  siSanity,
  siGithub,
}

function resolveBrand(hex: string): string {
  const value = hex.replace("#", "").toLowerCase()
  if (value === "000" || value === "000000" || value === "fff" || value === "ffffff") {
    return "var(--foreground)"
  }
  return `#${hex}`
}

function TechCard({ tech }: { tech: StackTech }) {
  const icon = tech.icon ? iconMap[tech.icon] : null
  const brand = icon ? resolveBrand(icon.hex) : "var(--foreground)"

  return (
    <li className="group flex w-[4.25rem] flex-col items-center gap-2 sm:w-[4.75rem]">
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-lg border border-border bg-secondary/40 transition-all duration-300 sm:size-14",
          "group-hover:border-transparent group-hover:bg-card group-hover:shadow-[0_0_0_1px_var(--brand),0_0_16px_-2px_color-mix(in_oklab,var(--brand)_45%,transparent)]"
        )}
        style={{ "--brand": brand } as CSSProperties}
      >
        {icon ? (
          <svg
            role="img"
            viewBox="0 0 24 24"
            aria-hidden
            className="size-5 fill-muted-foreground transition-[fill] duration-300 group-hover:fill-[var(--brand)] sm:size-6"
          >
            <path d={icon.path} />
          </svg>
        ) : (
          <Waypoints
            aria-hidden
            className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:size-6"
          />
        )}
      </div>
      <span className="max-w-full truncate text-center text-[0.625rem] font-medium uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[0.6875rem]">
        {tech.label}
      </span>
    </li>
  )
}

export function StackMastery() {
  const allTechs = stackRows.flat()

  return (
    <section id="stack" className="scroll-mt-16">
      <div className="mb-10 text-center md:mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Built With Precision
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Stack <span className="text-muted-foreground">Mastery</span>
        </h2>
      </div>

      {/* Pyramid rows — tablet and up */}
      <div className="hidden flex-col items-center gap-3 sm:flex md:gap-4">
        {stackRows.map((row) => (
          <ul
            key={row.map((t) => t.name).join("-")}
            className="flex flex-wrap items-start justify-center gap-3 md:gap-4"
          >
            {row.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </ul>
        ))}
      </div>

      {/* Compact grid — mobile */}
      <ul className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-4 sm:hidden">
        {allTechs.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </ul>
    </section>
  )
}
