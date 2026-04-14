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
  const accentBg = isOver ? "from-rose-400/[0.08]" : progress > 85 ? "from-amber-400/[0.08]" : "from-teal-400/[0.07]";

  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d1527]/80 p-6 text-white shadow-[0_18px_42px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accentBg} to-transparent`} />

      <div className="relative space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
            Budget
          </p>
          <div className="mt-3 flex items-baseline gap-2.5">
            <p className="text-[1.9rem] font-semibold tracking-[-0.03em]">
              {fmt.format(monthlyActualSpend)}
            </p>
            <p className="text-lg font-medium text-white/30">
              / {fmt.format(monthlyBudgetTarget)}
            </p>
          </div>
          <p className="mt-1 text-sm text-white/46">Monthly spend vs. target</p>
        </div>

        <div>
          <div className="mb-2.5 flex items-center justify-between">
            <span className={`text-[11px] font-semibold ${statusColor}`}>
              {isOver ? "Over target" : "On track"}
            </span>
            <span className="text-[11px] font-medium text-white/38">{progress}% used</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className={`h-full rounded-full transition-all ${barColor}`}
              style={{ width: `${cappedProgress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5">
          <p className="text-[12px] font-medium text-white/46">
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
        <p className="text-[11px] text-white/34">Tight monthly control keeps deployable capital predictable.</p>
      </div>
    </article>
  );
}
