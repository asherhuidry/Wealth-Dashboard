const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type BudgetWidgetProps = {
  monthlyActualSpend: number;
  monthlyBudgetTarget: number;
};

export default function BudgetWidget({
  monthlyActualSpend,
  monthlyBudgetTarget,
}: BudgetWidgetProps) {
  const progress =
    monthlyBudgetTarget > 0
      ? Math.round((monthlyActualSpend / monthlyBudgetTarget) * 100)
      : 0;
  const remaining = monthlyBudgetTarget - monthlyActualSpend;
  const isOver = remaining < 0;
  const cappedProgress = Math.min(progress, 100);

  const barColor = isOver ? "bg-rose-400" : progress > 85 ? "bg-amber-400" : "bg-teal-400";
  const statusColor = isOver ? "text-rose-400" : progress > 85 ? "text-amber-400" : "text-teal-400";
  const accentBorder = isOver ? "border-rose-400/15" : progress > 85 ? "border-amber-400/15" : "border-teal-400/12";
  const accentBg = isOver ? "from-rose-400/[0.09]" : progress > 85 ? "from-amber-400/[0.09]" : "from-teal-400/[0.07]";

  return (
    <article className={`relative overflow-hidden rounded-3xl border ${accentBorder} bg-[#0d1610]/90 p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.3)]`}>
      {/* Accent gradient */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accentBg} to-transparent`} />

      <div className="relative space-y-5">
        {/* Header */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/45">
            Budget
          </p>
          <div className="mt-3 flex items-baseline gap-2">
            <p className="text-3xl font-semibold tracking-tight">
              {fmt.format(monthlyActualSpend)}
            </p>
            <p className="text-lg font-medium text-white/35">
              / {fmt.format(monthlyBudgetTarget)}
            </p>
          </div>
          <p className="mt-1 text-sm text-white/50">Monthly spend vs. target</p>
        </div>

        {/* Progress bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className={`text-[11px] font-semibold ${statusColor}`}>
              {isOver ? "Over target" : "On track"}
            </span>
            <span className="text-[11px] font-medium text-white/40">{progress}% used</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className={`h-full rounded-full transition-all ${barColor}`}
              style={{ width: `${cappedProgress}%` }}
            />
          </div>
        </div>

        {/* Remaining */}
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <p className="text-[12px] font-medium text-white/50">
            {isOver ? "Overrun" : "Remaining"}
          </p>
          <p
            className={`text-[15px] font-semibold ${
              isOver ? "text-rose-400" : "text-white/85"
            }`}
          >
            {fmt.format(Math.abs(remaining))}
          </p>
        </div>
      </div>
    </article>
  );
}
