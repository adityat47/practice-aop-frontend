import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export function Panel({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("rounded-lg w-full bg-white shadow-[3px_4px_4px_0_rgba(212,212,212,0.25)]", className)}>
      {children}
    </div>
  )
}
