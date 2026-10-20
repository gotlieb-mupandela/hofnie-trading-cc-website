import { BeforeAfter } from "@/components/BeforeAfter";
import { EnquiryBand } from "@/components/EnquiryBand";
import { ServiceAreas } from "@/components/ServiceAreas";
import { StatsStrip } from "@/components/StatsStrip";
import { StudyDrawing } from "@/components/Drawings";
import { company, enquirySteps, projectSlots, serviceAreas, services } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Home",
  absoluteTitle: "Hofnie Trading CC | Construction in Windhoek and northern Namibia",
  path: "/",
  description:
    "Hofnie Trading CC handles construction, renovation, and property-related work in Windhoek and in northern Namibia: Ondangwa, Oshakati, and Ongwediva.",
});

const trustPoints = [
  {
    title: "Scope before work",
    text: "We say what is included, and what is not, before a job is booked.",
  },
  {
    title: "Direct contact",
    text: "Both phone numbers, WhatsApp, and email on this site reach the company.",
  },
  {
    title: "Named towns only",
    text: "We publish Windhoek, Ondangwa, Oshakati, and Ongwediva. We do not claim a wider map.",
  },
];

export default function HomePage() {
  const previewTowns = serviceAreas.map((area) => ({
    area,
    slot: projectSlots.find((item) => item.town === area.name),
  }));

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Hofnie Trading CC</p>
            <h1>Construction and renovation in Windhoek and the north.</h1>
            <p className="lede">
              We take on new building work, renovations, repairs, and other property-related jobs in Windhoek, Ondangwa, Oshakati, and Ongwediva.
            </p>
            <div className="cluster">
              <a className="button button-primary" href="/contact#enquiry">
                Get a quote
              </a>
              <a className="button button-secondary" href="/services">
                View services
              </a>
              <a
                className="button button-whatsapp"
                href={company.phones[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {company.phones[0].label}
              </a>
            </div>
            <ul className="hero-contacts">
              {company.phones.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`}>{phone.label}</a>
                  <a href={phone.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                    <span className="sr-only"> {phone.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
          <figure className="drawing-frame">
            <StudyDrawing variant="house" />
            <figcaption>Illustrated study. Not a photograph of a Hofnie project.</figcaption>
          </figure>
        </div>
      </section>

      <StatsStrip />

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Services</p>
            <h2 id="services-title">Work you can ask us to price</h2>
            <p className="lede">
              Six groups cover the construction, renovation, and property work we discuss with clients. Open a card for the detail, or send a quote request if you already know the job.
            </p>
          </div>
          <ul className="service-cards">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`/services#${service.id}`}>
                  <span>{service.number}</span>
                  <strong>{service.title}</strong>
                  <small>{service.summary}</small>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-muted" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How a job moves</p>
            <h2 id="process-title">Plan, coordinate, deliver</h2>
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

      <ServiceAreas intro="Hofnie Trading CC serves Windhoek and northern Namibia: Ondangwa, Oshakati, and Ongwediva." />

      <section className="section section-muted" aria-labelledby="projects-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Projects by town</p>
            <h2 id="projects-title">A slot for each town we serve</h2>
            <p className="lede">
              These cards are grouped by service town. Every title is a placeholder. None of them is a finished Hofnie project.
            </p>
          </div>
          <ul className="project-grid">
            {previewTowns.map(({ area, slot }) =>
              slot ? (
                <li key={area.name}>
                  <article className="project-card">
                    <StudyDrawing variant={slot.variant} />
                    <p className="placeholder-tag">Placeholder</p>
                    <p className="project-kind">{area.name}</p>
                    <h3>{slot.title}</h3>
                    <p>{slot.summary}</p>
                  </article>
                </li>
              ) : null,
            )}
          </ul>
          <a className="button button-secondary" href="/projects">
            Open the project slots
          </a>
        </div>
      </section>

      <BeforeAfter />

      <section className="section section-tight" aria-labelledby="trust-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">What you can rely on</p>
            <h2 id="trust-title">Plain signals, not a client list</h2>
            <p className="lede">
              Certifications, staff names, and client logos are not published yet. The points below are the commitments this site actually makes.
            </p>
          </div>
          <ul className="trust-grid">
            {trustPoints.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryBand />
    </>
  );
}
