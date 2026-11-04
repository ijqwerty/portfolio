import { education, trainings } from "@/lib/portfolio-data"

const items = [
  { date: education.date, title: education.degree, detail: education.school },
  ...trainings
    .filter((training) => training.featured)
    .map((training) => ({
      date: training.date,
      title: training.title,
      detail: training.provider,
    })),
]

/** Rendered below the Experience timeline, sharing its date-column grid. */
export function EducationSummary() {
  return (
    <div className="mt-16 md:mt-20">
      <div className="md:grid md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-x-8">
        <h3 className="pl-8 text-xs font-medium uppercase tracking-wider text-muted-foreground md:col-start-2">
          Education
        </h3>
      </div>
      <ul className="mt-5 space-y-5">
        {items.map((item) => (
          <li
            key={`${item.title}-${item.date}`}
            className="grid md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-x-8"
          >
            <time className="hidden whitespace-nowrap pt-0.5 font-mono text-xs leading-4 tabular-nums text-muted-foreground md:block">
              {item.date}
            </time>
            <div className="pl-8">
              <time className="mb-1 block font-mono text-xs leading-4 tabular-nums text-muted-foreground md:hidden">
                {item.date}
              </time>
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
