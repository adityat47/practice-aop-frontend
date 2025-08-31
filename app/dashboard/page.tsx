"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { HeaderBar } from "@/components/header-bar"
import { FilesTable } from "@/components/files-table"
import { FilterPanel } from "@/components/filter-panel"
import { cn } from "@/lib/utils"

// Color system (max 5):
// 1) Primary: blue-600
// 2) Neutral: white
// 3) Neutral: gray (tailwind)
// 4) Accent: green-500 (success)
// 5) Accent: red-500 (danger)

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className={cn("md:grid", "md:grid-cols-[192px_1fr]", "md:min-h-dvh")}>
        {/* Static sidebar on md+ */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        <main className="flex min-h-dvh flex-col">
          <HeaderBar 
            onOpenSidebar={() => setMobileOpen(true)} 
            onOpenFilter={() => setFilterOpen(true)}
          />

          <section className="p-4 md:p-6">
            <div className="rounded-lg border bg-card">
              <FilesTable />
            </div>
          </section>
        </main>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <button
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer panel */}
          <div className="relative h-full w-48 bg-blue-600 text-white shadow-xl">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}

      {/* Filter Panel */}
      <FilterPanel 
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />
    </div>
  )
}
