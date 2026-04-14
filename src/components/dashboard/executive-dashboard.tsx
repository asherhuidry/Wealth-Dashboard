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
  const liabilitiesRatio = Math.round((metrics.totalLiabilities / metrics.totalAssets) * 100);
  const investableCoverage = Math.round((metrics.investableCapital / metrics.monthlyCashFlow) * 10) / 10;

  return (
    <div className="px-4 py-8 sm:px-6 xl:px-10">
      <div className="mx-auto max-w-[1440px] space-y-8">

        <header className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/28">
              Executive Dashboard
            </p>
            <h1 className="mt-2 text-[2rem] font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
              Portfolio Command Center
            </h1>
            <p className="mt-2 max-w-2xl text-[13px] text-white/44">
              Calm, high-signal view of balance sheet strength, cash deployment room, and the decisions that matter now.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/46">Updated April 14, 2026</span>
              <span className="rounded-full border border-teal-400/[0.16] bg-teal-400/[0.06] px-3 py-1.5 text-[11px] text-teal-300">Synced 2 minutes ago</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-10 items-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 text-[13px] font-medium text-white/78 transition hover:bg-white/[0.09] hover:text-white"
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

        <section aria-label="Key metrics">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:grid-cols-12">
            <div className="md:col-span-6 xl:col-span-4">
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

            <div className="md:col-span-3 xl:col-span-2">
              <MetricCard
                title="Total Assets"
                value={fmt.format(metrics.totalAssets)}
                subtitle="All accounts"
                delta="Core position strong"
                context="Liquid + long-term holdings"
                accent="indigo"
              />
            </div>
            <div className="md:col-span-3 xl:col-span-2">
              <MetricCard
                title="Total Liabilities"
                value={fmt.format(metrics.totalLiabilities)}
                subtitle="Outstanding obligations"
                delta={`${liabilitiesRatio}% of assets`}
                deltaPositive={false}
                context="Loans, cards, revolving debt"
                accent="rose"
              />
            </div>
            <div className="md:col-span-3 xl:col-span-2">
              <MetricCard
                title="Monthly Cash Flow"
                value={fmt.format(metrics.monthlyCashFlow)}
                subtitle="Net income"
                delta="Positive operating month"
                context="After all monthly outflows"
                accent="neutral"
              />
            </div>
            <div className="md:col-span-3 xl:col-span-2">
              <MetricCard
                title="Investable Capital"
                value={fmt.format(metrics.investableCapital)}
                subtitle="Ready for deployment"
                delta={`${investableCoverage} months of cash flow`}
                context="Unallocated this month"
                accent="neutral"
              />
            </div>
          </div>
        </section>

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
