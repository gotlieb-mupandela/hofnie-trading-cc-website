import { company, serviceAreas, siteUrl } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Hofnie Trading CC offers construction, renovation, and other property-related services in Windhoek, Ondangwa, Oshakati, and Ongwediva, Namibia.",
    url: siteUrl,
    email: company.email,
    telephone: company.phones.map((phone) => phone.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressCountry: company.address.countryCode,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "Country",
        name: "Namibia",
      },
    })),
    contactPoint: company.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.tel,
      email: company.email,
      contactType: "customer service",
      url: phone.whatsapp,
      areaServed: serviceAreas.map((area) => area.name),
      availableLanguage: "English",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
