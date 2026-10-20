const figures = [
  {
    value: "4",
    label: "Towns we serve",
    detail: "Windhoek, Ondangwa, Oshakati, Ongwediva",
    placeholder: false,
  },
  {
    value: "6",
    label: "Service groups",
    detail: "Listed on the services page",
    placeholder: false,
  },
  {
    value: "To be published",
    label: "Projects completed",
    detail: "Placeholder, not a count",
    placeholder: true,
  },
  {
    value: "To be published",
    label: "Years trading",
    detail: "Placeholder, not a count",
    placeholder: true,
  },
];

export function StatsStrip() {
  return (
    <section className="stats" aria-label="Figures published on this site">
      <div className="wrap">
        <ul>
          {figures.map((figure) => (
            <li key={figure.label} className={figure.placeholder ? "is-placeholder" : undefined}>
              <strong>{figure.value}</strong>
              <span>{figure.label}</span>
              <small>{figure.detail}</small>
            </li>
          ))}
        </ul>
        <p>
          Towns and service groups are counted from this website. Project totals and years trading stay blank until Hofnie Trading CC publishes them.
        </p>
      </div>
    </section>
  );
}
