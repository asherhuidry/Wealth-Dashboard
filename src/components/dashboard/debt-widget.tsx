const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type DebtWidgetProps = {
  totalDebt: number;
  monthlyDebtPayment: number;
  totalAssets: number;
};

export default function DebtWidget({
  totalDebt,
  monthlyDebtPayment,
  totalAssets,
}: DebtWidgetProps) {
  const ratio = totalAssets > 0 ? (totalDebt / totalAssets) * 100 : 0;
  const ratioDisplay = ratio.toFixed(1);
  const barColor =
    ratio > 30 ? "bg-rose-400" : ratio > 20 ? "bg-amber-400" : "bg-teal-400";

  return (
    <article className="relative overflow-hidden rounded-3xl border border-rose-400/15 bg-[#18090f]/90 p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      {/* Accent gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-rose-400/[0.09] to-transparent" />

      <div className="relative space-y-5">
        {/* Header */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/45">
            Debt
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight">
            {fmt.format(totalDebt)}
          </p>
          <p className="mt-1 text-sm text-white/50">Total outstanding principal</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
              Monthly Payment
            </p>
            <p className="mt-1.5 text-[15px] font-semibold text-white/85">
              {fmt.format(monthlyDebtPayment)}
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">
              Debt / Assets
            </p>
            <p
              className={`mt-1.5 text-[15px] font-semibold ${
                ratio > 25 ? "text-rose-400" : ratio > 15 ? "text-amber-400" : "text-teal-400"
              }`}
            >
              {ratioDisplay}%
            </p>
          </div>
        </div>

        {/* Ratio bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-medium text-white/35">Liability exposure</span>
            <span className="text-[10px] font-semibold text-white/50">
              {ratioDisplay}% of assets
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className={`h-full rounded-full transition-all ${barColor}`}
              style={{ width: `${Math.min(ratio, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
