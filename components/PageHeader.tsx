export function PageHeader({ title, lede }: { title: string; lede: string }) {
  return (
    <header className="page-header">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </header>
  );
}
