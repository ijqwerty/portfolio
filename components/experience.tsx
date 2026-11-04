"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { experience } from "@/lib/portfolio-data"
import { EducationSummary } from "@/components/education"
import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  )
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY)
  media.addEventListener("change", onChange)
  return () => media.removeEventListener("change", onChange)
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
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => false
  )

  useEffect(() => {
    if (reducedMotion) return

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
  }, [reducedMotion])

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
    <Section id="experience" label="Career" title="Experience">
      <ol ref={listRef} className="relative">
        <span
          className="pointer-events-none absolute top-2 bottom-2 w-px -translate-x-1/2 bg-border"
          style={{ left: trackLeft }}
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-0 w-px -translate-x-1/2 bg-highlight transition-[height] duration-300 ease-out motion-reduce:transition-none"
          style={{ left: trackLeft, height: `${fillHeight}px` }}
          aria-hidden
        />

        {experience.map((job, index) => {
          const isActive = index <= activeIndex
          const isVisible = revealed[index] || reducedMotion
          const isCurrent = job.period.endsWith("Present")
          const isMinor = job.tier === "minor"
          const meta = job.employmentType
            ? `${job.company} · ${job.employmentType}`
            : job.company
          const dateClass = cn(
            "whitespace-nowrap font-mono text-xs leading-4 tabular-nums transition-colors duration-300",
            isActive && !isMinor ? "text-foreground" : "text-muted-foreground"
          )

          return (
            <li
              key={`${job.company}-${job.period}`}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-experience-index={index}
              className={cn(
                "experience-entry relative grid last:pb-0 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-x-8",
                job.tier === "primary" ? "pb-10" : "pb-8",
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
                  dateClass,
                  "hidden md:block",
                  isMinor ? "pt-0.5" : "pt-1.5"
                )}
              >
                {job.period}
              </time>

              <div className="relative pl-8">
                {/* Both marker sizes share a 5px horizontal center so the track stays aligned */}
                <span
                  data-tl-marker
                  className={cn(
                    "absolute rounded-full transition-[background-color,border-color,box-shadow,transform] duration-300",
                    isMinor
                      ? "left-px top-1 size-2 border bg-background md:top-1.5"
                      : "left-0 top-[3px] size-2.5 border-2 border-background ring-1 ring-border md:top-[9px]",
                    isMinor &&
                      (isActive ? "border-foreground" : "border-muted-foreground/50"),
                    !isMinor &&
                      (isActive
                        ? isCurrent
                          ? "scale-110 bg-highlight shadow-[0_0_0_3px_color-mix(in_oklab,var(--highlight)_22%,transparent)]"
                          : "scale-110 bg-foreground"
                        : "bg-muted-foreground/40")
                  )}
                  aria-hidden
                />

                <time className={cn(dateClass, "mb-1.5 block md:hidden")}>
                  {job.period}
                </time>

                {isMinor ? (
                  <h3 className="text-sm text-muted-foreground">
                    {job.role}
                    <span> · {meta}</span>
                  </h3>
                ) : (
                  <>
                    <h3
                      className={cn(
                        "font-medium tracking-tight text-foreground",
                        job.tier === "primary"
                          ? "text-lg md:text-xl"
                          : "text-base md:text-lg"
                      )}
                    >
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{meta}</p>
                  </>
                )}

                {job.highlights ? (
                  <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-body md:text-[0.9375rem]">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}

                {job.summary ? (
                  <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-body">
                    {job.summary}
                  </p>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>

      <EducationSummary />
    </Section>
  )
}
