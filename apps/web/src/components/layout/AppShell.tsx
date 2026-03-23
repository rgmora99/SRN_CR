import { MainMenu, type MenuItem } from "@/components/navigation/MainMenu";

type AppShellProps = {
  children: React.ReactNode;
  menuItems: MenuItem[];
  activeItemId: string;
  teacherName?: string;
};

export function AppShell({
  children,
  menuItems,
  activeItemId,
  teacherName = "Profe",
}: AppShellProps) {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <h1>Planeamiento Docente IA</h1>
          <p>Generá, adaptá y evaluá clases en minutos.</p>
        </div>
        <MainMenu items={menuItems} activeItemId={activeItemId} />
      </aside>

      <section className="content">
        <div className="topbar card">
          <div>
            <p className="eyebrow">Asistente activo</p>
            <h2>Hola, {teacherName}</h2>
          </div>
          <button type="button" className="button button-primary">
            + Nueva clase
          </button>
        </div>

        {children}
      </section>
    </main>
  );
}
