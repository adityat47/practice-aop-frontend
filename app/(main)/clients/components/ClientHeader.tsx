'use client';

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// removed: Add Report button and panel

export function ClientHeader() {
  const [selectedClient, setSelectedClient] = useState<string>("");

  return (
  <div className="flex items-center radius-sm bg-white justify-between px-6 pt-8 pb-6  border-b border-gray-200">
        <div className="flex items-center gap-4 ">
          <h1 className="text-xl font-semibold text-[#000]">Client Management</h1>
          <Select value={selectedClient} onValueChange={setSelectedClient}>
            <SelectTrigger className="w-[200px] bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <SelectValue placeholder="Select Client" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg">
              <SelectItem value="client1" className="hover:bg-gray-50">Client 1</SelectItem>
              <SelectItem value="client2" className="hover:bg-gray-50">Client 2</SelectItem>
              <SelectItem value="client3" className="hover:bg-gray-50">Client 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
    {/* Add Report action removed */}
  </div>
  );
}
