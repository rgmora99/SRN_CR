import { Card } from "@/components/ui/Card";

type PlanningStep = {
  title: string;
  detail: string;
};

type PlanningStepListProps = {
  steps: PlanningStep[];
};

export function PlanningStepList({ steps }: PlanningStepListProps) {
  return (
    <Card title="Crear planeamiento en 4 pasos" subtitle="Flujo guiado sugerido">
      <ol className="step-list">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="step-index">{index + 1}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
