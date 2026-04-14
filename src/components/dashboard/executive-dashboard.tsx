import MetricCard from "./metric-card";
import { executiveMetrics } from "@/data/dashboard-data";

export default function ExecutiveDashboard() {
  return (
    <div className="p-6 grid gap-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard title="Net Worth" value={`$${executiveMetrics.totalNetWorth.toLocaleString()}`} />
        <MetricCard title="Assets" value={`$${executiveMetrics.totalAssets.toLocaleString()}`} />
        <MetricCard title="Liabilities" value={`$${executiveMetrics.totalLiabilities.toLocaleString()}`} />
        <MetricCard title="Cash Flow" value={`$${executiveMetrics.monthlyCashFlow.toLocaleString()}`} />
        <MetricCard title="Investable" value={`$${executiveMetrics.investableCapital.toLocaleString()}`} />
      </div>
    </div>
  );
}
