import { Card } from "@/components/ui/Card";

type RecentPlan = {
  id: string;
  subject: string;
  level: string;
  topic: string;
  updatedAt: string;
  status: "Borrador" | "Publicado";
};

type RecentPlansTableProps = {
  plans: RecentPlan[];
};

export function RecentPlansTable({ plans }: RecentPlansTableProps) {
  return (
    <Card title="Planeamientos recientes" subtitle="Retomá donde te quedaste">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Nivel</th>
              <th>Tema</th>
              <th>Estado</th>
              <th>Actualizado</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.subject}</td>
                <td>{plan.level}</td>
                <td>{plan.topic}</td>
                <td>
                  <span className={`pill ${plan.status === "Publicado" ? "pill-success" : ""}`}>
                    {plan.status}
                  </span>
                </td>
                <td>{plan.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
