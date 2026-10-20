import { ContactMethods } from "@/components/ContactMethods";

export function EnquiryBand() {
  return (
    <section className="enquiry-band" aria-labelledby="enquiry-band-title">
      <div className="wrap enquiry-band-inner">
        <div>
          <p className="kicker kicker-light">Get a quote</p>
          <h2 id="enquiry-band-title">Send the town, then the work.</h2>
          <p>
            Call either number, open WhatsApp, or email Hofnie Trading CC. The form prepares a message to the company address. It does not send mail by itself.
          </p>
          <div className="cluster">
            <a className="button button-light" href="/contact#enquiry">
              Get a free quote
            </a>
            <a
              className="button button-whatsapp"
              href="https://wa.me/264812672044"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp 081 267 2044
            </a>
            <a
              className="button button-whatsapp"
              href="https://wa.me/264817817312"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp 081 781 7312
            </a>
          </div>
        </div>
        <ContactMethods />
      </div>
    </section>
  );
}
