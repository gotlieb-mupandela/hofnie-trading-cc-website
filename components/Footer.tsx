import Link from "next/link";

import { ContactMethods } from "@/components/ContactMethods";
import { nav, serviceAreas } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <p>Hofnie Trading CC</p>
        <ul className="foot-links">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ContactMethods compact />
        <p>{serviceAreas.map((area) => area.name).join(", ")}</p>
        <p>© {new Date().getFullYear()} Hofnie Trading CC. Photographs are Unsplash stock. They are not Hofnie Trading CC projects.</p>
      </div>
    </footer>
  );
}
