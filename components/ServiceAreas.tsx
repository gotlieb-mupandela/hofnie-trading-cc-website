import { serviceAreas } from "@/lib/site";

const northern = serviceAreas.filter((area) => area.group === "Northern Namibia");
const capital = serviceAreas.filter((area) => area.group === "Capital");

export function ServiceAreas({
  id = "where-we-work",
  intro,
}: {
  id?: string;
  intro: string;
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Where we work</p>
          <h2 id={`${id}-title`}>Windhoek and northern Namibia</h2>
          <p className="lede">{intro}</p>
        </div>
        <div className="areas-layout">
          <div className="areas-diagram" aria-hidden="true">
            <span>North</span>
            <i />
            <span>Windhoek</span>
            <small>Schematic only. Not to scale.</small>
          </div>
          <div className="areas-groups">
            <div>
              <h3>Northern Namibia</h3>
              <ul className="area-grid">
                {northern.map((area) => (
                  <li key={area.name}>
                    <article className="area-card">
                      <p className="area-group">{area.group}</p>
                      <h4>{area.name}</h4>
                      <p>{area.summary}</p>
                      <a href={`/contact?town=${encodeURIComponent(area.name)}#enquiry`}>
                        Enquire about {area.name}
                      </a>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Windhoek</h3>
              <ul className="area-grid area-grid-single">
                {capital.map((area) => (
                  <li key={area.name}>
                    <article className="area-card">
                      <p className="area-group">{area.group}</p>
                      <h4>{area.name}</h4>
                      <p>{area.summary}</p>
                      <a href={`/contact?town=${encodeURIComponent(area.name)}#enquiry`}>
                        Enquire about {area.name}
                      </a>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
