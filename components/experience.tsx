"use client"

import { useEffect, useRef, useState } from "react"
import { experience } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [fillHeight, setFillHeight] = useState(0)
  const [trackLeft, setTrackLeft] = useState(4.5)
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    experience.map(() => false)
  )
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const reduced = prefersReducedMotion()
    setReducedMotion(reduced)

    if (reduced) {
      setRevealed(experience.map(() => true))
      setActiveIndex(experience.length - 1)
      return
    }

    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = Number(
            (entry.target as HTMLElement).dataset.experienceIndex
          )
          if (Number.isNaN(index)) continue
          setRevealed((prev) => {
            if (prev[index]) return prev
            const next = [...prev]
            next[index] = true
            return next
          })
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 }
    )

    for (const item of items) observer.observe(item)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0

    const paint = () => {
      frame = 0
      const list = listRef.current
      if (!list) return

      const listRect = list.getBoundingClientRect()
      const listTop = listRect.top + window.scrollY
      const markers = itemRefs.current
        .map((el) => el?.querySelector<HTMLElement>("[data-tl-marker]") ?? null)
        .filter(Boolean) as HTMLElement[]

      if (markers.length === 0) return

      const firstMarker = markers[0].getBoundingClientRect()
      const nextLeft = Math.round(
        firstMarker.left - listRect.left + firstMarker.width / 2
      )
      setTrackLeft((prev) => (prev === nextLeft ? prev : nextLeft))

      if (prefersReducedMotion()) {
        const last = markers[markers.length - 1]
        const lastCenter = Math.round(
          last.getBoundingClientRect().top +
            window.scrollY +
            last.offsetHeight / 2 -
            listTop
        )
        setFillHeight((prev) => (prev === lastCenter ? prev : lastCenter))
        setActiveIndex(markers.length - 1)
        return
      }

      const threshold = window.innerHeight * 0.42
      let nextActive = -1

      for (let i = 0; i < markers.length; i++) {
        if (markers[i].getBoundingClientRect().top <= threshold) {
          nextActive = i
        }
      }

      setActiveIndex((prev) => (prev === nextActive ? prev : nextActive))

      if (nextActive < 0) {
        setFillHeight((prev) => (prev === 0 ? prev : 0))
        return
      }

      const active = markers[nextActive]
      const center = Math.round(
        active.getBoundingClientRect().top +
          window.scrollY +
          active.offsetHeight / 2 -
          listTop
      )
      setFillHeight((prev) => (prev === center ? prev : center))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="experience" className="scroll-mt-16">
      <div className="mb-10 md:mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Where It All Started
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Career <span className="text-muted-foreground">Highlights</span>
        </h2>
      </div>

      <ol ref={listRef} className="relative">
        <span
          className="pointer-events-none absolute top-2 bottom-2 w-px -translate-x-1/2 bg-border"
          style={{ left: trackLeft }}
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-0 w-px -translate-x-1/2 bg-foreground transition-[height] duration-300 ease-out motion-reduce:transition-none"
          style={{ left: trackLeft, height: `${fillHeight}px` }}
          aria-hidden
        />

        {experience.map((job, index) => {
          const isActive = index <= activeIndex
          const isVisible = revealed[index] || reducedMotion
          const meta = job.employmentType
            ? `${job.company} · ${job.employmentType}`
            : job.company

          return (
            <li
              key={`${job.company}-${job.period}`}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-experience-index={index}
              className={cn(
                "experience-entry relative grid gap-1 pb-12 last:pb-0 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-x-8 md:gap-y-0",
                isVisible && "experience-entry-visible"
              )}
              style={
                reducedMotion
                  ? undefined
                  : { transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }
              }
            >
              <time
                className={cn(
                  "hidden pt-0.5 text-sm font-medium tabular-nums tracking-tight transition-colors duration-300 md:block",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {job.period}
              </time>

              <div className="relative pl-8">
                <span
                  data-tl-marker
                  className={cn(
                    "absolute left-0 top-1.5 size-2.5 rounded-full border-2 border-background transition-[background-color,box-shadow,transform] duration-300",
                    "ring-1 ring-border",
                    isActive
                      ? "scale-110 bg-foreground shadow-[0_0_0_3px_color-mix(in_oklab,var(--foreground)_18%,transparent)]"
                      : "bg-muted-foreground/40"
                  )}
                  aria-hidden
                />

                <time
                  className={cn(
                    "mb-1.5 block text-sm font-medium tabular-nums tracking-tight transition-colors duration-300 md:hidden",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {job.period}
                </time>

                <h3 className="text-lg font-medium tracking-tight text-foreground md:text-xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  {job.description}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
