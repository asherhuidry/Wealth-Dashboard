import type { ActionItem } from "@/types/finance";

const categoryStyles: Record<
  ActionItem["category"],
  { pill: string; label: string }
> = {
  capital: { pill: "bg-teal-400/10 text-teal-300 border-teal-400/20",     label: "Capital"  },
  debt:    { pill: "bg-rose-400/10 text-rose-300 border-rose-400/20",      label: "Debt"     },
  budget:  { pill: "bg-amber-400/10 text-amber-300 border-amber-400/20",   label: "Budget"   },
  goal:    { pill: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20", label: "Goal"    },
};

export default function ActionsPanel({ actions }: { actions: ActionItem[] }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0a1020]/90 text-white shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <h2 className="text-[15px] font-semibold tracking-tight">Next Best Actions</h2>
          <p className="mt-0.5 text-[12px] text-white/45">Highest-leverage moves this cycle</p>
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-[11px] font-semibold text-white/50">
          {actions.length}
        </span>
      </div>

      {/* Action list */}
      <div className="space-y-2 p-4">
        {actions.map((action, index) => {
          const style = categoryStyles[action.category];
          return (
            <article
              key={action.id}
              className="flex items-start gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
            >
              {/* Priority number */}
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[11px] font-bold text-white/40">
                {index + 1}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[13px] font-medium leading-snug text-white/88">
                    {action.title}
                  </p>
                  <span
                    className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.07em] ${style.pill}`}
                  >
                    {style.label}
                  </span>
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-white/45">
                  {action.detail}
                </p>
              </div>

              {/* Arrow indicator */}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/20"
              >
                <path d="M4 8h8M8.5 4.5L12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </article>
          );
        })}
      </div>
    </section>
  );
}
