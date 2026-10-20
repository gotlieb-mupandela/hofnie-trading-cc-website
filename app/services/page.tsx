import { EnquiryBand } from "@/components/EnquiryBand";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Construction, renovation, repairs, finishes, and external property work from Hofnie Trading CC in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

const checklist = [
  "The town: Windhoek, Ondangwa, Oshakati, Ongwediva, or another place you will name.",
  "The type of property, such as a house, flat, shop, or other building.",
  "Whether you need new construction, renovation, repair, finishes, or outside work.",
  "Any drawings or photographs you already have.",
  "When you would like the work to start, if you know.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Services"
        title="Construction, renovation, and property work."
        lede="Hofnie Trading CC can help with new building work, changes to existing property, repairs, finishes, and outside work in Windhoek, Ondangwa, Oshakati, and Ongwediva."
      />
      <section className="section section-tight">
        <div className="wrap">
          <ul className="service-cards">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>
                  <span>{service.number}</span>
                  <strong>{service.title}</strong>
                  <small>{service.summary}</small>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap service-list">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-article">
              <p className="service-number">{service.number}</p>
              <div>
                <h2>{service.title}</h2>
                <p className="service-summary">{service.summary}</p>
                {service.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a className="text-link" href={`/contact?service=${service.id}#enquiry`}>
                  Enquire about {service.title.toLowerCase()}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="prepare-title">
        <div className="wrap prepare">
          <div>
            <p className="kicker">Before you write</p>
            <h2 id="prepare-title">What helps us understand the job</h2>
            <p>
              Prices are not listed on this site. They depend on the property,
              the scope, and the town. A short, specific note is enough to start.
            </p>
          </div>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <EnquiryBand />
    </>
  );
}
