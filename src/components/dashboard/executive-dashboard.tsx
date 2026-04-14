import MetricCard from "./metric-card";
import AlertsPanel from "./alerts-panel";
import ActionsPanel from "./actions-panel";
import DebtCard from "./debt-card";
import BudgetCard from "./budget-card";
import { primaryMetrics, topAlerts, nextActions, executiveMetrics } from "@/data/dashboard-data";

export default function ExecutiveDashboard() {
  return (
    <div className="min-h-screen bg-[#070d18] px-6 py-8 md:px-10 lg:px-16">

      {/* Header */}
      <header className="mb-8 flex items-start justify-between">
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-2">
            Executive Summary
          </div>
          <h1 className="text-xl font-semibold text-white tracking-tight">
            Wealth Dashboard
          </h1>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-white/60">April 14, 2026</div>
          <div className="text-[11px] text-white/30 mt-0.5">Updated just now</div>
        </div>
      </header>

      {/* Primary KPI Metrics */}
      <section className="mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {primaryMetrics.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>
      </section>

      {/* Secondary Cards — Debt & Budget */}
      <section className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <DebtCard
          totalDebt={executiveMetrics.totalDebt}
          monthlyPayment={1200}
          totalAssets={executiveMetrics.totalAssets}
        />
        <BudgetCard
          target={executiveMetrics.monthlyBudgetTarget}
          actual={executiveMetrics.monthlyActualSpend}
        />
      </section>

      {/* Alerts & Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <AlertsPanel alerts={topAlerts} />
        <ActionsPanel actions={nextActions} />
      </section>

    </div>
  );
}

