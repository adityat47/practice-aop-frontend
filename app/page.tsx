"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { HeaderBar } from "@/components/header-bar"
import { FilesTable } from "@/components/files-table"
import { cn } from "@/lib/utils"

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className={cn("md:grid md:grid-cols-[192px_1fr] md:min-h-dvh")}>
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        {/* Main */}
        <main className="flex min-h-dvh flex-col">
          <HeaderBar onOpenSidebar={() => setMobileOpen(true)} />

          <section className="p-3 md:p-6">
            <div className="rounded-lg border bg-card">
              <FilesTable />
            </div>
          </section>
        </main>
      </div>

      {/* Mobile Drawer Sidebar */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative h-full w-48 bg-blue-600 text-white shadow-xl">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
