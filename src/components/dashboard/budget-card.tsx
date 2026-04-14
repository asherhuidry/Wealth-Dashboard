type BudgetCardProps = {
  target: number;
  actual: number;
};

export default function BudgetCard({ target, actual }: BudgetCardProps) {
  const pct = Math.round((actual / target) * 100);
  const remaining = target - actual;
  const isOver = actual > target;
  const barWidth = Math.min(pct, 100);

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0d1626] p-5 text-white hover:border-white/[0.12] transition-colors">
      <div className="mb-4">
        <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase mb-2">
          Monthly Budget
        </div>
        <div className="flex items-baseline gap-2">
          <div className="text-[26px] font-semibold tracking-tight tabular-nums leading-none">
            ${actual.toLocaleString()}
          </div>
          <div className="text-sm text-white/35 tabular-nums">
            / ${target.toLocaleString()}
          </div>
        </div>
        <div className="text-xs text-white/35 mt-1.5">April 2026 spending</div>
      </div>

      <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden mb-3">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isOver ? "bg-rose-500" : "bg-emerald-500"
          }`}
          style={{ width: `${barWidth}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-widest text-white/35 uppercase">
          {pct}% used
        </span>
        <span
          className={`text-xs font-medium tabular-nums ${
            isOver ? "text-rose-400" : "text-emerald-400"
          }`}
        >
          {isOver
            ? `$${Math.abs(remaining).toLocaleString()} over budget`
            : `$${remaining.toLocaleString()} remaining`}
        </span>
      </div>
    </div>
  );
}
