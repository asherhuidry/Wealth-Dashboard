import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AlertItem } from "@/types/finance";

const toneMap: Record<AlertItem["level"], string> = {
  info: "bg-blue-500/10 text-blue-300 border-blue-400/20",
  warning: "bg-amber-500/10 text-amber-300 border-amber-400/20",
  critical: "bg-red-500/10 text-red-300 border-red-400/20",
};

export default function AlertsPanel({ alerts }: { alerts: AlertItem[] }) {
  return (
    <Card className="border-white/10 bg-[#0d1626] p-5 text-white shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">Top Alerts</div>
          <div className="text-sm text-white/50">High-signal items only</div>
        </div>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="font-medium text-white/90">{alert.title}</div>
              <Badge className={toneMap[alert.level]}>{alert.level}</Badge>
            </div>
            <div className="text-sm text-white/55">{alert.detail}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
