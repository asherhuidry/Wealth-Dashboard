"use client";

import { useEffect, useRef, useState } from "react";
import type { ExecutiveMetrics } from "@/types/finance";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

// ─── Field definitions ────────────────────────────────────────────────────────

type Field = {
  key: Exclude<keyof ExecutiveMetrics, "totalNetWorth">;
  label: string;
  group: string;
};

const fields: Field[] = [
  { key: "totalAssets", label: "Total Assets", group: "Position" },
  { key: "totalLiabilities", label: "Total Liabilities", group: "Position" },
  { key: "monthlyCashFlow", label: "Monthly Cash Flow", group: "Cash Flow" },
  { key: "investableCapital", label: "Investable Capital", group: "Cash Flow" },
  { key: "totalDebt", label: "Total Debt", group: "Debt" },
  { key: "monthlyDebtPayment", label: "Monthly Debt Payment", group: "Debt" },
  { key: "monthlyBudgetTarget", label: "Budget Target", group: "Budget" },
  { key: "monthlyActualSpend", label: "Actual Spend", group: "Budget" },
];

const fieldGroups = fields.reduce<Record<string, Field[]>>((acc, f) => {
  acc[f.group] = [...(acc[f.group] ?? []), f];
  return acc;
}, {});

// ─── Component ────────────────────────────────────────────────────────────────

type Props = {
  isOpen: boolean;
  metrics: ExecutiveMetrics;
  onClose: () => void;
  onApply: (metrics: ExecutiveMetrics) => void;
};

export default function QuickUpdateDrawer({ isOpen, metrics, onClose, onApply }: Props) {
  const [draft, setDraft] = useState<ExecutiveMetrics>(metrics);
  const panelRef = useRef<HTMLElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Focus panel when opened for accessibility
  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  const update = (key: Exclude<keyof ExecutiveMetrics, "totalNetWorth">, val: string) => {
    const n = Number(val);
    const value = Number.isFinite(n) ? n : 0;
    setDraft((prev) => {
      const next = { ...prev, [key]: value };
      // Auto-derive Net Worth from Assets − Liabilities
      next.totalNetWorth = next.totalAssets - next.totalLiabilities;
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply(draft);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close Quick Update"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
      />

      {/* Drawer panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Quick Update"
        tabIndex={-1}
        className="relative z-10 flex h-full w-full max-w-[420px] flex-col overflow-hidden border-l border-white/[0.07] bg-[#070c18] outline-none shadow-[-48px_0_80px_rgba(0,0,0,0.55)]"
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-white/[0.07] px-6 py-5">
          <div>
            <h2 className="text-[18px] font-semibold tracking-tight text-white">
              Quick Update
            </h2>
            <p className="mt-0.5 text-xs text-white/45">
              Local state only — no data is saved or sent.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white/40 transition hover:bg-white/[0.07] hover:text-white"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4">
              <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Derived Net Worth preview */}
        <div className="flex-shrink-0 border-b border-white/[0.07] bg-teal-400/[0.04] px-6 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Derived Net Worth
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-teal-300">
            {fmt.format(draft.totalNetWorth)}
          </p>
          <p className="mt-0.5 text-[11px] text-white/35">
            Auto-calculated from Assets − Liabilities
          </p>
        </div>

        {/* Form body */}
        <form
          id="quick-update-form"
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 py-5"
        >
          <div className="space-y-6">
            {Object.entries(fieldGroups).map(([groupName, groupFields]) => (
              <div key={groupName}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  {groupName}
                </p>
                <div className="space-y-3">
                  {groupFields.map((field) => (
                    <label key={field.key} className="block">
                      <span className="mb-1.5 block text-[12px] font-medium text-white/60">
                        {field.label}
                      </span>
                      <input
                        type="number"
                        step="1"
                        value={draft[field.key]}
                        onChange={(e) => update(field.key, e.target.value)}
                        className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-teal-400/40 focus:bg-white/[0.07]"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </form>

        {/* Footer */}
        <div className="flex flex-shrink-0 items-center justify-between gap-3 border-t border-white/[0.07] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-xl border border-white/[0.1] px-5 text-sm font-medium text-white/55 transition hover:bg-white/[0.06] hover:text-white/80"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="quick-update-form"
            className="h-10 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 px-6 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Apply Update
          </button>
        </div>
      </aside>
    </div>
  );
}
