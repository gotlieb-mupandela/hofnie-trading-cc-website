import { PageHeader } from "@/components/PageHeader";
import { StockImage } from "@/components/StockImage";
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
      <PageHeader
        title="Projects."
        lede="Named jobs are not published yet. The list is reserved space for Windhoek, Ondangwa, Oshakati, and Ongwediva."
      />
      <section className="section">
        <div className="wrap">
          <StockImage src={stockImages[0].src} alt={stockImages[0].alt} />
          <p className="notice">
            Project names, clients, and years stay as placeholders. Nothing in this list is a completed Hofnie Trading CC job.
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
