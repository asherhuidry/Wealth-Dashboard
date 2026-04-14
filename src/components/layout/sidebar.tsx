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
    <div className="flex h-full flex-col overflow-hidden bg-[#09111d]/72 backdrop-blur-xl">
      <div className="flex h-20 flex-shrink-0 items-center gap-3 border-b border-white/[0.06] px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-[12px] font-bold leading-none text-slate-950 shadow-[0_10px_25px_rgba(45,212,191,0.18)]">
          W
        </div>
        <div>
          <span className="block text-[13px] font-semibold tracking-wide text-white/92">WealthOS</span>
          <span className="block text-[10px] uppercase tracking-[0.16em] text-white/30">Personal Wealth OS</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-6">
            <p className="mb-2 px-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/24">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-current={item.active ? "page" : undefined}
                    className={`group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[13px] font-medium transition-all ${
                      item.active
                        ? "bg-teal-400/[0.1] text-white"
                        : "text-white/44 hover:bg-white/[0.045] hover:text-white/76"
                    }`}
                  >
                    {item.active ? <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-teal-300" /> : null}
                    <span className={item.active ? "text-teal-300" : "text-white/30 group-hover:text-white/58"}>
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

      <div className="flex-shrink-0 border-t border-white/[0.06] px-3 py-4">
        <div className="mb-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/28">Session</p>
          <p className="mt-1 text-[12px] font-medium text-white/78">Family Office View</p>
          <p className="mt-0.5 text-[11px] text-white/38">Last sync completed successfully</p>
        </div>
        <ul className="space-y-px">
          {systemItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[13px] font-medium text-white/38 transition-colors hover:bg-white/[0.045] hover:text-white/75"
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
        className="fixed inset-y-0 left-0 z-30 hidden w-[244px] flex-col border-r border-white/[0.06] bg-[#070c18]/92 lg:flex"
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
            className="absolute inset-y-0 left-0 w-[244px] border-r border-white/[0.06] bg-[#070c18]/96"
          >
            <SidebarContent />
          </aside>
        </div>
      ) : null}
    </>
  );
}
