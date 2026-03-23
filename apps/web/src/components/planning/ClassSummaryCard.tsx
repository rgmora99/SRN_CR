import { Card } from "@/components/ui/Card";

type ClassSummaryCardProps = {
  subject: string;
  level: string;
  topic: string;
  duration: string;
  assessment: string;
};

export function ClassSummaryCard({
  subject,
  level,
  topic,
  duration,
  assessment,
}: ClassSummaryCardProps) {
  return (
    <Card title="Último planeamiento" subtitle={topic}>
      <div className="meta">
        <span>{subject}</span>
        <span>{level}</span>
        <span>{duration}</span>
        <span>{assessment}</span>
      </div>
    </Card>
  );
}
