type DebtCardProps = {
  totalDebt: number;
  monthlyPayment: number;
  totalAssets: number;
};

export default function DebtCard({ totalDebt, monthlyPayment, totalAssets }: DebtCardProps) {
  const ratio = ((totalDebt / totalAssets) * 100).toFixed(1);

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0d1626] p-5 text-white hover:border-white/[0.12] transition-colors">
      <div className="mb-4">
        <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase mb-2">
          Debt Overview
        </div>
        <div className="text-[26px] font-semibold tracking-tight tabular-nums leading-none">
          ${totalDebt.toLocaleString()}
        </div>
        <div className="text-xs text-white/35 mt-1.5">total outstanding debt</div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase mb-1.5">
            Monthly Payment
          </div>
          <div className="text-sm font-semibold tabular-nums text-white">
            ${monthlyPayment.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase mb-1.5">
            Debt / Assets
          </div>
          <div className="text-sm font-semibold tabular-nums text-amber-400">
            {ratio}%
          </div>
        </div>
      </div>
    </div>
  );
}
