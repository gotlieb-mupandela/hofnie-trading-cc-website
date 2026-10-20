import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Construction, renovation, repairs, finishes, and external property work from Hofnie Trading CC in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services."
        lede="New building work, changes to existing property, repairs, finishes, and outside work in Windhoek, Ondangwa, Oshakati, and Ongwediva."
      />
      <section className="section">
        <div className="wrap">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-block">
              <p className="service-index">{service.number}</p>
              <div>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <p>{service.body[0]}</p>
                <Link className="text-link" href={`/contact?service=${service.id}#enquiry`}>
                  Contact
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
