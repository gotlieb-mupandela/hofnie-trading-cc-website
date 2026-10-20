import Link from "next/link";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page not found",
  path: "/404",
  description: "This page is not part of the Hofnie Trading CC website.",
});

export default function NotFound() {
  return (
    <section className="sheet">
      <div className="wrap">
        <h1>Not found</h1>
        <p className="sub">This page is not on the Hofnie Trading CC site.</p>
        <p className="actions">
          <Link className="pill" href="/">
            Home
          </Link>
        </p>
      </div>
    </section>
  );
}
