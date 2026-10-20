import { PageHeader } from "@/components/PageHeader";
import { StockImage } from "@/components/StockImage";
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
      <PageHeader
        title="About."
        lede="Hofnie Trading CC is a Namibian close corporation. We take on construction, renovation, and other property-related work in four towns."
      />
      <section className="section">
        <div className="wrap about-grid">
          <div className="prose">
            <p>
              You describe the property and the result you want. We say whether we can take the job, what is included, and what we need before it starts.
            </p>
            <p>During the work, you can reach us on the phone numbers, WhatsApp links, and email on this site.</p>
          </div>
          <StockImage src={stockImages[2].src} alt={stockImages[2].alt} sizes="(max-width: 880px) calc(100vw - 2.5rem), 520px" />
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <h2>How an enquiry moves</h2>
          <ol className="steps">
            {enquirySteps.map((step) => (
              <li key={step.number}>
                <strong>
                  {step.number} {step.title}
                </strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Where we work</h2>
          <ul className="town-list">
            {serviceAreas.map((area) => (
              <li key={area.name}>{area.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
