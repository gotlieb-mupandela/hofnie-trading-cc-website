"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { company, nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="bar">
        <Link className="wordmark" href="/">
          Hofnie
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="menu-icon">
            <i />
            <i />
            <i />
          </span>
        </button>
        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          <ul>
            {nav.filter((item) => item.href !== "/").map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-contact">
            {company.phones.map((phone) => (
              <p key={phone.tel}>
                <a href={`tel:${phone.tel}`}>Call {phone.label}</a>
                <a href={phone.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                  <span className="sr-only"> {phone.label}</span>
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
