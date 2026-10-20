"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/Logo";
import { company, nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="utility">
        <p>Windhoek, Ondangwa, Oshakati, and Ongwediva</p>
        <ul>
          {company.phones.map((phone) => (
            <li key={phone.tel}>
              <a href={`tel:${phone.tel}`}>{phone.label}</a>
              <a href={phone.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
                <span className="sr-only"> {phone.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </li>
        </ul>
      </div>
      <div className="bar wrap">
        <a className="logo-link" href="/" aria-label="Hofnie Trading CC, home">
          <Logo />
        </a>
        <a className="button button-primary header-quote" href="/contact#enquiry">
          Get a quote
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="menu-icon">
            <i />
            <i />
            <i />
          </span>
        </button>
        <nav
          id="site-nav"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary"
        >
          <ul>
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <a href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav-contact">
            {company.phones.map((phone) => (
              <p key={phone.tel}>
                <a href={`tel:${phone.tel}`}>Call {phone.label}</a>
                <a href={phone.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp {phone.label}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <a className="button button-primary" href="/contact#enquiry">
              Get a quote
            </a>
          </div>
        </nav>
        <a className="button button-secondary header-call" href={`tel:${company.phones[0].tel}`}>
          Call {company.phones[0].label}
        </a>
      </div>
      <div className="mobile-contacts" aria-label="Quick contact">
        {company.phones.map((phone) => (
          <span key={phone.tel} className="mobile-contact-pair">
            <a href={`tel:${phone.tel}`}>{phone.label}</a>
            <a href={phone.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
              <span className="sr-only"> {phone.label}</span>
            </a>
          </span>
        ))}
        <a href={`mailto:${company.email}`}>Email</a>
      </div>
    </header>
  );
}
