"use client";
import React, { useEffect, useState } from "react";
import { fetchProjects } from "@/services/clients";
import { Panel } from "@/components/panel";
import { Result } from "postcss";

export function ClientBody() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        // fetch all Projects
        const result = await fetchProjects(1);
        console.log("✅ **************Projects for client", result);
        setProjects(result.data.data); // ⬅️ save into state
      } catch (err) {
        console.error("❌ Error fetching data:", err);
      }
    }
    load();
  }, []);

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
              <tr className="border-b border-[#EFF0F3] text-[#949CA7]">
                <th className="py-3 px-6 font-medium text-left">Projects</th>
                <th className="py-3 px-4 font-medium text-left">Reports</th>
                <th className="py-3 px-4 font-medium text-left">Time to pull</th>
                <th className="py-3 px-4 font-medium text-left">Frequency</th>
                <th className="py-3 px-4 font-medium text-left">S3 Path</th>
                <th className="py-3 px-4 font-medium text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    No projects found
                  </td>
                </tr>
              ) : (
                projects.map((p) => (
                  <tr key={p.report_id} className="border-b last:border-b-0">
                    <td className="py-3 px-6">{p.project_name ?? `Project ${p.id}`}</td>
                    <td className="py-3 px-4">{p.report_name ?? "—"}</td>
                    <td className="py-3 px-4">{p.time_to_pull ?? "—"}</td>
                    <td className="py-3 px-4">{p.frequency ?? "—"}</td>
                    <td className="py-3 px-4">{p.s3_path ?? "—"}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:underline">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
