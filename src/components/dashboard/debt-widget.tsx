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
    <article className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d1527]/80 p-6 text-white shadow-[0_18px_42px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-rose-400/[0.08] to-transparent" />

      <div className="relative space-y-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
            Debt
          </p>
          <p className="mt-3 text-[1.9rem] font-semibold tracking-[-0.03em]">
            {fmt.format(totalDebt)}
          </p>
          <p className="mt-1 text-sm text-white/46">Total outstanding principal</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
              Monthly Payment
            </p>
            <p className="mt-2 text-[15px] font-semibold text-white/86">
              {fmt.format(monthlyDebtPayment)}
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
              Debt / Assets
            </p>
            <p
              className={`mt-2 text-[15px] font-semibold ${
                ratio > 25 ? "text-rose-400" : ratio > 15 ? "text-amber-400" : "text-teal-400"
              }`}
            >
              {ratioDisplay}%
            </p>
          </div>
        </div>

        <div>
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[10px] font-medium text-white/34">Liability exposure</span>
            <span className="text-[10px] font-semibold text-white/46">
              {ratioDisplay}% of assets
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className={`h-full rounded-full transition-all ${barColor}`}
              style={{ width: `${Math.min(ratio, 100)}%` }}
            />
          </div>
          <p className="mt-2.5 text-[11px] text-white/34">Higher than preferred for a stability-first allocation stance.</p>
        </div>
      </div>
    </article>
  );
}
