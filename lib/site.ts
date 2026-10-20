export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hofnie.apnium.com"
).replace(/\/$/, "");

export const company = {
  name: "Hofnie Trading CC",
  email: "erastusjohn36@gmail.com",
  phones: [
    {
      label: "081 267 2044",
      tel: "+264812672044",
      whatsapp: "https://wa.me/264812672044",
    },
    {
      label: "081 781 7312",
      tel: "+264817817312",
      whatsapp: "https://wa.me/264817817312",
    },
  ],
  address: {
    street: "[Street address placeholder]",
    locality: "[Town placeholder]",
    country: "Namibia",
    countryCode: "NA",
  },
} as const;

export const serviceAreas = [
  {
    name: "Windhoek",
    group: "Capital",
    summary:
      "Construction, renovation, repairs, and other property-related work in Windhoek.",
  },
  {
    name: "Ondangwa",
    group: "Northern Namibia",
    summary:
      "Building and renovation work for property in Ondangwa, in northern Namibia.",
  },
  {
    name: "Oshakati",
    group: "Northern Namibia",
    summary:
      "Construction, repairs, and other property-related work in Oshakati.",
  },
  {
    name: "Ongwediva",
    group: "Northern Namibia",
    summary:
      "Renovation, construction, and upkeep for property in Ongwediva.",
  },
] as const;

export const areaNames = serviceAreas.map((area) => area.name);

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  body: string[];
  points: string[];
};

export const services: Service[] = [
  {
    id: "new-construction",
    number: "01",
    title: "New construction",
    summary:
      "New houses, added rooms, and smaller buildings such as storerooms or site structures.",
    body: [
      "Hofnie Trading CC takes on new building work in Windhoek, Ondangwa, Oshakati, and Ongwediva. The scope is agreed before work starts, including the structure, the roof, and the finishes you want included.",
      "Tell us the town, the type of building, and whether you already have a sketch or a plan. If you do not have drawings yet, say so. We can still talk through the job.",
    ],
    points: [
      "Houses and smaller new buildings",
      "Work set out from an agreed scope",
      "Windhoek and the three northern towns",
    ],
  },
  {
    id: "renovation",
    number: "02",
    title: "Renovation and alterations",
    summary:
      "Changes to buildings that are already standing, so the property fits how you use it now.",
    body: [
      "Renovation can mean reworked rooms, updated finishes, or a layout change. We look at what must stay and what you want to be different.",
      "Share a short description of the property and the outcome you want. Photographs of the existing rooms help us understand the job.",
    ],
    points: [
      "Room and layout changes",
      "Updated finishes as part of a renovation",
      "Work on homes and other property",
    ],
  },
  {
    id: "repairs",
    number: "03",
    title: "Repairs and maintenance",
    summary:
      "Practical repair work that keeps a property serviceable.",
    body: [
      "Roofs, walls, doors, windows, and similar building items can be part of a repair visit, depending on the fault. Describe the problem, the town, and how urgent it feels.",
      "We will tell you whether it is work we can take on. Not every repair is a fit, and we would rather say so early.",
    ],
    points: [
      "Repair of damaged building elements",
      "Smaller upkeep jobs",
      "A clear yes or no before work is booked",
    ],
  },
  {
    id: "finishes",
    number: "04",
    title: "Finishes",
    summary:
      "Plaster, paint, tiling, ceilings, and related finish work, alone or with a larger job.",
    body: [
      "Finish work can stand on its own or follow construction and renovation. Say which rooms or outside faces are included, and whether materials are already chosen.",
      "If you only need one trade, still send the town and a short note. We will confirm if we can do that piece of work.",
    ],
    points: [
      "Interior and exterior finishes",
      "Part of a build, or a smaller job",
      "Materials noted before work starts",
    ],
  },
  {
    id: "external-works",
    number: "05",
    title: "External property work",
    summary:
      "Boundary walls, paving, and other outside work that belongs with the property.",
    body: [
      "Outside work is often what makes a property feel finished. We can discuss walls, paving, and similar site work in the towns we serve.",
      "Mention access to the site, and anything that neighbours or the boundary might affect. Those details change how the job is planned.",
    ],
    points: [
      "Boundary walls and related masonry",
      "Paving and yard finishes",
      "Scoped with the rest of the property in mind",
    ],
  },
  {
    id: "other-property-work",
    number: "06",
    title: "Other property-related work",
    summary:
      "If the job does not sit under one heading, describe the property and the result you want.",
    body: [
      "Some jobs are a mix of construction, renovation, and smaller property work. Send a plain description. If it is in Windhoek, Ondangwa, Oshakati, or Ongwediva, we will say whether it is a fit.",
      "We do not publish a price list. Cost depends on the property, the scope, and the town.",
    ],
    points: [
      "Mixed or unusual building jobs",
      "An honest answer if we cannot help",
      "No published prices on this site",
    ],
  },
];

