import type { MetricItem } from "@/types/finance";

export default function MetricCard({ title, value, change, trend, note }: MetricItem) {
  const trendColor =
    trend === "up"
      ? "text-emerald-400"
      : trend === "down"
      ? "text-rose-400"
      : "text-white/40";

  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "";

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0d1626] p-5 flex flex-col gap-3 hover:border-white/[0.12] transition-colors">
      <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase">
        {title}
      </div>
      <div className="text-[26px] font-semibold tracking-tight text-white tabular-nums leading-none">
        {value}
      </div>
      {(change || note) && (
        <div className="flex items-center gap-1.5 flex-wrap">
          {change && (
            <span className={`text-xs font-medium ${trendColor}`}>
              {trendIcon} {change}
            </span>
          )}
          {note && (
            <span className="text-xs text-white/30">{note}</span>
          )}
        </div>
      )}
    </div>
  );
}

