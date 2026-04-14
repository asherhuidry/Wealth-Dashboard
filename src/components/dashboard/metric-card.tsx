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
  neutral: "from-white/[0.08] to-transparent",
  teal:    "from-teal-300/[0.14] to-transparent",
  amber:   "from-amber-300/[0.14] to-transparent",
  rose:    "from-rose-300/[0.14] to-transparent",
  indigo:  "from-indigo-300/[0.14] to-transparent",
};

const borderMap: Record<Accent, string> = {
  neutral: "border-white/[0.08]",
  teal:    "border-teal-400/[0.18]",
  amber:   "border-amber-400/[0.15]",
  rose:    "border-rose-400/[0.15]",
  indigo:  "border-indigo-400/[0.15]",
};

const bgMap: Record<Accent, string> = {
  neutral: "bg-[#101828]/90",
  teal:    "bg-[#091c1e]/90",
  amber:   "bg-[#1a1407]/90",
  rose:    "bg-[#1c0b12]/90",
  indigo:  "bg-[#0d0f24]/90",
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
        className={`relative overflow-hidden rounded-3xl border ${border} ${bg} p-6 text-white shadow-[0_24px_56px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]`}
      >
        {/* Stronger top gradient for featured */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${gradient}`} />
        {/* Subtle radial bloom */}
        <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-teal-400/[0.07] blur-3xl" />

        <div className="relative flex min-h-[200px] flex-col justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-1.5 text-[13px] font-medium text-white/60">{subtitle}</p>
            ) : null}
          </div>

          <div>
            <p className="text-4xl font-bold tracking-tight sm:text-[2.75rem]">{value}</p>

            {delta ? (
              <p
                className={`mt-2 flex items-center gap-1 text-sm font-semibold ${
                  deltaPositive ? "text-teal-400" : "text-rose-400"
                }`}
              >
                <span>{deltaPositive ? "↑" : "↓"}</span>
                {delta}
              </p>
            ) : null}

            {context ? (
              <p className="mt-2 text-[11px] text-white/35">{context}</p>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`relative overflow-hidden rounded-3xl border ${border} ${bg} p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)]`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${gradient}`} />

      <div className="relative flex min-h-[140px] flex-col justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
            {title}
          </p>
          {subtitle ? (
            <p className="mt-1.5 text-[13px] font-medium text-white/58">{subtitle}</p>
          ) : null}
        </div>

        <div>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>

          {delta ? (
            <p
              className={`mt-1 text-[11px] font-semibold ${
                deltaPositive ? "text-teal-400" : "text-rose-400"
              }`}
            >
              {deltaPositive ? "↑ " : "↓ "}
              {delta}
            </p>
          ) : null}

          {context ? (
            <p className="mt-1.5 text-[11px] text-white/38">{context}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
