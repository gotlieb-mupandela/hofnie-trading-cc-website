import Link from "next/link";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page not found",
  path: "/404",
  description: "This page is not part of the Hofnie Trading CC website.",
});

export default function NotFound() {
  return (
    <section className="page-header">
      <div className="wrap">
        <h1>This page is not on the site.</h1>
        <p className="lede">The link may be out of date.</p>
        <p className="actions">
          <Link className="button" href="/">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
