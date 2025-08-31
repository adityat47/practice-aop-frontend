"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "@/components/ui/icons"

type Row = {
  client: string
  project: string
  report: string
  filename: string
  date: string
  time: string
  status: "Success" | "Failed"
}

const rows: Row[] = [
  {
    client: "Compex",
    project: "Compex FE",
    report: "Daily Productivity",
    filename: "Compex_CX_Production.xlsm",
    date: "01-15-2025",
    time: "09:12 AM",
    status: "Success",
  },
  {
    client: "Compex",
    project: "Compex FE",
    report: "Completes",
    filename: "Compex_FE_Completes.xlsm",
    date: "01-14-2025",
    time: "10:05 AM",
    status: "Success",
  },
  {
    client: "Compex",
    project: "Compex CS",
    report: "Orders Worked",
    filename: "Compex_FE_Orders.xlsm",
    date: "01-13-2025",
    time: "11:00 AM",
    status: "Success",
  },
  {
    client: "Compex",
    project: "Compex TLC",
    report: "Total Contacts",
    filename: "Compex_FE_Contacts.xlsm",
    date: "01-12-2025",
    time: "12:14 PM",
    status: "Failed",
  },
  {
    client: "Compex: QE",
    project: "Compex QE",
    report: "QE Inventory",
    filename: "Compex_FE_Inventory.xlsm",
    date: "01-11-2025",
    time: "01:39 PM",
    status: "Failed",
  },
]

export function FilesTable() {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto">
        <div className="rounded-lg border border-[#E7E7E7] bg-white">
          <Table className="w-full">
            <TableCaption className="sr-only">Uploaded files</TableCaption>
            <TableHeader>
              <TableRow className="border-b border-[#EFF0F3]">
                <TableHead className="w-8 py-4 pl-6">
                  <Checkbox aria-label="Select all" />
                </TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Clients</TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Projects</TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Reports</TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Filenames</TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Date</TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Time</TableHead>
                <TableHead className="py-4 font-medium text-[#949CA7]">Validation Status</TableHead>
                <TableHead className="py-4 pr-6 text-right font-medium text-[#949CA7]">Error Log</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.map((r, i) => (
                <TableRow
                  key={i}
                  className={`${
                    r.filename === "Compex_FE_Completes.xlsm"
                      ? "bg-[#F3F7FE]"
                      : "bg-white hover:bg-[#F3F7FE]"
                  } transition-colors`}
                >
                  <TableCell className="py-4 pl-6">
                    <Checkbox aria-label={`Select row ${i + 1}`} />
                  </TableCell>
                  <TableCell className="py-4 text-[#555753]">{r.client}</TableCell>
                  <TableCell className="py-4 text-[#555753]">{r.project}</TableCell>
                  <TableCell className="py-4 text-[#555753]">{r.report}</TableCell>
                  <TableCell 
                    className="max-w-[260px] py-4 text-[#555753] truncate"
                    title={r.filename}
                  >
                    {r.filename}
                  </TableCell>
                  <TableCell className="py-4 text-[#555753]">{r.date}</TableCell>
                  <TableCell className="py-4 text-[#555753]">{r.time}</TableCell>
                  <TableCell className="py-4">
                    {r.status === "Success" ? (
                      <span
                        className="inline-flex items-center px-4 py-1 text-xs font-medium text-white"
                        style={{
                          borderRadius: "21px",
                          backgroundColor: "#58C681",
                        }}
                      >
                        Success
                      </span>
                    ) : (
                      <span
                        className="inline-flex items-center px-4 py-1 text-xs font-medium text-white"
                        style={{
                          borderRadius: "21px",
                          backgroundColor: "#ED7C63",
                        }}
                      >
                        Failed
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="py-4 pr-6 text-right">
                    <button
                      className="rounded p-2 hover:bg-[#F3F7FE]"
                      aria-label="Download error log"
                    >
                      <DownloadIcon className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination controls - separate from table */}
      <div className="flex flex-col gap-3 px-1 py-2 text-sm md:flex-row md:items-center md:justify-between text-[#949CA7]">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select
            className="rounded-md border border-[#E7E7E7] bg-white px-2 py-1"
            aria-label="Rows per page"
            defaultValue="5"
          >
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>Showing 1 to 05 of 147 results</div>

        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E7E7] text-[#555753] hover:bg-[#F3F7FE]"
            aria-label="Previous page"
          >
            {"<"}
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[#394C9D] text-white"
            aria-label="Page 1"
          >
            1
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E7E7] text-[#555753] hover:bg-[#F3F7FE]"
            aria-label="Page 2"
          >
            2
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E7E7] text-[#555753] hover:bg-[#F3F7FE]"
            aria-label="Page 3"
          >
            3
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E7E7] text-[#555753] hover:bg-[#F3F7FE]"
            aria-label="Next page"
          >
            {">"}
          </button>
        </nav>
      </div>
    </div>
  )
}
