import Image from "next/image"
import type { FeaturedScreenshot, ProjectFeatured } from "@/lib/portfolio-data"
import { GalleryTrigger, ProjectGallery } from "@/components/project-gallery"
import { cn } from "@/lib/utils"

type ProjectScreenshotsProps = {
  projectName: string
  featured: ProjectFeatured
}

/** Lightbox order: primary, gallery-only extras, then the homepage secondary shots. */
function getGalleryScreenshots({ screenshots }: ProjectFeatured) {
  return [
    screenshots.primary,
    ...(screenshots.galleryOnly ?? []),
    ...screenshots.secondary,
  ]
}

function getSecondaryGalleryIndex({ screenshots }: ProjectFeatured, index: number) {
  return 1 + (screenshots.galleryOnly?.length ?? 0) + index
}

function ScreenshotFrame({
  screenshot,
  galleryIndex,
  sizes,
  className,
  preload = false,
}: {
  screenshot: FeaturedScreenshot
  galleryIndex: number
  sizes: string
  className?: string
  preload?: boolean
}) {
  return (
    <GalleryTrigger
      index={galleryIndex}
      className={cn(
        "featured-shot-frame relative overflow-hidden rounded-lg border border-border bg-secondary/40 p-1.5",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-md">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes={sizes}
          preload={preload || undefined}
          className="object-cover"
          style={
            screenshot.objectPosition
              ? { objectPosition: screenshot.objectPosition }
              : undefined
          }
        />
      </div>
    </GalleryTrigger>
  )
}

function StandardScreenshots({
  projectName,
  featured,
}: ProjectScreenshotsProps) {
  const { primary, secondary } = featured.screenshots

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-12 lg:items-stretch">
      <ScreenshotFrame
        screenshot={primary}
        galleryIndex={0}
        preload={featured.slug === "ghost-ai"}
        sizes="(max-width: 1023px) calc(100vw - 3rem), 45rem"
        className="aspect-[16/10] lg:col-span-8"
      />

      {secondary.length > 0 ? (
        <div
          role="region"
          aria-label={`${projectName} additional screenshots`}
          tabIndex={0}
          className={cn(
            "featured-shot-strip flex gap-2 overflow-x-auto overscroll-x-contain pb-1",
            "snap-x snap-mandatory motion-reduce:snap-none",
            "sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:snap-none",
            "lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2 lg:gap-2"
          )}
        >
          {secondary.map((shot, index) => (
            <ScreenshotFrame
              key={shot.src}
              screenshot={shot}
              galleryIndex={getSecondaryGalleryIndex(featured, index)}
              sizes="(max-width: 639px) 80vw, (max-width: 1023px) calc(50vw - 2rem), 22rem"
              className="aspect-[16/10] w-[80%] max-w-[20rem] shrink-0 snap-start sm:w-auto sm:max-w-none lg:aspect-auto lg:h-full lg:min-h-0"
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function PhoneScreenshots({ featured }: ProjectScreenshotsProps) {
  const { primary, secondary } = featured.screenshots
  const phone = secondary[0]

  return (
    <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-stretch sm:gap-3">
      <ScreenshotFrame
        screenshot={primary}
        galleryIndex={0}
        sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 12rem), 52rem"
        className="aspect-[16/10] w-full"
      />

      {phone ? (
        <ScreenshotFrame
          screenshot={phone}
          galleryIndex={getSecondaryGalleryIndex(featured, 0)}
          sizes="15rem"
          className="mx-auto aspect-[9/19.5] w-full max-w-[15rem] sm:mx-0 sm:h-full sm:w-auto sm:max-w-none"
        />
      ) : null}
    </div>
  )
}

export function ProjectScreenshots({
  projectName,
  featured,
}: ProjectScreenshotsProps) {
  return (
    <ProjectGallery
      projectName={projectName}
      screenshots={getGalleryScreenshots(featured)}
    >
      {featured.layout === "phone" ? (
        <PhoneScreenshots projectName={projectName} featured={featured} />
      ) : (
        <StandardScreenshots projectName={projectName} featured={featured} />
      )}
    </ProjectGallery>
  )
}
