"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { FeaturedScreenshot } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type GalleryContextValue = {
  projectName: string
  total: number
  open: (index: number, trigger: HTMLElement) => void
}

const GalleryContext = createContext<GalleryContextValue | null>(null)

/** Elements that use Left/Right arrows themselves; gallery navigation yields to them. */
const ARROW_KEY_OWNERS =
  "input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='slider'], [role='tablist'], [role='radiogroup'], [role='listbox'], [role='menu'], [role='menubar']"

/** Pointer travel (px) beyond which a backdrop press counts as a drag, not a click. */
const DRAG_TOLERANCE = 8

function isPortrait(shot: FeaturedScreenshot) {
  return shot.height > shot.width
}

function lightboxSizes(shot: FeaturedScreenshot) {
  return isPortrait(shot)
    ? "22.5rem"
    : "(max-width: 639px) 100vw, calc(100vw - 8rem)"
}

function lockPageScroll() {
  const html = document.documentElement
  const { body } = document
  const scrollbarWidth = window.innerWidth - html.clientWidth
  const { scrollX, scrollY } = window
  const previous = {
    overflow: html.style.overflow,
    paddingRight: body.style.paddingRight,
  }

  html.style.overflow = "hidden"
  // Fill the gap left by the hidden scrollbar so the page doesn't shift sideways.
  if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

  return () => {
    html.style.overflow = previous.overflow
    body.style.paddingRight = previous.paddingRight
    // overflow: hidden doesn't block programmatic scrolling, so restore explicitly.
    if (window.scrollX !== scrollX || window.scrollY !== scrollY) {
      window.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" })
    }
  }
}

function getTabbable(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLElement>("button, [tabindex='0']")
  ).filter(
    (element) =>
      !element.hasAttribute("disabled") && element.getClientRects().length > 0
  )
}

/** True when the event hit a backdrop surface rather than its scrollbar or content. */
function isBackdropTarget(event: MouseEvent | PointerEvent) {
  const target = event.target
  if (!(target instanceof HTMLElement)) return false
  if (!target.hasAttribute("data-lightbox-backdrop")) return false
  const { offsetX, offsetY } = event.nativeEvent
  return offsetX < target.clientWidth && offsetY < target.clientHeight
}

type ProjectGalleryProps = {
  projectName: string
  screenshots: FeaturedScreenshot[]
  children: ReactNode
}

export function ProjectGallery({
  projectName,
  screenshots,
  children,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [announcement, setAnnouncement] = useState("")
  const triggerRef = useRef<HTMLElement | null>(null)
  const total = screenshots.length

  const open = useCallback((index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setAnnouncement("")
    setActiveIndex(index)
  }, [])

  const navigate = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return
      setActiveIndex(index)
      setAnnouncement(
        `Screenshot ${index + 1} of ${total}: ${screenshots[index].alt}`
      )
    },
    [screenshots, total]
  )

  const handleClosed = useCallback(() => {
    setActiveIndex(null)
    triggerRef.current?.focus({ preventScroll: true })
  }, [])

  const value = useMemo(
    () => ({ projectName, total, open }),
    [projectName, total, open]
  )

  return (
    <GalleryContext value={value}>
      {children}
      <ScreenshotLightbox
        projectName={projectName}
        screenshots={screenshots}
        activeIndex={activeIndex}
        announcement={announcement}
        onNavigate={navigate}
        onClosed={handleClosed}
      />
    </GalleryContext>
  )
}

type GalleryTriggerProps = {
  index: number
  className?: string
  children: ReactNode
}

export function GalleryTrigger({ index, className, children }: GalleryTriggerProps) {
  const gallery = useContext(GalleryContext)
  if (!gallery) throw new Error("GalleryTrigger must be used within ProjectGallery")

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => gallery.open(index, event.currentTarget)}
      className={cn(
        "cursor-zoom-in text-left transition-colors duration-200 hover:border-foreground/30 focus-visible:border-foreground/30 motion-reduce:transition-none",
        className
      )}
    >
      {children}
      <span className="sr-only">
        {` View larger, screenshot ${index + 1} of ${gallery.total}.`}
      </span>
    </button>
  )
}

type ScreenshotLightboxProps = {
  projectName: string
  screenshots: FeaturedScreenshot[]
  activeIndex: number | null
  announcement: string
  onNavigate: (index: number) => void
  onClosed: () => void
}

