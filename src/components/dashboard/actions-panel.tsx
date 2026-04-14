import { Button } from "@/components/ui/button";
import type { ActionItem } from "@/types/finance";

const categoryLabel: Record<ActionItem["category"], string> = {
  capital: "Capital",
  debt: "Debt",
  budget: "Budget",
  goal: "Goal",
};

const categoryColor: Record<ActionItem["category"], string> = {
  capital: "text-blue-400",
  debt: "text-amber-400",
  budget: "text-emerald-400",
  goal: "text-violet-400",
};

export default function ActionsPanel({ actions }: { actions: ActionItem[] }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0d1626] p-5 text-white">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-white/35 uppercase mb-1.5">
            Actions
          </div>
          <div className="text-base font-semibold text-white">Next Best Actions</div>
          <div className="text-xs text-white/40 mt-0.5">Where to focus next</div>
        </div>
        <Button variant="secondary" className="rounded-full mt-0.5">
          Review all
        </Button>
      </div>
      <div className="space-y-2.5">
        {actions.map((action) => (
          <div
            key={action.id}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
          >
            <div className="flex items-start justify-between gap-3 mb-1">
              <div className="text-sm font-medium text-white/90">{action.title}</div>
              <span className={`text-[10px] font-semibold tracking-wide uppercase ${categoryColor[action.category]}`}>
                {categoryLabel[action.category]}
              </span>
            </div>
            <div className="text-xs text-white/45 leading-relaxed">{action.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

