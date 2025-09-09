import React from "react";
import { Panel } from "@/components/panel";

export function ClientBody() {
  return (
    <div className="w-full min-h-screen px-6 pb-8">
      <Panel>
        <div className="flex items-center gap-4 px-6 pt-6 pb-2">
          <input
            type="text"
            placeholder="Search Project..."
            className="w-64 rounded-md border border-[#E7E7E7] bg-[#F3F7FE] px-3 py-2 text-sm text-[#555753]"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b  border-[#EFF0F3] text-[#949CA7]">
                <th className="py-3 px-6 font-medium text-left">Projects</th>
                <th className="py-3 px-4 font-medium text-left">Reports</th>
                <th className="py-3 px-4 font-medium text-left">Time to pull</th>
                <th className="py-3 px-4 font-medium text-left">Frequency</th>
                <th className="py-3 px-4 font-medium text-left">S3 Path</th>
                <th className="py-3 px-4 font-medium text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="py-8 text-center text-[#949CA7]">NO DATA CURRENTLY</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
