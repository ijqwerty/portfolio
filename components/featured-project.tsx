import { ArrowUpRight, Github } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"
import { ProjectScreenshots } from "@/components/project-screenshots"
import { Button } from "@/components/ui/button"
import { isHttpUrl } from "@/lib/utils"

type FeaturedProjectProps = {
  project: Project & { featured: NonNullable<Project["featured"]> }
  index: number
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const { featured } = project
  const demoHref = isHttpUrl(project.link) ? project.link : null
  const githubHref = isHttpUrl(project.github) ? project.github : null
  const remainingStack = project.stack.filter(
    (tech) => !featured.primaryStack.includes(tech)
  )
  const indexLabel = String(index + 1).padStart(2, "0")

  return (
    <article
      id={`work-${featured.slug}`}
      className="scroll-mt-24 border-b border-border py-16 first:pt-0 last:border-b-0 last:pb-0 md:py-24"
    >
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <p className="eyebrow text-highlight">
            {indexLabel} · Solo project · {featured.context}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-body md:text-lg">
                {featured.tagline}
              </p>
            </div>

            {demoHref || githubHref ? (
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                {demoHref ? (
                  <Button asChild className="project-link">
                    <a
                      href={demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <span className="sr-only">
                        {" "}
                        of {project.name} (opens in a new tab)
                      </span>
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </Button>
                ) : null}
                {githubHref ? (
                  <Button asChild variant="outline" className="project-link">
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" aria-hidden />
                      GitHub
                      <span className="sr-only">
                        {" "}
                        repository for {project.name} (opens in a new tab)
                      </span>
                    </a>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </header>

        <ProjectScreenshots projectName={project.name} featured={featured} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <dl className="flex flex-col gap-5 lg:col-span-7">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Problem
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-body md:text-[0.9375rem]">
                {featured.problem}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Solution
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-body md:text-[0.9375rem]">
                {featured.solution}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Role
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-body md:text-[0.9375rem]">
                {featured.role}
              </dd>
            </div>
          </dl>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Key capabilities
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-[0.9375rem]">
                {featured.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Built with
              </h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {featured.primaryStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-[0.6875rem]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {remainingStack.length > 0 ? (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  +{remainingStack.length} more: {remainingStack.join(", ")}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
