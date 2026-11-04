import Image from "next/image"
import { projects } from "@/lib/portfolio-data"
import { FeaturedProject } from "@/components/featured-project"
import { Section } from "@/components/section"
import { isHttpUrl } from "@/lib/utils"

const textLinkClass =
  "inline-flex min-h-11 items-center gap-1 rounded-sm text-sm font-medium text-foreground decoration-highlight underline-offset-4 hover:underline"

const featuredProjects = projects.filter(
  (project): project is typeof project & { featured: NonNullable<typeof project.featured> } =>
    Boolean(project.featured)
)
const secondaryProjects = projects.filter((project) => !project.featured)

export function Projects() {
  return (
    <Section id="work" aliasId="projects" label="Portfolio" title="Selected work">
      <div>
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.featured.slug}
            project={project}
            index={index}
          />
        ))}
      </div>

      {secondaryProjects.length > 0 ? (
        <div className="mt-16 border-t border-border pt-16 md:mt-24 md:pt-20">
          <h3 className="mb-10 text-xl font-semibold tracking-tight text-foreground md:mb-12 md:text-2xl">
            More projects
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
            {secondaryProjects.map((project) => {
              const demoHref = isHttpUrl(project.link) ? project.link : null
              const githubHref = isHttpUrl(project.github) ? project.github : null
              const techs = project.cardStack ?? project.stack.slice(0, 3)

              return (
                <li key={project.name}>
                  <article className="grid grid-cols-[6rem_minmax(0,1fr)] items-start gap-4 sm:flex sm:flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-secondary/40">
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 639px) 6rem, (max-width: 1023px) 50vw, 22rem"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base font-medium tracking-tight text-foreground md:text-lg">
                        {project.name}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-body">
                        {project.tagline}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {techs.join(" · ")}
                      </p>

                      {demoHref || githubHref ? (
                        <div className="mt-1 flex flex-wrap gap-x-5">
                          {demoHref ? (
                            <a
                              href={demoHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={textLinkClass}
                            >
                              Live
                              <span className="sr-only">
                                {" "}
                                demo of {project.name} (opens in a new tab)
                              </span>
                              <span aria-hidden>↗</span>
                            </a>
                          ) : null}
                          {githubHref ? (
                            <a
                              href={githubHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={textLinkClass}
                            >
                              Code
                              <span className="sr-only">
                                {" "}
                                repository for {project.name} (opens in a new tab)
                              </span>
                              <span aria-hidden>↗</span>
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </Section>
  )
}
