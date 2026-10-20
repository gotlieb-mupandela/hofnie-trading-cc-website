import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Action = {
  href: string;
  label: string;
  tone?: "solid" | "ghost";
};

function isNativeLink(href: string) {
  return /^(tel:|mailto:|https?:)/.test(href);
}

export function Panel({
  image,
  title,
  text,
  actions = [],
  children,
  priority = false,
  heading = "h2",
  black = false,
}: {
  image?: { src: string; alt: string };
  title: string;
  text?: string;
  actions?: Action[];
  children?: ReactNode;
  priority?: boolean;
  heading?: "h1" | "h2";
  black?: boolean;
}) {
  const Title = heading;
  const photo = image && !black;

  return (
    <section className={photo ? "panel" : "panel panel-black"}>
      {photo ? (
        <div className="panel-media" aria-hidden="true">
          <Image src={image.src} alt="" fill priority={priority} sizes="100vw" />
          <div className="scrim" />
        </div>
      ) : null}
      <div className="panel-copy">
        <Title>{title}</Title>
        {text ? <p className="sub">{text}</p> : null}
        {actions.length > 0 ? (
          <div className="pills">
            {actions.map((action) =>
              isNativeLink(action.href) ? (
                <a
                  key={action.label}
                  className={action.tone === "ghost" ? "pill pill-ghost" : "pill"}
                  href={action.href}
                >
                  {action.label}
                </a>
              ) : (
                <Link
                  key={action.label}
                  className={action.tone === "ghost" ? "pill pill-ghost" : "pill"}
                  href={action.href}
                >
                  {action.label}
                </Link>
              ),
            )}
          </div>
        ) : null}
        {children}
        {photo ? (
          <p className="stock-note">
            <span className="sr-only">{image.alt} </span>
            Stock photograph. Not a Hofnie Trading CC project.
          </p>
        ) : null}
      </div>
    </section>
  );
}
