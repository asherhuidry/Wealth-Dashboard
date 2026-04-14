"use client";

import { useEffect } from "react";

// ─── Icon primitives ──────────────────────────────────────────────────────────

function IconDashboard() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.5" />
      <rect x="11.5" y="2.5" width="6" height="6" rx="1.5" />
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.5" />
      <rect x="11.5" y="11.5" width="6" height="6" rx="1.5" />
    </svg>
  );
}

function IconAssets() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <path d="M3 15h14" strokeLinecap="round" />
      <path d="M5 15V10" strokeLinecap="round" />
      <path d="M8 15V7" strokeLinecap="round" />
      <path d="M11 15V9" strokeLinecap="round" />
      <path d="M14 15V5" strokeLinecap="round" />
    </svg>
  );
}

function IconLiabilities() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M10 6.5v4l2.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCashFlow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <path d="M2.5 10h15" strokeLinecap="round" />
      <path d="M13 5.5l4.5 4.5-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 5.5L2.5 10 7 14.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInvestments() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <path d="M2.5 14.5l5-5.5 4 3.5 6-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4.5h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInsurance() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <path d="M10 2L4 5v5c0 4.5 3 7 6 8.5C13 17 16 14.5 16 10V5l-6-3z" strokeLinejoin="round" />
    </svg>
  );
}

function IconGoals() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <circle cx="10" cy="10" r="7.5" />
      <circle cx="10" cy="10" r="4" />
      <circle cx="10" cy="10" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconDecisions() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <path d="M10 2.5v6" strokeLinecap="round" />
      <path d="M7 5.5L10 2.5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11.5l-2.5 3h15L15 11.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 17.5l2.5-6 2.5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconReports() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <rect x="3.5" y="2.5" width="13" height="15" rx="2" />
      <path d="M7 7.5h6M7 11h6M7 14.5h3.5" strokeLinecap="round" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[18px] w-[18px] flex-shrink-0">
      <circle cx="10" cy="10" r="2.5" />
      <path d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18M4.4 4.4l1.1 1.1M14.5 14.5l1.1 1.1M15.6 4.4l-1.1 1.1M5.5 14.5l-1.1 1.1" strokeLinecap="round" />
    </svg>
  );
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: <IconDashboard />, active: true },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { id: "assets", label: "Assets", icon: <IconAssets /> },
      { id: "liabilities", label: "Liabilities", icon: <IconLiabilities /> },
      { id: "cashflow", label: "Cash Flow", icon: <IconCashFlow /> },
      { id: "investments", label: "Investments", icon: <IconInvestments /> },
      { id: "insurance", label: "Insurance", icon: <IconInsurance /> },
    ],
  },
  {
    label: "Planning",
    items: [
      { id: "goals", label: "Goals", icon: <IconGoals /> },
      { id: "decisions", label: "Decisions", icon: <IconDecisions /> },
      { id: "reports", label: "Reports", icon: <IconReports /> },
    ],
  },
];

const systemItems: NavItem[] = [
  { id: "settings", label: "Settings", icon: <IconSettings /> },
];

// ─── Internal content ─────────────────────────────────────────────────────────

function SidebarContent() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Brand */}
      <div className="flex h-14 flex-shrink-0 items-center gap-3 border-b border-white/[0.06] px-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-[11px] font-bold leading-none text-slate-950">
          W
        </div>
        <span className="text-[13px] font-semibold tracking-wide text-white/90">WealthOS</span>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto px-2.5 py-4">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/28">
              {group.label}
            </p>
            <ul className="space-y-px">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-current={item.active ? "page" : undefined}
                    className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13px] font-medium transition-colors ${
                      item.active
                        ? "bg-teal-400/[0.13] text-teal-300"
                        : "text-white/45 hover:bg-white/[0.05] hover:text-white/75"
                    }`}
                  >
                    <span className={item.active ? "text-teal-400" : "text-white/35"}>
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* System */}
      <div className="flex-shrink-0 border-t border-white/[0.06] px-2.5 py-3">
        <ul className="space-y-px">
          {systemItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13px] font-medium text-white/35 transition-colors hover:bg-white/[0.05] hover:text-white/65"
              >
                <span className="text-white/30">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Desktop: fixed sidebar */}
      <aside
        aria-label="Main navigation"
        className="fixed inset-y-0 left-0 z-30 hidden w-[220px] flex-col border-r border-white/[0.06] bg-[#070b15] lg:flex"
      >
        <SidebarContent />
      </aside>

      {/* Mobile: slide-over */}
      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <aside
            aria-label="Main navigation"
            className="absolute inset-y-0 left-0 w-[220px] border-r border-white/[0.06] bg-[#070b15]"
          >
            <SidebarContent />
          </aside>
        </div>
      ) : null}
    </>
  );
}
