import type React from "react";
import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import AuthProvider from "@/util/authProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <AuthProvider>
    <div
      className={cn(
        "md:grid",
        "md:grid-cols-[192px_1fr]",
        // Gradient background across the app content area
        "min-h-screen sidebar-gradient"
      )}
    >
      {/* Static sidebar on md+ */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

  <main className="flex min-h-screen flex-col overflow-hidden rounded-tl-lg rounded-bl-lg bg-white shadow-md">
        {children}
      </main>
    </div>
    </AuthProvider>
  );
}
