export type ExecutiveMetrics = {
  totalNetWorth: number;
  totalAssets: number;
  totalLiabilities: number;
  monthlyCashFlow: number;
  investableCapital: number;
  totalDebt: number;
  /** Monthly principal + interest payment across all debt obligations */
  monthlyDebtPayment: number;
  monthlyBudgetTarget: number;
  monthlyActualSpend: number;
};

export type AlertItem = {
  id: string;
  title: string;
  detail: string;
  level: "info" | "warning" | "critical";
};

export type ActionItem = {
  id: string;
  title: string;
  detail: string;
  category: "capital" | "debt" | "budget" | "goal";
};

export type GoalItem = {
  id: string;
  name: string;
  current: number;
  target: number;
  progress: number;
};
