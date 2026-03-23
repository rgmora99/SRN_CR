import { AppShell } from "@/components/layout/AppShell";
import { ClassSummaryCard } from "@/components/planning/ClassSummaryCard";
import { PlanningStepList } from "@/components/planning/PlanningStepList";
import { QuickActionCard } from "@/components/planning/QuickActionCard";
import { RecentPlansTable } from "@/components/planning/RecentPlansTable";
import { SuggestionList } from "@/components/planning/SuggestionList";
import { Card } from "@/components/ui/Card";

const menuItems = [
  { id: "dashboard", label: "Inicio", hint: "Resumen diario", icon: "🏠" },
  { id: "new-planning", label: "Nuevo planeamiento", hint: "Flujo guiado", icon: "🧩" },
  { id: "history", label: "Historial", hint: "Últimos 30 días", icon: "🗂️", badge: "12" },
  { id: "resources", label: "Recursos", hint: "Plantillas y rúbricas", icon: "📚" },
  { id: "settings", label: "Configuración", hint: "Perfil y preferencias", icon: "⚙️" },
];

const planningSteps = [
  { title: "Elegí materia y nivel", detail: "Definí contexto para sugerencias curriculares pertinentes." },
  { title: "Indicá tema y tiempo", detail: "La plataforma adapta actividades según minutos disponibles." },
  {
    title: "Seleccioná evaluación",
    detail: "Podés combinar formativa + sumativa con instrumentos listos para usar.",
  },
  { title: "Personalizá adaptaciones", detail: "Aplicá ajustes por conectividad, ritmo y apoyos NEE." },
];

const suggestions = [
  {
    title: "Agregar mini-rúbrica al cierre",
    reason: "Tus últimas 3 clases en Ciencias cerraron sin evidencia de autoevaluación.",
    actionLabel: "Aplicar",
  },
  {
    title: "Incluir actividad sin internet",
    reason: "Tu grupo reporta conectividad intermitente en los últimos planeamientos.",
    actionLabel: "Generar",
  },
  {
    title: "Usar plantilla de aprendizaje activo",
    reason: "Reduce tiempo de preparación y mejora participación estudiantil.",
    actionLabel: "Probar",
  },
];

const recentPlans = [
  {
    id: "p-01",
    subject: "Ciencias",
    level: "7°",
    topic: "Cadenas tróficas",
    status: "Publicado" as const,
    updatedAt: "Hoy, 09:12",
  },
  {
    id: "p-02",
    subject: "Español",
    level: "8°",
    topic: "Texto argumentativo",
    status: "Borrador" as const,
    updatedAt: "Ayer, 15:40",
  },
  {
    id: "p-03",
    subject: "Matemáticas",
    level: "9°",
    topic: "Funciones lineales",
    status: "Publicado" as const,
    updatedAt: "21 mar, 10:05",
  },
];

export default function HomePage() {
  return (
    <AppShell menuItems={menuItems} activeItemId="dashboard" teacherName="Rocío">
      <section className="grid grid-cols-3" style={{ marginBottom: "1rem" }}>
        <Card title="Planeamientos este mes" subtitle="Meta: 30">
          <div className="kpi">24</div>
        </Card>
        <Card title="Adaptaciones generadas" subtitle="Con enfoque inclusivo">
          <div className="kpi">17</div>
        </Card>
        <Card title="Evaluaciones creadas" subtitle="Listas para aplicar">
          <div className="kpi">31</div>
        </Card>
      </section>

      <section className="grid grid-cols-2" style={{ marginBottom: "1rem" }}>
        <QuickActionCard
          title="Crear planeamiento desde cero"
          description="Completá materia, nivel, tema y tiempo de clase."
          ctaLabel="Iniciar"
        />

        <QuickActionCard
          title="Regenerar adaptaciones"
          description="Tomá un planeamiento previo y adaptalo por conectividad o NEE."
          ctaLabel="Adaptar"
        />
      </section>

      <section className="grid grid-cols-2" style={{ marginBottom: "1rem" }}>
        <PlanningStepList steps={planningSteps} />
        <SuggestionList suggestions={suggestions} />
      </section>

      <section className="grid grid-cols-2">
        <RecentPlansTable plans={recentPlans} />
        <ClassSummaryCard
          subject="Ciencias"
          level="7°"
          topic="Ecosistemas y cadenas tróficas"
          duration="80 min"
          assessment="Lista de cotejo"
        />
      </section>
    </AppShell>
  );
}
