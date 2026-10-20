import { Panel } from "@/components/Panel";
import { stockImages } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { enquirySteps, serviceAreas } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "Hofnie Trading CC is a Namibian close corporation offering construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function AboutPage() {
  return (
    <>
      <Panel
        heading="h1"
        priority
        image={stockImages[4]}
        title="About"
        text="A Namibian close corporation for construction and renovation."
        actions={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="sheet-block">
        <div className="wrap">
          <div className="prose">
            <p>
              Hofnie Trading CC works in Windhoek, Ondangwa, Oshakati, and Ongwediva. You describe the property and the result you want. We say whether we can take the job.
            </p>
            <p>During the work, reach us on the phone numbers, WhatsApp links, and email on this site.</p>
          </div>
          <ol className="steps">
            {enquirySteps.map((step) => (
              <li key={step.number}>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sheet-block">
        <div className="wrap">
          <h2>Where we work</h2>
          <ul className="mega-list">
            {serviceAreas.map((area) => (
              <li key={area.name}>{area.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
