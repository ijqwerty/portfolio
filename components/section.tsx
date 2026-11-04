import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  label: string
  title: string
  intro?: string
  /** Secondary anchor kept so older links to this section still resolve. */
  aliasId?: string
  children: React.ReactNode
  className?: string
}

export function Section({
  id,
  label,
  title,
  intro,
  aliasId,
  children,
  className,
}: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("scroll-mt-20", className)}
    >
      {aliasId ? (
        <span id={aliasId} className="block scroll-mt-20" aria-hidden />
      ) : null}
      <div className="mb-10 md:mb-12">
        <p className="eyebrow mb-3">{label}</p>
        <h2
          id={titleId}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-prose text-base leading-relaxed text-body">
            {intro}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  )
}
