# Hofnie Trading CC

Website for Hofnie Trading CC, a Namibian close corporation offering construction, renovation, and other property-related work in Windhoek, Ondangwa, Oshakati, and Ongwediva.

The site is a Next.js app and is ready to deploy on Vercel.

## Pages

- Home
- Services
- About
- Projects (placeholder slots only)
- Contact, with phone, WhatsApp, email, and an enquiry form

## Contact details on the site

- 081 267 2044 (`tel:+264812672044`, WhatsApp `https://wa.me/264812672044`)
- 081 781 7312 (`tel:+264817817312`, WhatsApp `https://wa.me/264817817312`)
- erastusjohn36@gmail.com

The street address is still a placeholder. Named projects, client names, and site photographs are not invented. Drawings on the site are CSS and SVG studies, not photographs of real jobs.

The enquiry form opens the visitor's email app with the message addressed to the company. It does not deliver mail by itself.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
```

## Deploy on Vercel

Import the repository. Vercel detects Next.js. Production is `https://hofnie.apnium.com`. Set `NEXT_PUBLIC_SITE_URL` to that origin, with no trailing slash, if it is not already set. Canonical links, the sitemap, and LocalBusiness JSON-LD use that value, and fall back to `https://hofnie.apnium.com` when the variable is absent.
