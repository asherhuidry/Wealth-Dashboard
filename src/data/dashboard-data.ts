import type { ExecutiveMetrics, AlertItem, ActionItem, GoalItem } from "@/types/finance";

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
