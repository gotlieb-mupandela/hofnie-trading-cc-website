import Link from "next/link";

import { StockImage } from "@/components/StockImage";
import { heroImage } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { serviceAreas, services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Home",
  absoluteTitle: "Hofnie Trading CC | Construction in Windhoek and northern Namibia",
  path: "/",
  description:
    "Hofnie Trading CC handles construction, renovation, and property-related work in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div>
              <h1>Building Namibia&apos;s future.</h1>
              <p className="lede">
                Construction, renovation, and other property work in Windhoek, Ondangwa, Oshakati, and Ongwediva.
              </p>
            </div>
            <Link className="button" href="/contact">
              Contact
            </Link>
          </div>
          <StockImage src={heroImage.src} alt={heroImage.alt} priority />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Services</h2>
          <p className="section-intro">Six kinds of building and property work.</p>
          <ul className="index-list">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`}>
                  <span>{service.number}</span>
                  <strong>{service.title}</strong>
                  <span>{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Where we work</h2>
          <p className="section-intro">These are the towns named on this site.</p>
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
