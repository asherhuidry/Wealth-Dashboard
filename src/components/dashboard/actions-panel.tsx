import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ActionItem } from "@/types/finance";

export default function ActionsPanel({ actions }: { actions: ActionItem[] }) {
  return (
    <Card className="border-white/10 bg-[#0d1626] p-5 text-white shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">Next Best Actions</div>
          <div className="text-sm text-white/50">Where to focus next</div>
        </div>
        <Button variant="secondary" className="rounded-full">Review</Button>
      </div>
      <div className="space-y-3">
        {actions.map((action) => (
          <div key={action.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-1 font-medium text-white/90">{action.title}</div>
            <div className="text-sm text-white/55">{action.detail}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
