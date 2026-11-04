"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navLinks, profile } from "@/lib/portfolio-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sectionIds = navLinks.map((link) => link.href.slice(1))
const resumeHref = encodeURI(profile.resumeHref)

function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]
      if (sections.length === 0) return

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      let next: string | null = null

      if (atBottom) {
        next = sections[sections.length - 1].id
      } else {
        const line = window.innerHeight * 0.35
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= line) next = section.id
        }
      }

      setActiveId((prev) => (prev === next ? prev : next))
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return activeId
}

export function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const activeId = useActiveSection()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background">
      <div className="page-container flex h-14 items-center justify-between">
        <a
          href="#"
          aria-label={profile.name}
          className="flex items-center rounded-sm transition-opacity hover:opacity-70"
        >
          <Image
            src="/logo-light.png"
            alt=""
            width={392}
            height={417}
            priority
            className="h-8 w-auto dark:hidden"
          />
          <Image
            src="/logo-dark.png"
            alt=""
            width={392}
            height={417}
            priority
            className="hidden h-8 w-auto dark:block"
          />
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeId === link.href.slice(1) ? "true" : undefined}
                className="nav-link rounded-sm text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button asChild variant="outline" size="sm" className="ml-7 hidden md:inline-flex">
            <a href={resumeHref} target="_blank" rel="noopener noreferrer">
              Resume
              <span className="sr-only"> (PDF, opens in a new tab)</span>
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>

          <ThemeToggle className="md:ml-2" />

          <button
            ref={toggleRef}
            type="button"
            className="flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 bg-background md:hidden",
          open ? "block" : "hidden"
        )}
        aria-label="Mobile"
      >
        <ul className="page-container flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeId === link.href.slice(1) ? "true" : undefined}
                className="flex min-h-12 items-center border-l-2 border-transparent pl-3 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=true]:border-highlight aria-[current=true]:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center gap-1.5 border-l-2 border-transparent pl-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Resume
              <span className="sr-only"> (PDF, opens in a new tab)</span>
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
