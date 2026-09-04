import { Mail, MapPin } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Section id="contact" label="Reach out" title="Contact">
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Based in {profile.location}. Available via email for inquiries and
        professional correspondence.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button asChild size="lg">
          <a href={`mailto:${profile.email}`}>
            <Mail className="size-4" aria-hidden />
            {profile.email}
          </a>
        </Button>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" aria-hidden />
          {profile.location}
        </span>
      </div>
    </Section>
  )
}
