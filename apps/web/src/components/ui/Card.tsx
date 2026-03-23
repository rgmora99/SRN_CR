type CardProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
      {children}
    </article>
  );
}
