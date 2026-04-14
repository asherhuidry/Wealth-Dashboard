import type { GoalItem } from "@/types/finance";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function GoalsWidget({ goals }: { goals: GoalItem[] }) {
  const displayGoals = goals.slice(0, 3);

  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d1527]/80 p-6 text-white shadow-[0_18px_42px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-400/[0.08] to-transparent" />

      <div className="relative space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
            Goals
          </p>
          <p className="mt-1 text-sm text-white/46">Progress toward top targets</p>
        </div>

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
              <div key={goal.id} className="rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="truncate text-[13px] font-medium text-white/82">
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

                <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className={`h-full rounded-full transition-all ${barColor}`}
                    style={{ width: `${Math.min(goal.progress, 100)}%` }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-white/36">
                    {fmt.format(goal.current)}
                  </span>
                  <span className="text-[10px] text-white/28">
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
