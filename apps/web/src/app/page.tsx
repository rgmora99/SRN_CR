import { AppShell } from "@/components/layout/AppShell";
import { ClassSummaryCard } from "@/components/planning/ClassSummaryCard";
import { QuickActionCard } from "@/components/planning/QuickActionCard";
import { Card } from "@/components/ui/Card";

const menuItems = [
  { id: "dashboard", label: "Inicio" },
  { id: "new-planning", label: "Nuevo planeamiento" },
  { id: "history", label: "Historial", badge: "12" },
  { id: "resources", label: "Recursos" },
  { id: "settings", label: "Configuración" },
];

export default function HomePage() {
  return (
    <AppShell menuItems={menuItems} activeItemId="dashboard">
      <header className="header card">
        <div>
          <h2>Bienvenida, Profesora</h2>
          <p className="card-subtitle">Hoy podés crear una planificación en menos de 5 minutos.</p>
        </div>
        <button type="button" className="button button-primary">
          + Nuevo planeamiento
        </button>
      </header>

      <section className="grid grid-cols-3" style={{ marginBottom: "1rem" }}>
        <Card title="Planeamientos este mes">
          <div className="kpi">24</div>
        </Card>
        <Card title="Adaptaciones generadas">
          <div className="kpi">17</div>
        </Card>
        <Card title="Evaluaciones creadas">
          <div className="kpi">31</div>
        </Card>
      </section>

      <section className="grid grid-cols-2">
        <QuickActionCard
          title="Crear planeamiento desde cero"
          description="Completá materia, nivel, tema y tiempo de clase."
          ctaLabel="Iniciar"
        />

        <QuickActionCard
          title="Generar adaptaciones"
          description="Tomá un planeamiento previo y adaptalo por conectividad o NEE."
          ctaLabel="Adaptar"
        />

        <ClassSummaryCard
          subject="Ciencias"
          level="7°"
          topic="Ecosistemas y cadenas tróficas"
          duration="80 min"
          assessment="Lista de cotejo"
        />

        <Card title="Sugerencia del día" subtitle="Enfoque MEP">
          <p style={{ marginTop: "0.75rem" }}>
            Integrá una actividad de cierre con autoevaluación breve para reforzar la competencia de
            aprender a aprender.
          </p>
        </Card>
      </section>
    </AppShell>
  );
}
