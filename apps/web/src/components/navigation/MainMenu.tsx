export type MenuItem = {
  id: string;
  label: string;
  hint?: string;
  icon?: string;
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
              <span className="menu-item-main">
                <span className="menu-icon" aria-hidden="true">
                  {item.icon ?? "•"}
                </span>
                <span>
                  <strong>{item.label}</strong>
                  {item.hint ? <small>{item.hint}</small> : null}
                </span>
              </span>

              {item.badge ? <span className="badge">{item.badge}</span> : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
