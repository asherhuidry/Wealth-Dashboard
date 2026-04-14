"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-full overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.08),transparent_26%),radial-gradient(circle_at_100%_18%,rgba(99,102,241,0.08),transparent_24%)]" />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden lg:ml-[244px]">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="relative flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
