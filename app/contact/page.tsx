import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { ContactMethods } from "@/components/ContactMethods";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Call 081 267 2044 or 081 781 7312, email erastusjohn36@gmail.com, or WhatsApp Hofnie Trading CC about work in Windhoek, Ondangwa, Oshakati, and Ongwediva.",
});

export default function ContactPage() {
  return (
    <section className="sheet">
      <div className="wrap">
        <h1>Contact</h1>
        <p className="sub">Call, WhatsApp, or email us about work in Windhoek, Ondangwa, Oshakati, and Ongwediva.</p>
        <div className="contact-layout">
          <ContactMethods />
          <Suspense fallback={<p className="form-fallback">Loading the enquiry form.</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
