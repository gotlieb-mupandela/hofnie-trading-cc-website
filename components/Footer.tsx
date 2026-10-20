import { ContactMethods } from "@/components/ContactMethods";
import { Logo } from "@/components/Logo";
import { nav, serviceAreas } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>
            Construction, renovation, and other property-related work in
            Windhoek, Ondangwa, Oshakati, and Ongwediva.
          </p>
        </div>
        <div>
          <h2>Visit</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Service areas</h2>
          <ul>
            {serviceAreas.map((area) => (
              <li key={area.name}>
                <a href={`/contact?town=${encodeURIComponent(area.name)}#enquiry`}>{area.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ContactMethods />
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Hofnie Trading CC. Namibia.</p>
      </div>
    </footer>
  );
}
