import type { AlertItem } from "@/types/finance";

// Sort order: critical → warning → info
const levelOrder: Record<AlertItem["level"], number> = {
  critical: 0,
  warning:  1,
  info:     2,
};

const levelStyles: Record<
  AlertItem["level"],
  { pill: string; dot: string; card: string }
> = {
  critical: {
    pill: "bg-rose-500/10 text-rose-300 border-rose-400/25",
    dot:  "bg-rose-400",
    card: "border-rose-400/[0.12] bg-rose-400/[0.03]",
  },
  warning: {
    pill: "bg-amber-500/10 text-amber-300 border-amber-400/25",
    dot:  "bg-amber-400",
    card: "border-amber-400/[0.10] bg-amber-400/[0.025]",
  },
  info: {
    pill: "bg-blue-500/10 text-blue-300 border-blue-400/20",
    dot:  "bg-blue-400",
    card: "border-white/[0.07] bg-white/[0.025]",
  },
};

const levelLabel: Record<AlertItem["level"], string> = {
  critical: "Critical",
  warning:  "Warning",
  info:     "Info",
};

export default function AlertsPanel({ alerts }: { alerts: AlertItem[] }) {
  const sorted = [...alerts].sort(
    (a, b) => levelOrder[a.level] - levelOrder[b.level]
  );

  return (
    <section className="overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0a1020]/90 text-white shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <h2 className="text-[15px] font-semibold tracking-tight">Top Alerts</h2>
          <p className="mt-0.5 text-[12px] text-white/45">High-signal items, sorted by severity</p>
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-[11px] font-semibold text-white/50">
          {sorted.length}
        </span>
      </div>

      {/* Alert list */}
      <div className="space-y-2 p-4">
        {sorted.map((alert) => {
          const styles = levelStyles[alert.level];
          return (
            <article
              key={alert.id}
              className={`rounded-2xl border p-4 ${styles.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  {/* Severity dot */}
                  <span
                    className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${styles.dot}`}
                  />
                  <div>
                    <p className="text-[13px] font-medium leading-snug text-white/88">
                      {alert.title}
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/45">
                      {alert.detail}
                    </p>
                  </div>
                </div>
                <span
                  className={`flex-shrink-0 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${styles.pill}`}
                >
                  {levelLabel[alert.level]}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
