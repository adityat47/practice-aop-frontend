'use client';

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { fetchClients, type ClientRef, fetchClientProjects } from "@/services/clients";
import { getUserDetails } from "@/util";
// removed: Add Report button and panel
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>


export function ClientHeader() {
 
  return (
  <div className="flex items-center radius-sm bg-white justify-between px-6 pt-8 pb-6  border-b border-gray-200">
        <div className="flex items-center gap-4 ">
          <h1 className="text-xl font-semibold text-[#000]">Client Management</h1>
          
        </div>
    {/* Add Report action removed */}
  </div>
  );
}
