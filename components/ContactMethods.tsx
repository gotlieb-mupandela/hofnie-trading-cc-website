import { company } from "@/lib/site";

export function ContactMethods() {
  return (
    <div className="contact-methods">
      <ul className="phone-block">
        {company.phones.map((phone) => (
          <li key={phone.tel}>
            <a className="phone-link" href={`tel:${phone.tel}`}>
              <span>Call</span>
              {phone.label}
            </a>
            <a
              className="wa-link"
              href={phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <span className="sr-only"> {phone.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <a className="email-link" href={`mailto:${company.email}`}>
        {company.email}
      </a>
      <p className="address-block">
        <span className="placeholder-tag">Address to be published</span>
        <span>{company.address.street}</span>
        <span>
          {company.address.locality}, {company.address.country}
        </span>
      </p>
    </div>
  );
}