export type ProjectSlot = {
  id: string;
  code: string;
  kind: string;
  town: (typeof serviceAreas)[number]["name"];
  title: string;
  location: string;
  client: string;
  year: string;
  summary: string;
  variant: "house" | "plan" | "section" | "yard";
};

export const projectSlots: ProjectSlot[] = [
  {
    id: "slot-01",
    code: "01",
    kind: "New construction",
    town: "Windhoek",
    title: "[Project name placeholder]",
    location: "[Site placeholder]",
    client: "[Client name placeholder]",
    year: "[Year placeholder]",
    summary: "Reserved for a future Windhoek project. No job has been named, and this drawing is not a photograph.",
    variant: "house",
  },
  {
    id: "slot-02",
    code: "02",
    kind: "Renovation",
    town: "Windhoek",
    title: "[Project name placeholder]",
    location: "[Site placeholder]",
    client: "[Client name placeholder]",
    year: "[Year placeholder]",
    summary: "A second Windhoek slot, for a renovation once Hofnie Trading CC publishes one.",
    variant: "section",
  },
  {
    id: "slot-03",
    code: "03",
    kind: "Repairs and maintenance",
    town: "Ondangwa",
    title: "[Project name placeholder]",
    location: "[Site placeholder]",
    client: "[Client name placeholder]",
    year: "[Year placeholder]",
    summary: "Reserved for Ondangwa. The card is a placeholder, not a completed repair.",
    variant: "plan",
  },
  {
    id: "slot-04",
    code: "04",
    kind: "External property work",
    town: "Oshakati",
    title: "[Project name placeholder]",
    location: "[Site placeholder]",
    client: "[Client name placeholder]",
    year: "[Year placeholder]",
    summary: "Reserved for Oshakati. Walls, paving, or other outside work can be listed here later.",
    variant: "yard",
  },
  {
    id: "slot-05",
    code: "05",
    kind: "Finishes",
    town: "Ongwediva",
    title: "[Project name placeholder]",
    location: "[Site placeholder]",
    client: "[Client name placeholder]",
    year: "[Year placeholder]",
    summary: "Reserved for Ongwediva. Finish work will be named here only when it is real.",
    variant: "section",
  },
  {
    id: "slot-06",
    code: "06",
    kind: "Mixed property work",
    town: "Ongwediva",
    title: "[Project name placeholder]",
    location: "[Site placeholder]",
    client: "[Client name placeholder]",
    year: "[Year placeholder]",
    summary: "A second Ongwediva slot for mixed construction and property work.",
    variant: "house",
  },
];

export const enquirySteps = [
  {
    number: "01",
    title: "Plan",
    text: "Tell us the town and the work. We agree what is included before anything starts.",
  },
  {
    number: "02",
    title: "Coordinate",
    text: "We line up access, materials, and the order of work, and say what we still need from you.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "The agreed construction, renovation, or property work is carried out. You can reach us on the published numbers.",
  },
] as const;

export function mailtoHref(fields: {
  name: string;
  phone: string;
  email: string;
  town: string;
  service: string;
  message: string;
}) {
  const serviceTitle =
    services.find((service) => service.id === fields.service)?.title ??
    fields.service;
  const subject = "Website enquiry for Hofnie Trading CC";
  const body = [
    "Enquiry from the Hofnie Trading CC website",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone || "[not provided]"}`,
    `Email: ${fields.email}`,
    `Town: ${fields.town || "[not provided]"}`,
    `Service: ${serviceTitle || "[not provided]"}`,
    "",
    fields.message,
  ].join("\n");

  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
