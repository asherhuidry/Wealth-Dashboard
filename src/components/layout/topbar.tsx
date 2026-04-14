type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 flex-shrink-0 items-center gap-3 border-b border-white/[0.06] bg-[#09111d]/78 px-4 backdrop-blur-xl sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/45 transition hover:bg-white/[0.07] hover:text-white/80 lg:hidden"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <path d="M3 5.5h14M3 10h14M3 14.5h14" strokeLinecap="round" />
        </svg>
      </button>

      <div className="hidden min-w-0 flex-1 items-center gap-5 lg:flex">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/28">WealthOS</p>
          <div className="mt-0.5 flex items-center gap-2 text-sm text-white/68">
            <span className="font-medium text-white/86">Dashboard</span>
            <span className="text-white/18">•</span>
            <span className="text-white/42">Updated 2m ago</span>
          </div>
        </div>

        <div className="relative max-w-[460px] flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-white/30">
              <circle cx="6.5" cy="6.5" r="5" />
              <path d="M10.5 10.5l3 3" strokeLinecap="round" />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search or ask: should I pay debt or invest?"
            aria-label="Search dashboard"
            readOnly
            className="h-10 w-full cursor-text rounded-2xl border border-white/[0.08] bg-white/[0.04] pl-10 pr-24 text-sm text-white/70 outline-none placeholder:text-white/28 transition hover:border-white/[0.14] hover:bg-white/[0.055]"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/38">
            Command
          </span>
        </div>
      </div>

      <div className="flex-1 lg:hidden" />

      <div className="relative hidden w-44 sm:block lg:hidden xl:w-60">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-white/30">
            <circle cx="6.5" cy="6.5" r="5" />
            <path d="M10.5 10.5l3 3" strokeLinecap="round" />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search  ⌘K"
          aria-label="Search dashboard"
          readOnly
          className="h-8 w-full cursor-text rounded-lg border border-white/[0.07] bg-white/[0.03] pl-8 pr-3 text-xs text-white/35 outline-none placeholder:text-white/28 transition hover:border-white/15 hover:bg-white/[0.05]"
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/46 xl:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          Portfolio synced
        </div>

        <button
          type="button"
          aria-label="Sync"
          title="Sync"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/35 transition hover:bg-white/[0.07] hover:text-white/72"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path d="M13.5 6A6 6 0 1 0 14 9" strokeLinecap="round" />
            <path d="M14 4.5V7h-2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Help"
          title="Help"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/35 transition hover:bg-white/[0.07] hover:text-white/72"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <circle cx="8" cy="8" r="6.5" />
            <path d="M6.25 6.25a2 2 0 0 1 3.75.75c0 1.5-2 2-2 3.5" strokeLinecap="round" />
            <circle cx="8" cy="12.25" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Account"
          title="Account"
          className="ml-1 flex h-10 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] pl-1 pr-3 text-left transition hover:bg-white/[0.07]"
        >
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-[11px] font-bold text-slate-950">A</span>
          <span className="hidden text-[11px] leading-tight text-white/62 sm:block">
            <span className="block font-semibold text-white/84">Asher</span>
            <span className="block">Personal cockpit</span>
          </span>
        </button>
      </div>
    </header>
  );
}
