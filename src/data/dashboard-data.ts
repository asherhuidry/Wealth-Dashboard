import type { ExecutiveMetrics, AlertItem, ActionItem, GoalItem } from "@/types/finance";

export const executiveMetrics: ExecutiveMetrics = {
  totalNetWorth: 2487365,
  totalAssets: 3145890,
  totalLiabilities: 658525,
  monthlyCashFlow: 18420,
  investableCapital: 61250,
  totalDebt: 658525,
  monthlyDebtPayment: 3840,
  monthlyBudgetTarget: 4500,
  monthlyActualSpend: 4380,
};

export const topAlerts: AlertItem[] = [
  {
    id: "1",
    title: "Debt-to-asset ratio elevated",
    detail: "Ratio crossed 20.9%. Review payoff priority before next allocation cycle.",
    level: "critical",
  },
  {
    id: "2",
    title: "Cash reserve slightly low",
    detail: "Consider adding $8k to SGOV buffer to reach 3-month coverage.",
    level: "warning",
  },
  {
    id: "3",
    title: "Spending drift this month",
    detail: "Discretionary spend is trending 12% above target. Review subscriptions.",
    level: "info",
  },
];

export const nextActions: ActionItem[] = [
  {
    id: "1",
    title: "Deploy $1,000 to SGOV",
    detail: "Capture 5.2% yield on idle capital and improve liquidity buffer.",
    category: "capital",
  },
  {
    id: "2",
    title: "Review highest-rate debt",
    detail: "Accelerate payoff of 18.99% APR line before next allocation.",
    category: "debt",
  },
  {
    id: "3",
    title: "Rebalance Q2 budget",
    detail: "Dining and entertainment are 23% over plan. Adjust or reallocate.",
    category: "budget",
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
  {
    id: "2",
    name: "Emergency Fund",
    current: 28350,
    target: 30000,
    progress: 95,
  },
  {
    id: "3",
    name: "Investment Portfolio",
    current: 185000,
    target: 250000,
    progress: 74,
  },
];

