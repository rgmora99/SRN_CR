import { MainMenu, type MenuItem } from "@/components/navigation/MainMenu";

type AppShellProps = {
  children: React.ReactNode;
  menuItems: MenuItem[];
  activeItemId: string;
};

export function AppShell({ children, menuItems, activeItemId }: AppShellProps) {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <h1>Planeamiento Docente IA</h1>
          <p>Generá, adaptá y evaluá clases en minutos.</p>
        </div>
        <MainMenu items={menuItems} activeItemId={activeItemId} />
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
