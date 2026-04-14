// ─── Types ────────────────────────────────────────────────────────────────────

type Accent = "neutral" | "teal" | "amber" | "rose" | "indigo";

type MetricCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  context?: string;
  delta?: string;
  deltaPositive?: boolean;
  accent?: Accent;
  /** Renders the card in a larger, hero layout for Net Worth */
  featured?: boolean;
};

// ─── Accent maps ──────────────────────────────────────────────────────────────

const gradientMap: Record<Accent, string> = {
  neutral: "from-white/[0.06] to-transparent",
  teal: "from-teal-300/[0.12] to-transparent",
  amber: "from-amber-300/[0.12] to-transparent",
  rose: "from-rose-300/[0.12] to-transparent",
  indigo: "from-indigo-300/[0.1] to-transparent",
};

const borderMap: Record<Accent, string> = {
  neutral: "border-white/[0.07]",
  teal: "border-teal-400/[0.14]",
  amber: "border-amber-400/[0.14]",
  rose: "border-rose-400/[0.14]",
  indigo: "border-indigo-400/[0.12]",
};

const bgMap: Record<Accent, string> = {
  neutral: "bg-[#0d1527]/78",
  teal: "bg-[#0d1527]/80",
  amber: "bg-[#101626]/80",
  rose: "bg-[#111422]/80",
  indigo: "bg-[#0d1527]/80",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function MetricCard({
  title,
  value,
  subtitle,
  context,
  delta,
  deltaPositive = true,
  accent = "neutral",
  featured = false,
}: MetricCardProps) {
  const gradient = gradientMap[accent];
  const border   = borderMap[accent];
  const bg       = bgMap[accent];

  if (featured) {
    return (
      <article
        className={`relative overflow-hidden rounded-[28px] border ${border} ${bg} p-6 text-white shadow-[0_28px_64px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl`}
      >
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${gradient}`} />
        <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-teal-400/[0.06] blur-3xl" />

        <div className="relative flex min-h-[188px] flex-col justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/34">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-2 text-[13px] font-medium text-white/58">{subtitle}</p>
            ) : null}
          </div>

          <div>
            <p className="text-[2.7rem] font-bold tracking-[-0.04em] sm:text-[3rem]">{value}</p>

            {delta ? (
              <p
                className={`mt-3 flex items-center gap-1 text-[12px] font-semibold ${
                  deltaPositive ? "text-teal-400" : "text-rose-400"
                }`}
              >
                <span>{deltaPositive ? "↑" : "↓"}</span>
                {delta}
              </p>
            ) : null}

            {context ? (
              <p className="mt-2 text-[11px] text-white/36">{context}</p>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`relative overflow-hidden rounded-[26px] border ${border} ${bg} p-5 text-white shadow-[0_18px_42px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${gradient}`} />

      <div className="relative flex min-h-[132px] flex-col justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/34">
            {title}
          </p>
          {subtitle ? (
            <p className="mt-1.5 text-[12px] font-medium text-white/56">{subtitle}</p>
          ) : null}
        </div>

        <div>
          <p className="text-[1.75rem] font-semibold tracking-[-0.03em]">{value}</p>

          {delta ? (
            <p
              className={`mt-1.5 text-[11px] font-semibold ${
                deltaPositive ? "text-teal-400" : "text-rose-400"
              }`}
            >
              {deltaPositive ? "↑ " : "↓ "}
              {delta}
            </p>
          ) : null}

          {context ? (
            <p className="mt-1.5 text-[11px] text-white/34">{context}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
