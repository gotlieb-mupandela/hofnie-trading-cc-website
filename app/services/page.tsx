import Link from "next/link";

import { Panel } from "@/components/Panel";
import { stockImages } from "@/lib/media";
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
      <Panel
        heading="h1"
        priority
        image={stockImages[1]}
        title="Services"
        text="New building work, renovation, repairs, finishes, and outside work in four towns."
        actions={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="sheet-block">
        <div className="wrap">
          <ul className="ledger">
            {services.map((service) => (
              <li key={service.id} id={service.id}>
                <Link href={`/contact?service=${service.id}#enquiry`}>
                  <span className="index">{service.number}</span>
                  <strong>{service.title}</strong>
                  <span>{service.summary}</span>
                  <span className="text-link">Contact</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
