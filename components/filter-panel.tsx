"use client"

import * as React from "react"
import { X, CalendarDays, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Inter } from "next/font/google"

type FilterPanelProps = {
  isOpen: boolean
  onClose: () => void
}

type ClientOption = {
  id: string
  name: string
}

export function FilterPanel({ isOpen, onClose }: FilterPanelProps) {
  const [dateRange, setDateRange] = React.useState("")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedClients, setSelectedClients] = React.useState<string[]>([])
  const [validationStatus, setValidationStatus] = React.useState<string[]>([])
  const [dateFieldActive, setDateFieldActive] = React.useState(false)
  const [clientFieldActive, setClientFieldActive] = React.useState(false)
  const [validationFieldActive, setValidationFieldActive] = React.useState(false)

  // Mock client data - replace with your actual data
  const clients: ClientOption[] = [
    { id: "1", name: "Client X" },
    { id: "2", name: "Client Z" },
  ]

  return (
    <div className={`fixed inset-0 z-[99999] flex justify-end transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} style={{ zIndex: 99999 }}>
      {/* Semi-transparent overlay to allow dashboard content to show through */}
      <div className="absolute inset-0 bg-black/20" style={{ zIndex: 99998 }}></div>
      <aside className="relative h-full w-[476px] bg-white border-l border-[#E7E7E7] shadow-xl flex flex-col" style={{ zIndex: 99999 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-[#EFF0F3]">
          <h2 className="text-base font-semibold">Filter</h2>
          <div className="flex items-center gap-2">
            <Button size="sm" style={{ backgroundColor: "#394C9D", color: "#fff", fontWeight: 500 }} onClick={() => { console.log({ dateRange, selectedClients, validationStatus }); onClose(); }}>Apply</Button>
            <Button variant="ghost" size="icon" onClick={onClose}><X className="h-5 w-5" /></Button>
          </div>
        </div>
        {/* Clear All */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-[#394C9D]"> </span>
          <button className="text-xs text-[#949CA7] hover:text-blue-700 font-medium" onClick={() => { setDateRange(""); setSearchQuery(""); setSelectedClients([]); setValidationStatus([]); }}>Clear All</button>
        </div>
        {/* Content */}
        <div className="flex-1 px-6 pb-4 overflow-y-auto">
          {/* Date Range */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div 
                className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg w-full" 
                style={{ 
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, rgba(231, 239, 253, 0.60) 5.99%, rgba(231, 239, 253, 0.40) 86.41%)",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
                onClick={() => setDateFieldActive(!dateFieldActive)}
              >
                {dateFieldActive ? <ChevronUp className="h-4 w-4 text-[#374151]" /> : <ChevronDown className="h-4 w-4 text-[#374151]" />}
                <label htmlFor="filter-date" className="text-sm font-semibold text-[#374151]">Date Range</label>
              </div>
            </div>
            {dateFieldActive && (
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#949CA7] pointer-events-none z-10" />
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#949CA7] pointer-events-none z-10" />
                <input
                  type="text"
                  readOnly
                  value={dateRange ? new Date(dateRange).toLocaleDateString() : "Select a date"}
                  className="w-full py-2.5 pl-10 pr-10 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-200"
                  style={{ borderColor: "#E7E7E7" }}
                />
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => {
                    const dateInput = document.getElementById('date-picker') as HTMLInputElement;
                    if (dateInput) {
                      try {
                        // Modern browsers
                        if (typeof dateInput.showPicker === 'function') {
                          dateInput.showPicker();
                        } else {
                          // Fallback for browsers without showPicker
                          dateInput.focus();
                          dateInput.click();
                        }
                      } catch (e) {
                        // Ultimate fallback
                        dateInput.focus();
                        dateInput.click();
                      }
                    }
                  }}
                ></div>
                <input
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
              <div 
                className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg w-full" 
                style={{ 
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, rgba(231, 239, 253, 0.60) 5.99%, rgba(231, 239, 253, 0.40) 86.41%)",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
                onClick={() => setClientFieldActive(!clientFieldActive)}
              >
                {clientFieldActive ? <ChevronUp className="h-4 w-4 text-[#374151]" /> : <ChevronDown className="h-4 w-4 text-[#374151]" />}
                <label className="text-sm font-semibold text-[#374151]">Client Name</label>
              </div>
            </div>
            {clientFieldActive && (
              <>
                <Input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full mb-2" style={{ borderColor: "#E7E7E7" }} />
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {clients.filter((client) => client.name.toLowerCase().includes(searchQuery.toLowerCase())).map((client) => (
                    <div key={client.id} className="flex items-center gap-2">
                      <Checkbox id={`client-${client.id}`} checked={selectedClients.includes(client.id)} onCheckedChange={(checked) => { setSelectedClients(checked ? [...selectedClients, client.id] : selectedClients.filter((id) => id !== client.id)); }} />
                      <label htmlFor={`client-${client.id}`} className="text-xs text-[#394C9D]">{client.name}</label>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Validation Status */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div 
                className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg w-full" 
                style={{ 
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, rgba(231, 239, 253, 0.60) 5.99%, rgba(231, 239, 253, 0.40) 86.41%)",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
                onClick={() => setValidationFieldActive(!validationFieldActive)}
              >
                {validationFieldActive ? <ChevronUp className="h-4 w-4 text-[#374151]" /> : <ChevronDown className="h-4 w-4 text-[#374151]" />}
                <label className="text-sm font-semibold text-[#374151]">Validation Status</label>
              </div>
            </div>
            {validationFieldActive && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="status-success" checked={validationStatus.includes("success")} onCheckedChange={(checked) => { setValidationStatus(checked ? [...validationStatus, "success"] : validationStatus.filter((status) => status !== "success")); }} />
                  <label htmlFor="status-success" className="text-xs text-[#394C9D]">Success</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="status-failed" checked={validationStatus.includes("failed")} onCheckedChange={(checked) => { setValidationStatus(checked ? [...validationStatus, "failed"] : validationStatus.filter((status) => status !== "failed")); }} />
                  <label htmlFor="status-failed" className="text-xs text-[#394C9D]">Failed</label>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  )
}
