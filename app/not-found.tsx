import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page not found",
  path: "/404",
  description: "This page is not part of the Hofnie Trading CC website.",
});

export default function NotFound() {
  return (
    <section className="page-header">
      <div className="wrap page-header-inner">
        <p className="kicker">404</p>
        <h1>This page is not on the Hofnie Trading CC site.</h1>
        <p className="lede">
          The link may be out of date. You can go back to the home page or send
          an enquiry.
        </p>
        <div className="cluster">
          <a className="button button-primary" href="/">
            Back to home
          </a>
          <a className="button button-secondary" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
