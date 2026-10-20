import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { ContactMethods } from "@/components/ContactMethods";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Call 081 267 2044 or 081 781 7312, email erastusjohn36@gmail.com, or WhatsApp Hofnie Trading CC about work in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact."
        lede="Call, WhatsApp, or email us about work in Windhoek, Ondangwa, Oshakati, and Ongwediva."
      />
      <section className="section">
        <div className="wrap contact-layout">
          <div>
            <h2>Reach us</h2>
            <ContactMethods />
          </div>
          <Suspense fallback={<p className="form-fallback">Loading the enquiry form.</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
