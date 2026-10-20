import Link from "next/link";

import { ContactMethods } from "@/components/ContactMethods";
import { Panel } from "@/components/Panel";
import { heroImage, stockImages } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { company, serviceAreas } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Home",
  absoluteTitle: "Hofnie Trading CC | Construction in Windhoek and northern Namibia",
  path: "/",
  description:
    "Hofnie Trading CC handles construction, renovation, and property-related work in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function HomePage() {
  return (
    <div className="snap-page">
      <Panel
        heading="h1"
        priority
        image={heroImage}
        title="Building Namibia's future."
        text="Construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva."
        actions={[
          { href: "/contact", label: "Contact" },
          { href: `tel:${company.phones[0].tel}`, label: "Call", tone: "ghost" },
        ]}
      />
      <Panel
        image={stockImages[3]}
        title="Services"
        text="New builds, renovation, repairs, finishes, and outside work."
        actions={[
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact", tone: "ghost" },
        ]}
      />
      <section className="panel panel-black">
        <div className="panel-copy">
          <h2>Where we work</h2>
          <ul className="mega-list">
            {serviceAreas.map((area) => (
              <li key={area.name}>
                <Link href={`/contact?town=${encodeURIComponent(area.name)}#enquiry`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="panel panel-black">
        <div className="panel-copy">
          <h2>Contact</h2>
          <p className="sub">Call, WhatsApp, or email.</p>
          <ContactMethods compact />
          <Link className="pill" href="/contact#enquiry">
            Write to us
          </Link>
        </div>
      </section>
    </div>
  );
}
