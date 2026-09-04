"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { navLinks, profile } from "@/lib/portfolio-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a
          href="#"
          aria-label={profile.name}
          className="flex items-center transition-opacity hover:opacity-70"
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
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle className="md:ml-4" />

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        className={cn(
          "border-t border-border/60 bg-background md:hidden",
          open ? "block" : "hidden"
        )}
        aria-label="Mobile"
      >
        <ul className="flex flex-col px-6 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
