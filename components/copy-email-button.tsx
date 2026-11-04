"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Status = "idle" | "copied" | "failed"

const resetDelay: Record<Exclude<Status, "idle">, number> = {
  copied: 2000,
  failed: 6000,
}

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle")
  const timerRef = useRef<number | undefined>(undefined)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      window.clearTimeout(timerRef.current)
    }
  }, [])

  async function copy() {
    window.clearTimeout(timerRef.current)
    let next: Exclude<Status, "idle">
    try {
      // navigator.clipboard is undefined outside secure contexts (e.g. plain-HTTP LAN previews).
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable")
      await navigator.clipboard.writeText(email)
      next = "copied"
    } catch {
      next = "failed"
    }
    if (!mountedRef.current) return
    setStatus(next)
    timerRef.current = window.setTimeout(() => setStatus("idle"), resetDelay[next])
  }

  const copied = status === "copied"

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="min-h-11 w-full min-w-36 sm:w-auto"
        onClick={copy}
      >
        {copied ? (
          <Check className="size-4" aria-hidden />
        ) : (
          <Copy className="size-4" aria-hidden />
        )}
        {copied ? "Copied" : "Copy email"}
      </Button>
      <p
        role="status"
        className={cn(
          "basis-full text-sm",
          status === "failed" ? "text-destructive" : "sr-only"
        )}
      >
        {status === "copied" && "Email address copied to clipboard."}
        {status === "failed" &&
          "Couldn't copy automatically. Please select the address and copy it."}
      </p>
    </>
  )
}
