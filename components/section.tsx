import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  label: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)}>
      <div className="mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
