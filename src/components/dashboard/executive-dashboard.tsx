"use client";

import { useState } from "react";
import MetricCard from "./metric-card";
import DebtWidget from "./debt-widget";
import BudgetWidget from "./budget-widget";
import GoalsWidget from "./goals-widget";
import AlertsPanel from "./alerts-panel";
import ActionsPanel from "./actions-panel";
import QuickUpdateDrawer from "./quick-update-drawer";
import {
  executiveMetrics,
  goalItems,
  nextActions,
  topAlerts,
} from "@/data/dashboard-data";
import type { ExecutiveMetrics } from "@/types/finance";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function ExecutiveDashboard() {
  const [metrics, setMetrics] = useState<ExecutiveMetrics>(executiveMetrics);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="px-4 py-8 sm:px-6 xl:px-10">
      <div className="mx-auto max-w-[1400px] space-y-8">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              Executive Dashboard
            </p>
            <h1 className="mt-1.5 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              Portfolio Command Center
            </h1>
            <p className="mt-1.5 text-[13px] text-white/45">
              Wealth snapshot · April 14, 2026
            </p>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-9 items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 text-[13px] font-medium text-white/75 transition hover:bg-white/[0.10] hover:text-white"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-3.5 w-3.5"
            >
              <path d="M8 2v12M2 8h12" strokeLinecap="round" />
            </svg>
            Quick Update
          </button>
        </header>

        {/* ── Executive band: 5 KPI cards ─────────────────────────────── */}
        <section aria-label="Key metrics">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

            {/* Net Worth — featured hero card */}
            <div className="sm:col-span-2 xl:col-span-1">
              <MetricCard
                title="Total Net Worth"
                value={fmt.format(metrics.totalNetWorth)}
                subtitle="Household wealth position"
                delta="+$147k this quarter"
                deltaPositive
                context="Assets minus total liabilities"
                accent="teal"
                featured
              />
            </div>

            <MetricCard
              title="Total Assets"
              value={fmt.format(metrics.totalAssets)}
              subtitle="All accounts"
              context="Liquid + long-term holdings"
              accent="indigo"
            />
            <MetricCard
              title="Total Liabilities"
              value={fmt.format(metrics.totalLiabilities)}
              subtitle="Outstanding obligations"
              context="Loans, cards, revolving debt"
              accent="rose"
            />
            <MetricCard
              title="Monthly Cash Flow"
              value={fmt.format(metrics.monthlyCashFlow)}
              subtitle="Net income"
              context="After all monthly outflows"
              accent="teal"
            />
            <MetricCard
              title="Investable Capital"
              value={fmt.format(metrics.investableCapital)}
              subtitle="Ready for deployment"
              context="Unallocated this month"
              accent="amber"
            />
          </div>
        </section>

        {/* ── Decision widgets ─────────────────────────────────────────── */}
        <section aria-label="Decision widgets">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <DebtWidget
              totalDebt={metrics.totalDebt}
              monthlyDebtPayment={metrics.monthlyDebtPayment}
              totalAssets={metrics.totalAssets}
            />
            <BudgetWidget
              monthlyActualSpend={metrics.monthlyActualSpend}
              monthlyBudgetTarget={metrics.monthlyBudgetTarget}
            />
            <GoalsWidget goals={goalItems} />
          </div>
        </section>

        {/* ── Intelligence layer ───────────────────────────────────────── */}
        <section
          aria-label="Intelligence layer"
          className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        >
          <AlertsPanel alerts={topAlerts} />
          <ActionsPanel actions={nextActions} />
        </section>

      </div>

      {/* ── Quick Update drawer ──────────────────────────────────────── */}
      <QuickUpdateDrawer
        key={String(drawerOpen)}
        isOpen={drawerOpen}
        metrics={metrics}
        onClose={() => setDrawerOpen(false)}
        onApply={setMetrics}
      />
    </div>
  );
}
