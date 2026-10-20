"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { company, mailtoHref, services } from "@/lib/site";

const towns = ["Windhoek", "Ondangwa", "Oshakati", "Ongwediva", "Other"];

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function ContactForm() {
  const params = useSearchParams();
  const initialTown = params.get("town") ?? "";
  const initialService = params.get("service") ?? "";

  return (
    <ContactFormFields
      key={`${initialTown}-${initialService}`}
      initialTown={initialTown}
      initialService={initialService}
    />
  );
}

function ContactFormFields({
  initialTown = "",
  initialService = "",
}: {
  initialTown?: string;
  initialService?: string;
}) {
  const townDefault = towns.includes(initialTown) ? initialTown : "";
  const serviceDefault = services.some((service) => service.id === initialService)
    ? initialService
    : "";
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const helper = useMemo(
    () =>
      `This opens your email app with the message addressed to ${company.email}. It does not send the message by itself.`,
    [],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "").trim()) {
      setStatus("This enquiry could not be prepared.");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const town = String(data.get("town") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address so we can reply.";
    }
    if (phone && phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Check the phone number, or leave it blank.";
    }
    if (message.length < 12) {
      nextErrors.message = "Describe the work in a sentence or two.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Fix the highlighted fields, then try again.");
      return;
    }

    setStatus(
      `Your email app should open with this message addressed to ${company.email}. If nothing opens, send the same details directly to that address, or call or WhatsApp us.`,
    );
    const href = mailtoHref({ name, phone, email, town, service, message });
    window.setTimeout(() => {
      window.location.href = href;
    }, 60);
  }

  return (
    <form className="enquiry-form" id="enquiry" onSubmit={onSubmit} noValidate>
      <div className="form-head">
        <h2>Enquiry form</h2>
        <p>{helper}</p>
      </div>
      {status ? (
        <p className="form-status" role="status">
          {status}
        </p>
      ) : null}
      <div className="hp" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="name">Name (required)</label>
        <input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} required />
        {errors.name ? <p className="field-error">{errors.name}</p> : null}
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email (required)</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            required
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <p className="field-error">{errors.phone}</p> : null}
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="town">Town</label>
          <select id="town" name="town" defaultValue={townDefault}>
            <option value="">Select a town</option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" defaultValue={serviceDefault}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">About the work (required)</label>
        <textarea id="message" name="message" rows={6} aria-invalid={Boolean(errors.message)} required />
        {errors.message ? <p className="field-error">{errors.message}</p> : null}
      </div>
      <button className="button button-primary" type="submit">
        Email this enquiry
      </button>
    </form>
  );
}
