import { education, trainings } from "@/lib/portfolio-data"
import { Section } from "@/components/section"

export function Education() {
  return (
    <Section id="education" label="Background" title="Education & Training">
      <div className="space-y-10">
        <div>
          <h3 className="text-base font-medium text-foreground">
            {education.degree}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.school}
          </p>
          <time className="mt-1 block text-sm tabular-nums text-muted-foreground">
            {education.date}
          </time>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trainings
          </h3>
          <ul className="space-y-4">
            {trainings.map((training) => (
              <li
                key={`${training.title}-${training.date}`}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {training.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {training.provider}
                  </p>
                </div>
                <time className="mt-1 shrink-0 text-sm tabular-nums text-muted-foreground sm:mt-0">
                  {training.date}
                </time>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
