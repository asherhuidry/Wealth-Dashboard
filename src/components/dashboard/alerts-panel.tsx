import { Badge } from "@/components/ui/badge";
import type { AlertItem } from "@/types/finance";

const toneMap: Record<AlertItem["level"], string> = {
  info: "bg-blue-500/10 text-blue-300 border-blue-400/20",
  warning: "bg-amber-500/10 text-amber-300 border-amber-400/20",
  critical: "bg-red-500/10 text-red-300 border-red-400/20",
};

const levelLabel: Record<AlertItem["level"], string> = {
  info: "Info",
  warning: "Warning",
  critical: "Critical",
};

export default function AlertsPanel({ alerts }: { alerts: AlertItem[] }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0d1626] p-5 text-white">
      <div className="mb-4">
        <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase mb-1.5">
          Alerts
        </div>
        <div className="text-base font-semibold text-white">Top Alerts</div>
        <div className="text-xs text-white/40 mt-0.5">High-signal items only</div>
      </div>
      <div className="space-y-2.5">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
          >
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <div className="text-sm font-medium text-white/90">{alert.title}</div>
              <Badge className={toneMap[alert.level]}>{levelLabel[alert.level]}</Badge>
            </div>
            <div className="text-xs text-white/45 leading-relaxed">{alert.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

