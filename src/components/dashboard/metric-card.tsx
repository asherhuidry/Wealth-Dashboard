import { Card } from "@/components/ui/card";

export default function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </Card>
  );
}