function ScreenshotLightbox({
  projectName,
  screenshots,
  activeIndex,
  announcement,
  onNavigate,
  onClosed,
}: ScreenshotLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const press = useRef<{ x: number; y: number; onBackdrop: boolean } | null>(null)
  const releasedOnBackdrop = useRef(false)
  const titleId = useId()
  const positionId = useId()
  const isOpen = activeIndex !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!isOpen || !dialog) return
    if (!dialog.open) dialog.showModal()
    closeButtonRef.current?.focus()
    const unlockPageScroll = lockPageScroll()
    return () => {
      unlockPageScroll()
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  const close = () => dialogRef.current?.close()

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (activeIndex === null) return
    const dialog = event.currentTarget

    if (event.key === "Escape") {
      event.preventDefault()
      close()
      return
    }

    if (event.key === "Tab") {
      const tabbable = getTabbable(dialog)
      if (tabbable.length === 0) return
      const current = tabbable.indexOf(document.activeElement as HTMLElement)
      if (event.shiftKey && current <= 0) {
        event.preventDefault()
        tabbable[tabbable.length - 1].focus()
      } else if (!event.shiftKey && (current === -1 || current === tabbable.length - 1)) {
        event.preventDefault()
        tabbable[0].focus()
      }
      return
    }

    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
    if (event.target instanceof Element && event.target.closest(ARROW_KEY_OWNERS)) return
    event.preventDefault()
    onNavigate(activeIndex + (event.key === "ArrowRight" ? 1 : -1))
  }

  const handlePointerDown = (event: PointerEvent<HTMLDialogElement>) => {
    press.current = {
      x: event.clientX,
      y: event.clientY,
      onBackdrop: event.button === 0 && isBackdropTarget(event),
    }
    releasedOnBackdrop.current = false
  }

  const handlePointerUp = (event: PointerEvent<HTMLDialogElement>) => {
    const start = press.current
    releasedOnBackdrop.current =
      !!start?.onBackdrop &&
      isBackdropTarget(event) &&
      Math.abs(event.clientX - start.x) <= DRAG_TOLERANCE &&
      Math.abs(event.clientY - start.y) <= DRAG_TOLERANCE
  }

  const handleClick = () => {
    const shouldClose = releasedOnBackdrop.current
    press.current = null
    releasedOnBackdrop.current = false
    if (shouldClose) close()
  }

  const active = activeIndex === null ? null : screenshots[activeIndex]
  const portrait = active ? isPortrait(active) : false
  const atStart = activeIndex === 0
  const atEnd = activeIndex === screenshots.length - 1
  const adjacent =
    activeIndex === null
      ? []
      : [activeIndex - 1, activeIndex + 1].filter(
          (index) => index >= 0 && index < screenshots.length
        )

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={positionId}
      onClose={onClosed}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        press.current = null
      }}
      onClick={handleClick}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-background p-0 text-foreground backdrop:bg-transparent motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-150"
    >
      {active && activeIndex !== null ? (
        <div className="grid h-full grid-rows-[auto_minmax(0,1fr)]">
          <header className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="truncate text-base font-semibold tracking-tight text-foreground sm:text-lg"
              >
                {projectName} screenshots
              </h2>
              <p id={positionId} className="eyebrow mt-0.5">
                {activeIndex + 1} of {screenshots.length}
              </p>
            </div>
            <Button
              ref={closeButtonRef}
              type="button"
              variant="outline"
              size="icon"
              className="size-11 shrink-0"
              aria-label="Close gallery"
              onClick={close}
            >
              <X className="size-5" aria-hidden />
            </Button>
          </header>

          <div
            data-lightbox-backdrop
            className="grid min-h-0 grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[minmax(0,1fr)_auto] gap-x-3 gap-y-3 p-3 sm:gap-x-4 sm:p-4"
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="col-start-1 row-start-2 size-11 self-center aria-disabled:cursor-not-allowed aria-disabled:opacity-40 sm:row-start-1"
              aria-label="Previous screenshot"
              aria-disabled={atStart}
              onClick={() => onNavigate(activeIndex - 1)}
            >
              <ChevronLeft className="size-5" aria-hidden />
            </Button>

            <div
              data-lightbox-backdrop
              tabIndex={portrait ? 0 : undefined}
              role={portrait ? "region" : undefined}
              aria-label={portrait ? "Screenshot, scrollable" : undefined}
              className="col-span-3 col-start-1 row-start-1 min-h-0 overflow-y-auto overscroll-contain rounded-md focus-visible:outline-offset-[-2px] sm:col-span-1 sm:col-start-2"
            >
              <div
                data-lightbox-backdrop
                className={cn(
                  "flex items-center justify-center",
                  portrait ? "min-h-full" : "h-full [container-type:size]"
                )}
              >
                <Image
                  key={active.src}
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  sizes={lightboxSizes(active)}
                  loading="eager"
                  fetchPriority="high"
                  draggable={false}
                  className={cn(
                    "h-auto rounded-md border border-border bg-secondary/40",
                    portrait && "w-full max-w-[22.5rem]"
                  )}
                  style={
                    portrait
                      ? undefined
                      : {
                          // Largest size that fits the stage; the 2px offsets account for the border.
                          width: `min(100cqw, (100cqh - 2px) * ${active.width / active.height} + 2px)`,
                        }
                  }
                />
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="col-start-3 row-start-2 size-11 self-center aria-disabled:cursor-not-allowed aria-disabled:opacity-40 sm:row-start-1"
              aria-label="Next screenshot"
              aria-disabled={atEnd}
              onClick={() => onNavigate(activeIndex + 1)}
            >
              <ChevronRight className="size-5" aria-hidden />
            </Button>

            <p
              aria-hidden
              className="col-start-2 row-start-2 self-center text-center text-xs leading-relaxed text-muted-foreground sm:text-sm"
            >
              {active.alt}
            </p>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement}
          </p>

          <div hidden>
            {adjacent.map((index) => (
              <Image
                key={screenshots[index].src}
                src={screenshots[index].src}
                alt=""
                width={screenshots[index].width}
                height={screenshots[index].height}
                sizes={lightboxSizes(screenshots[index])}
                loading="eager"
              />
            ))}
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
