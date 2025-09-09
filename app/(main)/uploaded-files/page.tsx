"use client"

import { useState } from "react"
import { FilesTable } from "./components/uploadTable"
import { HeaderBar } from "./components/uploadHeader"
import { FilterPanel } from "./components/uploadFilter"
import { Panel } from "@/components/panel"

export default function UploadedFilesPage() {
  // const [mobileOpen, setMobileOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-dvh bg-background  text-foreground pt-1">
      <div className="flex flex-col min-h-dvh">
        <HeaderBar
          onOpenSidebar={() => {}}
          onOpenFilter={() => setFilterOpen(true)}
        />
        <main className="flex-1 p-4">
          <Panel>
            <FilesTable/>
          </Panel>
        </main>
      </div>
      <FilterPanel
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />
    </div>
  )
}