import { Card } from "@/components/ui/Card";

type QuickActionCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
};

export function QuickActionCard({ title, description, ctaLabel }: QuickActionCardProps) {
  return (
    <Card title={title} subtitle={description}>
      <div style={{ marginTop: "1rem" }}>
        <button type="button" className="button button-primary">
          {ctaLabel}
        </button>
      </div>
    </Card>
  );
}
