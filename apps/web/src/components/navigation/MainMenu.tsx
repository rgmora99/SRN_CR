export type MenuItem = {
  id: string;
  label: string;
  badge?: string;
};

type MainMenuProps = {
  items: MenuItem[];
  activeItemId: string;
};

export function MainMenu({ items, activeItemId }: MainMenuProps) {
  return (
    <ul className="menu" aria-label="Menú principal">
      {items.map((item) => {
        const isActive = item.id === activeItemId;

        return (
          <li key={item.id}>
            <button className={`menu-item ${isActive ? "menu-item-active" : ""}`} type="button">
              <span>{item.label}</span>
              {item.badge ? <span className="badge">{item.badge}</span> : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
