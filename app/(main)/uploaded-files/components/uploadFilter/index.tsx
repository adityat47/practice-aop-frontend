"use client"

import { useState, useRef, useCallback } from "react"
import { X, CalendarDays, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"


type FilterPanelProps = {
  isOpen: boolean
  onClose: () => void
}

type ClientOption = {
  id: string
  name: string
}

// Mock client data - replace with your actual data
const clients: ClientOption[] = [
  { id: "1", name: "Client X" },
  { id: "2", name: "Client Z" },
]

export function FilterPanel({ isOpen, onClose }: FilterPanelProps) {
  // state at the top (grouped)
  const [dateRange, setDateRange] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedClients, setSelectedClients] = useState<string[]>([])
  const [validationStatus, setValidationStatus] = useState<string[]>([])
  const [dateFieldActive, setDateFieldActive] = useState(false)
  const [clientFieldActive, setClientFieldActive] = useState(false)
  const [validationFieldActive, setValidationFieldActive] = useState(false)
  const dateInputRef = useRef<HTMLInputElement>(null)

  const handleClearAll = useCallback(() => {
    setDateRange("")
    setSearchQuery("")
    setSelectedClients([])
    setValidationStatus([])
  }, [])

  const handleApply = useCallback(() => {
    // TODO: wire to parent via callback when needed
    onClose()
  }, [onClose])

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <SheetContent side="right" className="w-[476px] p-0 border-l border-[#E7E7E7]">
        {/* A11y title required by Radix Dialog. Kept visually hidden to preserve current UI */}
        <SheetTitle className="sr-only">Filter</SheetTitle>
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-[#EFF0F3]">
          <h2 className="text-base font-semibold text-[#000]">Filter</h2>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="h-7 rounded-sm px-4 bg-white text-[#2563EB] font-medium border border-[#2563EB] hover:bg-blue-50"
              type="button"
              onClick={handleApply}
            >
              Apply
            </Button>
              <Button variant="ghost" size="icon" aria-label="Close filter" type="button" onClick={onClose}>
                <X className="h-5 w-5 text-[#000]" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Clear All */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-[#394C9D]"> </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 rounded-sm px-3 text-xs text-[#6B6B6B] hover:text-[#394C9D] bg-[#f5f5f5] border border-[#E6E6E6]"
            type="button"
            onClick={handleClearAll}
          >
            <span className="mr-1">✕</span> Clear All
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-4 overflow-y-auto">
          {/* Date Range */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg w-full bg-gradient-to-r from-[rgba(231,239,253,0.60)] to-[rgba(231,239,253,0.40)]"
                onClick={() => setDateFieldActive((v) => !v)}
              >
                {dateFieldActive ? (
                  <ChevronUp className="h-4 w-4 text-[#374151]" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#374151]" aria-hidden="true" />
                )}
                <span className="text-sm font-semibold text-[#374151]">Date Range</span>
              </button>
            </div>
            {dateFieldActive && (
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#949CA7] pointer-events-none z-10" aria-hidden="true" />
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#949CA7] pointer-events-none z-10" aria-hidden="true" />
                <Input
                  readOnly
                  placeholder="Date range"
                  value={dateRange ? new Date(dateRange).toLocaleDateString() : ""}
                  className="w-full py-2.5 pl-10 pr-10 text-[#000] border border-[#E7E7E7]"
                />
                <button
                  aria-label="Open date picker"
                  type="button"
                  className="absolute inset-0"
                  onClick={() => {
                    const dateInput = dateInputRef.current
                    if (!dateInput) return
                    try {
                      const withPicker = dateInput as HTMLInputElement & { showPicker?: () => void }
                      if (typeof withPicker.showPicker === "function") withPicker.showPicker()
                      else {
                        dateInput.focus()
                        dateInput.click()
                      }
                    } catch {
                      dateInput.focus()
                      dateInput.click()
                    }
                  }}
                />
                <input
                  ref={dateInputRef}
                  id="date-picker"
                  type="date"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="opacity-0 absolute h-0 w-0 pointer-events-none"
                />
              </div>
            )}
          </div>

          {/* Client Name */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg w-full bg-gradient-to-r from-[rgba(231,239,253,0.60)] to-[rgba(231,239,253,0.40)]"
                onClick={() => setClientFieldActive((v) => !v)}
              >
                {clientFieldActive ? (
                  <ChevronUp className="h-4 w-4 text-[#374151]" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#374151]" aria-hidden="true" />
                )}
                <span className="text-sm font-semibold text-[#374151]">Client Name</span>
              </button>
            </div>
            {clientFieldActive && (
              <>
                <div className="relative mb-2">
                  <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#949CA7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <Input
                    type="text"
                    placeholder="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 border text-[#000] border-[#E7E7E7]"
                  />
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {clients
                    .filter((client) => client.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((client) => (
                      <div key={client.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`client-${client.id}`}
                          checked={selectedClients.includes(client.id)}
                          onCheckedChange={(checked) => {
                            if (checked === true) setSelectedClients([...selectedClients, client.id])
                            else setSelectedClients(selectedClients.filter((id) => id !== client.id))
                          }}
                        />
                        <label htmlFor={`client-${client.id}`} className="text-xs text-[#000]">
                          {client.name}
                        </label>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>

          {/* Validation Status */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg w-full bg-gradient-to-r from-[rgba(231,239,253,0.60)] to-[rgba(231,239,253,0.40)]"
                onClick={() => setValidationFieldActive((v) => !v)}
              >
                {validationFieldActive ? (
                  <ChevronUp className="h-4 w-4 text-[#374151]" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#374151]" aria-hidden="true" />
                )}
                <span className="text-sm font-semibold text-[#374151]">Validation Status</span>
              </button>
            </div>
            {validationFieldActive && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="status-success"
                    checked={validationStatus.includes("success")}
                    onCheckedChange={(checked) => {
                      if (checked === true) setValidationStatus([...validationStatus, "success"])
                      else setValidationStatus(validationStatus.filter((status) => status !== "success"))
                    }}
                  />
                  <label htmlFor="status-success" className="text-xs text-[#000]">Success</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="status-failed"
                    checked={validationStatus.includes("failed")}
                    onCheckedChange={(checked) => {
                      if (checked === true) setValidationStatus([...validationStatus, "failed"])
                      else setValidationStatus(validationStatus.filter((status) => status !== "failed"))
                    }}
                  />
                  <label htmlFor="status-failed" className="text-xs text-[#000]">Failed</label>
                </div>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
