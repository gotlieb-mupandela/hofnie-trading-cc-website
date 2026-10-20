import { EnquiryBand } from "@/components/EnquiryBand";
import { PageHeader } from "@/components/PageHeader";
import { StudyDrawing } from "@/components/Drawings";
import { projectSlots, serviceAreas } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Placeholder project slots for Hofnie Trading CC. Named jobs and photographs are not published yet. Service areas include Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Projects"
        title="Space for real work, once it can be named."
        lede="Hofnie Trading CC works in Windhoek, Ondangwa, Oshakati, and Ongwediva. Photographs of finished jobs will go here when the company publishes them. Until then, every card is a placeholder."
      />
      <section className="section section-tight">
        <div className="wrap">
          <div className="notice notice-inline">
            <p>
              These studies were drawn for this website. They are not pictures of
              real sites. Project names, clients, towns, and years are marked as
              placeholders so they are not mistaken for completed work.
            </p>
          </div>
          <div className="town-groups">
            {serviceAreas.map((area) => {
              const slots = projectSlots.filter((slot) => slot.town === area.name);
              return (
                <section key={area.name} aria-labelledby={`town-${area.name}`}>
                  <div className="town-heading">
                    <h2 id={`town-${area.name}`}>{area.name}</h2>
                    <p>{area.group}. Placeholder slots only. No named project is published for this town yet.</p>
                  </div>
                  <ul className="project-grid">
                    {slots.map((slot) => (
                      <li key={slot.id}>
                        <article className="project-card">
                          <StudyDrawing variant={slot.variant} />
                          <p className="placeholder-tag">Placeholder, not a completed project</p>
                          <p className="project-kind">{slot.kind}</p>
                          <h3>{slot.title}</h3>
                          <dl>
                            <div>
                              <dt>Site</dt>
                              <dd>{slot.location}</dd>
                            </div>
                            <div>
                              <dt>Client</dt>
                              <dd>{slot.client}</dd>
                            </div>
                            <div>
                              <dt>Year</dt>
                              <dd>{slot.year}</dd>
                            </div>
                          </dl>
                          <p>{slot.summary}</p>
                        </article>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
