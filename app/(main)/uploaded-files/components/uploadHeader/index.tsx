"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MenuIcon, SearchIcon, FilterIcon, ProfileIcon, DownloadIcon } from "@/components/ui/icons"
import { RefreshCw } from "lucide-react"

type Props = { 
  onOpenSidebar: () => void 
  onOpenFilter: () => void
}

export function HeaderBar({ onOpenSidebar, onOpenFilter }: Props) {

  return (
    <header
      className="sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 "
    >
      <div className="flex items-center justify-between gap-3 px-3 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open sidebar" onClick={onOpenSidebar}>
            <MenuIcon className="h-5 w-5" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold leading-none md:text-base text-balance">Uploaded Files</h1>
            
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#949CA7]" >
              Updated 1 hour ago
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Reload"
              className="border"
              
            >
              <RefreshCw className="h-5 w-5 text-[#555753]" />
            </Button>
          </div>

          <div className="relative hidden sm:block">
            <SearchIcon
              className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 "
              
            />
            <Input
              className="w-[220px] pl-8 border-[#E7E7E7] bg-white text-black"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <Button
            variant="outline"
            className="hidden sm:inline-flex bg-transparent border-[#E7E7E7] text-[#555753]"
            aria-label="Filter"
            onClick={onOpenFilter}
          >
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter
          </Button>

          <Button
            variant="outline"
            className="hidden sm:inline-flex bg-transparent border-[#E7E7E7] text-[#555753]"
            aria-label="Download"
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Profile"
            className="border border-[#E7E7E7]"
          >
            <ProfileIcon className="h-6 w-6 text-[#555753]" />
          </Button>
        </div>
      </div>
    </header>
  )
}
