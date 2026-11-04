import {
  siAppwrite,
  siCss,
  siDjango,
  siExpress,
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
import { stackGroups, type StackTech } from "@/lib/portfolio-data"
import { Section } from "@/components/section"

const iconMap: Record<string, SimpleIcon> = {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siNodedotjs,
  siExpress,
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

function TechItem({ tech }: { tech: StackTech }) {
  const icon = tech.icon ? iconMap[tech.icon] : null

  return (
    <li className="flex items-center gap-3 text-sm text-body">
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="size-4 shrink-0 fill-muted-foreground"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <Waypoints aria-hidden className="size-4 shrink-0 text-muted-foreground" />
      )}
      {tech.name}
    </li>
  )
}

export function StackMastery() {
  return (
    <Section id="stack" label="Skills" title="Stack">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((tech) => (
                <TechItem key={tech.name} tech={tech} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
