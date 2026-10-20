import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { ContactMethods } from "@/components/ContactMethods";
import { PageHeader } from "@/components/PageHeader";
import { ServiceAreas } from "@/components/ServiceAreas";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact in Windhoek and northern Namibia",
  path: "/contact",
  description:
    "Call 081 267 2044 or 081 781 7312, email erastusjohn36@gmail.com, or WhatsApp Hofnie Trading CC. Construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Talk to Hofnie Trading CC."
        lede="Call, WhatsApp, or email us about construction and renovation in Windhoek, Ondangwa, Oshakati, and Ongwediva. A street address has not been published yet."
      />
      <section className="section section-tight">
        <div className="wrap contact-layout">
          <div>
            <h2>Phone, WhatsApp, and email</h2>
            <p>
              These details are the direct way to reach the company. Use either
              phone number. Both also open a WhatsApp chat.
            </p>
            <ContactMethods />
          </div>
          <Suspense fallback={<p className="form-fallback">Loading the enquiry form.</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
      <ServiceAreas intro="Say which of these towns the property is in. If the town is not listed, choose Other on the form and name it in your message." />
    </>
  );
}
