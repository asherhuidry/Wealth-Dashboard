import type { ExecutiveMetrics, MetricItem, AlertItem, ActionItem, GoalItem } from "@/types/finance";

export const executiveMetrics: ExecutiveMetrics = {
  totalNetWorth: 2487365,
  totalAssets: 3145890,
  totalLiabilities: 658525,
  monthlyCashFlow: 18420,
  investableCapital: 61250,
  totalDebt: 658525,
  monthlyBudgetTarget: 4500,
  monthlyActualSpend: 4380,
};

export const primaryMetrics: MetricItem[] = [
  {
    id: "net-worth",
    title: "Net Worth",
    value: "$2,487,365",
    change: "+$14,200",
    trend: "up",
    note: "vs. last month",
  },
  {
    id: "assets",
    title: "Total Assets",
    value: "$3,145,890",
    change: "+$18,400",
    trend: "up",
    note: "vs. last month",
  },
  {
    id: "liabilities",
    title: "Liabilities",
    value: "$658,525",
    change: "−$1,200",
    trend: "down",
    note: "decreasing",
  },
  {
    id: "cashflow",
    title: "Cash Flow",
    value: "$18,420",
    change: "+$820",
    trend: "up",
    note: "monthly net",
  },
  {
    id: "investable",
    title: "Investable",
    value: "$61,250",
    change: "+$3,100",
    trend: "up",
    note: "available capital",
  },
];

export const topAlerts: AlertItem[] = [
  {
    id: "1",
    title: "Cash reserve slightly low",
    detail: "Consider adding to SGOV buffer.",
    level: "warning",
  },
  {
    id: "2",
    title: "Spending drift",
    detail: "Discretionary spend trending above target.",
    level: "info",
  },
];

export const nextActions: ActionItem[] = [
  {
    id: "1",
    title: "Deploy $1,000 to SGOV",
    detail: "Improve liquidity and stability.",
    category: "capital",
  },
  {
    id: "2",
    title: "Review highest-rate debt",
    detail: "Check if payoff should be accelerated.",
    category: "debt",
  },
];

export const goalItems: GoalItem[] = [
  {
    id: "1",
    name: "Liquidity Reserve",
    current: 42000,
    target: 50000,
    progress: 84,
  },
];
