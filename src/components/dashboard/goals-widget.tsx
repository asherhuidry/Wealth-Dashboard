import type { GoalItem } from "@/types/finance";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function GoalsWidget({ goals }: { goals: GoalItem[] }) {
  const displayGoals = goals.slice(0, 3);

  return (
    <article className="relative overflow-hidden rounded-3xl border border-indigo-400/12 bg-[#0b0d1f]/90 p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      {/* Accent gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-400/[0.09] to-transparent" />

      <div className="relative space-y-5">
        {/* Header */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/45">
            Goals
          </p>
          <p className="mt-1 text-sm text-white/50">Progress toward top targets</p>
        </div>

        {/* Goal list */}
        <div className="space-y-4">
          {displayGoals.map((goal) => {
            const remaining = Math.max(goal.target - goal.current, 0);
            const barColor =
              goal.progress >= 90
                ? "bg-teal-400"
                : goal.progress >= 70
                ? "bg-indigo-400"
                : "bg-amber-400";

            return (
              <div key={goal.id}>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="truncate text-[13px] font-medium text-white/80">
                    {goal.name}
                  </span>
                  <span
                    className={`flex-shrink-0 text-[12px] font-semibold ${
                      goal.progress >= 90 ? "text-teal-400" : "text-white/60"
                    }`}
                  >
                    {goal.progress}%
                  </span>
                </div>

                {/* Bar */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className={`h-full rounded-full transition-all ${barColor}`}
                    style={{ width: `${Math.min(goal.progress, 100)}%` }}
                  />
                </div>

                {/* Context */}
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-white/35">
                    {fmt.format(goal.current)}
                  </span>
                  <span className="text-[10px] text-white/25">
                    {fmt.format(remaining)} to go
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
