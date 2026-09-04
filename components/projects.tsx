import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function isHttpUrl(value: string | undefined): value is string {
  if (!value) return false
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

export function Projects() {
  return (
    <Section id="projects" label="Portfolio" title="Selected Projects">
      <div className="divide-y divide-border">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1
          const demoHref = isHttpUrl(project.link) ? project.link : null
          const githubHref = isHttpUrl(project.github) ? project.github : null
          const screenshot = (
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                sizes="(max-width: 768px) calc(100vw - 3rem), 28rem"
                className="project-media-image object-cover object-top"
              />
            </div>
          )

          return (
            <article
              key={project.name}
              className="project-entry grid grid-cols-1 gap-5 py-12 first:pt-0 last:pb-0 md:grid-cols-2 md:items-center md:gap-10 md:py-16"
            >
              <div
                className={cn(
                  "contents md:flex md:flex-col md:gap-5",
                  reversed && "md:order-2"
                )}
              >
                <header className="contents md:block">
                  <h3 className="order-1 text-lg font-medium tracking-tight text-foreground md:text-xl">
                    {project.name}
                  </h3>
                  <p className="order-2 mt-1 text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                </header>

                <ul className="order-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-[0.6875rem]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="order-5 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  {project.problem} {project.solution}
                </p>

                {demoHref || githubHref ? (
                  <div className="order-6 flex flex-wrap items-center gap-3">
                    {demoHref ? (
                      <Button asChild className="project-link">
                        <a
                          href={demoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
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
                        </a>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div
                className={cn(
                  "project-media-frame order-3 overflow-hidden rounded-lg border border-border bg-secondary/40",
                  reversed && "md:order-1"
                )}
              >
                {demoHref ? (
                  <a
                    href={demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`Open live demo of ${project.name}`}
                  >
                    {screenshot}
                  </a>
                ) : (
                  screenshot
                )}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
