import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Section } from "@/components/section"
import { CopyEmailButton } from "@/components/copy-email-button"
import { Button } from "@/components/ui/button"

const resumeHref = encodeURI(profile.resumeHref)

export function Contact() {
  return (
    <Section id="contact" label="Reach out" title="Contact">
      <p className="mb-8 max-w-lg text-base leading-relaxed text-body">
        Email is the quickest way to reach me. You can also find me on LinkedIn
        and GitHub, or read my resume.
      </p>

      <div className="max-w-2xl rounded-lg border border-border p-5 sm:p-8">
        <p className="eyebrow mb-2">Email</p>
        <p className="mb-5 select-all text-xl font-medium tracking-tight text-foreground [overflow-wrap:anywhere] sm:text-3xl">
          {profile.email}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button asChild size="lg" className="min-h-11 w-full sm:w-auto">
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" aria-hidden />
              Send email
            </a>
          </Button>
          <CopyEmailButton email={profile.email} />
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap" aria-label="Other ways to connect">
        <li>
          <Button asChild variant="outline" className="min-h-11 w-full sm:w-auto">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-4" aria-hidden />
              LinkedIn
              <span className="sr-only"> profile (opens in a new tab)</span>
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline" className="min-h-11 w-full sm:w-auto">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" aria-hidden />
              GitHub
              <span className="sr-only"> profile (opens in a new tab)</span>
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline" className="min-h-11 w-full sm:w-auto">
            <a href={resumeHref} target="_blank" rel="noopener noreferrer">
              Resume
              <span className="sr-only"> (PDF, opens in a new tab)</span>
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        </li>
      </ul>

      <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" aria-hidden />
        {profile.location}
      </p>
    </Section>
  )
}
