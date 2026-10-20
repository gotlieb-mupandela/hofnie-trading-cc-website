import { Panel } from "@/components/Panel";
import { stockImages } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { projectSlots } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Placeholder project slots for Hofnie Trading CC. Named jobs are not published yet. Service areas include Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function ProjectsPage() {
  return (
    <>
      <Panel
        heading="h1"
        priority
        image={stockImages[0]}
        title="Projects"
        text="Named jobs are not published yet."
        actions={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="sheet-block">
        <div className="wrap">
          <p className="notice">
            The list is reserved space for Windhoek, Ondangwa, Oshakati, and Ongwediva. Nothing here is a completed Hofnie Trading CC job.
          </p>
          <ul className="slot-list">
            {projectSlots.map((slot) => (
              <li key={slot.id}>
                <span>{slot.town}</span>
                <span>{slot.kind}</span>
                <strong>{slot.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
