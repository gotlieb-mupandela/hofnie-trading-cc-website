import Image from "next/image";

import { BeforeAfter } from "@/components/BeforeAfter";
import { Counters } from "@/components/Counters";
import { EnquiryBand } from "@/components/EnquiryBand";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ServiceAreas } from "@/components/ServiceAreas";
import { company, enquirySteps, projectSlots, serviceAreas, services } from "@/lib/site";
import { heroImage } from "@/lib/media";
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
    text: "We publish Windhoek, Ondangwa, Oshakati, and Ongwediva. We do not claim work beyond them.",
  },
];

export default function HomePage() {
  const preview = serviceAreas
    .map((area) => projectSlots.find((slot) => slot.town === area.name))
    .filter((slot) => slot !== undefined);

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src={heroImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo"
          />
          <div className="hero-shade" />
          <svg className="blueprint" viewBox="0 0 800 600">
            <path d="M80 460 H720 M120 460 V180 L400 70 L680 180 V460" />
            <path d="M220 460 V260 H360 V460 M460 460 V240 H600 V460" />
            <path d="M40 80 H240 M40 120 H180 M560 90 H760 M620 130 H760" />
          </svg>
          <div className="grain" />
        </div>
        <div className="wrap hero-copy">
          <p className="kicker">Hofnie Trading CC</p>
          <h1>Building Namibia&apos;s future.</h1>
          <p className="lede">
            Construction, renovation, and other property work in Windhoek, Ondangwa, Oshakati, and Ongwediva.
          </p>
          <div className="cluster">
            <a className="button button-primary" href="/contact#enquiry">
              Get a free quote
            </a>
            <a
              className="button button-whatsapp"
              href={company.phones[0].whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {company.phones[0].label}
            </a>
            <a className="button button-secondary" href="/services">
              View services
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
      </section>

      <Counters />

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Services</p>
              <h2 id="services-title">Six kinds of work you can price</h2>
              <p className="lede">
                New construction, renovation, repairs, finishes, outside work, and mixed property jobs. Open a card, or ask for a quote if you already know the scope.
              </p>
            </div>
          </Reveal>
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
            <p className="kicker">Process</p>
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
            <p className="kicker">Projects</p>
            <h2 id="projects-title">A slot for each town we serve</h2>
            <p className="lede">
              The photographs are stock. The titles are placeholders. None of these cards is a finished Hofnie project.
            </p>
          </div>
          <ul className="project-grid">
            {preview.map((slot, index) => (
              <li key={slot.id}>
                <ProjectCard slot={slot} index={index} />
              </li>
            ))}
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
            <p className="kicker">Why Hofnie</p>
            <h2 id="trust-title">What this site actually promises</h2>
            <p className="lede">
              Certifications, staff names, and client logos are not published yet. These are the commitments that are.
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
