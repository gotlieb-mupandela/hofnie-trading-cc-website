import { EnquiryBand } from "@/components/EnquiryBand";
import { PageHeader } from "@/components/PageHeader";
import { ServiceAreas } from "@/components/ServiceAreas";
import { enquirySteps } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Working in Windhoek and northern Namibia",
  path: "/about",
  description:
    "Hofnie Trading CC is a Namibian close corporation offering construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="A Namibian firm for building and renovation work."
        lede="Hofnie Trading CC is a close corporation. We take on construction, renovation, and other property-related work in Windhoek and in northern Namibia."
      />
      <section className="section section-tight">
        <div className="wrap split">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              The CC in the name means the business is a close corporation, a
              company form used in Namibia. This site is the public face of that
              firm: the work we do, the towns we serve, and how to reach us.
            </p>
            <p>
              We keep the conversation practical. You describe the property and
              the result you want. We say whether we can do the work, what the
              job includes, and what we need before it starts.
            </p>
            <p>
              During the work, you can reach the company on the phone numbers,
              WhatsApp links, and email published on this site.
            </p>
          </div>
          <aside className="notice">
            <h2>Not published yet</h2>
            <ul>
              <li>Street address. A placeholder is shown until the company supplies one.</li>
              <li>Named projects, client names, and site photographs.</li>
              <li>Registration number, founding year, and staff details.</li>
            </ul>
            <p>Those items will be added only when they are confirmed. They are not guessed here.</p>
          </aside>
        </div>
      </section>
      <section className="section" aria-labelledby="approach-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Approach</p>
            <h2 id="approach-title">How a job usually starts</h2>
          </div>
          <ol className="steps">
            {enquirySteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ServiceAreas intro="These are the towns where we take on construction, renovation, and other property-related work." />
      <EnquiryBand />
    </>
  );
}
