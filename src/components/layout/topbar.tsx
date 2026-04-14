type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-14 flex-shrink-0 items-center gap-3 border-b border-white/[0.06] bg-[#070b15]/92 px-4 backdrop-blur-md sm:px-5">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-white/45 transition hover:bg-white/[0.07] hover:text-white/80 lg:hidden"
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <path d="M3 5.5h14M3 10h14M3 14.5h14" strokeLinecap="round" />
        </svg>
      </button>

      {/* Breadcrumb — desktop only */}
      <nav aria-label="Breadcrumb" className="hidden items-center gap-1.5 lg:flex">
        <span className="text-[13px] text-white/28">WealthOS</span>
        <span className="text-white/20">/</span>
        <span className="text-[13px] font-medium text-white/70">Dashboard</span>
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search input */}
      <div className="relative hidden w-44 sm:block xl:w-60">
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

      {/* Action icons */}
      <div className="flex items-center gap-0.5">
        {/* Sync */}
        <button
          type="button"
          aria-label="Sync"
          title="Sync"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/35 transition hover:bg-white/[0.06] hover:text-white/65"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path d="M13.5 6A6 6 0 1 0 14 9" strokeLinecap="round" />
            <path d="M14 4.5V7h-2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Help */}
        <button
          type="button"
          aria-label="Help"
          title="Help"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/35 transition hover:bg-white/[0.06] hover:text-white/65"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <circle cx="8" cy="8" r="6.5" />
            <path d="M6.25 6.25a2 2 0 0 1 3.75.75c0 1.5-2 2-2 3.5" strokeLinecap="round" />
            <circle cx="8" cy="12.25" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </button>

        {/* Profile avatar */}
        <button
          type="button"
          aria-label="Account"
          title="Account"
          className="ml-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-[11px] font-bold text-slate-950 transition hover:brightness-110"
        >
          A
        </button>
      </div>
    </header>
  );
}
