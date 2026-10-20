import Link from "next/link";

import { ContactMethods } from "@/components/ContactMethods";
import { nav, serviceAreas } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="logo">
            <span className="logo-name">Hofnie</span>
            <span className="logo-legal">Trading CC</span>
          </p>
          <p className="footer-note">
            Construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Towns</h2>
          <ul>
            {serviceAreas.map((area) => (
              <li key={area.name}>
                <Link href={`/contact?town=${encodeURIComponent(area.name)}#enquiry`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <ContactMethods />
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Hofnie Trading CC. Namibia.</p>
        <p>Photographs are Unsplash stock. They are not Hofnie Trading CC projects.</p>
      </div>
    </footer>
  );
}
