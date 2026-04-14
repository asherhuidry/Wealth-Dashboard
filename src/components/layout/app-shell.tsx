"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full bg-[#070b15]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main column — offset by sidebar width on desktop */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden lg:ml-[220px]">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Scrollable content with atmospheric background */}
        <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_80%_50%_at_0%_-10%,rgba(20,184,166,0.10),transparent),radial-gradient(ellipse_60%_40%_at_100%_20%,rgba(59,130,246,0.10),transparent),linear-gradient(180deg,#070b15_0%,#080c18_100%)]">
          {children}
        </main>
      </div>
    </div>
  );
}
