"use client"

import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import {
  applyTheme,
  getResolvedTheme,
  getStoredTheme,
  getSystemTheme,
  setTheme,
  type Theme,
} from "@/lib/theme"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      if (!getStoredTheme()) applyTheme(getSystemTheme())
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return (
    <button
      type="button"
      onClick={() => {
        const next: Theme =
          getResolvedTheme() === "dark" ? "light" : "dark"
        setTheme(next)
      }}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={cn(
        "flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors",
        "hover:bg-accent hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:bg-accent/80",
        className
      )}
    >
      <Sun className="hidden size-4 dark:block" aria-hidden />
      <Moon className="size-4 dark:hidden" aria-hidden />
    </button>
  )
}
