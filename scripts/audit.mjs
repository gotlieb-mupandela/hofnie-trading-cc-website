import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = process.env.AUDIT_BASE ?? "http://127.0.0.1:3000";
const pages = [
  ["home", "/"],
  ["services", "/services"],
  ["about", "/about"],
  ["projects", "/projects"],
  ["contact", "/contact"],
];
const viewports = [
  ["desktop", 1440, 900],
  ["mobile", 390, 844],
];

const issues = [];

function add(issue) {
  issues.push(issue);
  console.log("ISSUE", issue);
}

const browser = await chromium.launch({ headless: true });
await mkdir("/opt/cursor/artifacts/hofnie-final", { recursive: true });

for (const [vpName, width, height] of viewports) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("pageerror", (error) => consoleErrors.push(String(error)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  for (const [name, path] of pages) {
    consoleErrors.length = 0;
    const response = await page.goto(base + path, { waitUntil: "networkidle" });
    if (!response || response.status() >= 400) add(`${vpName} ${name} status ${response?.status()}`);

    await page.screenshot({
      path: `/opt/cursor/artifacts/hofnie-final/${name}-${vpName}.png`,
      fullPage: false,
    });

    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth };
    });
    if (overflow.scrollWidth > overflow.clientWidth + 1) {
      add(`${vpName} ${name} overflow ${overflow.scrollWidth} > ${overflow.clientWidth}`);
    }

    const brokenImages = await page.evaluate(() =>
      [...document.images]
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src),
    );
    if (brokenImages.length) add(`${vpName} ${name} broken images ${brokenImages.join(", ")}`);

    const text = await page.locator("body").innerText();
    if (text.includes("\u2014") || text.includes("\u2013")) add(`${vpName} ${name} contains a dash`);
    if (/years of experience|trusted by|500 projects|clients include/i.test(text)) {
      add(`${vpName} ${name} invented claim`);
    }

    if (consoleErrors.length) add(`${vpName} ${name} console ${consoleErrors.join(" | ")}`);
  }

  await page.goto(base + "/", { waitUntil: "networkidle" });
  const html = await page.content();
  for (const needle of [
    "tel:+264812672044",
    "tel:+264817817312",
    "mailto:erastusjohn36@gmail.com",
    "https://wa.me/264812672044",
    "https://wa.me/264817817312",
    "081 267 2044",
    "081 781 7312",
  ]) {
    if (!html.includes(needle)) add(`${vpName} home missing ${needle}`);
  }

  if (vpName === "mobile") {
    const menu = page.getByRole("button", { name: /menu/i });
    await menu.click();
    const contactLink = page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Contact" });
    if (!(await contactLink.isVisible())) add("mobile menu contact link hidden");
    await page.keyboard.press("Escape");
    if (await contactLink.isVisible()) add("mobile menu stayed open after Escape");
  } else {
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Services" }).click();
    await page.waitForURL("**/services");
    if (!page.url().endsWith("/services")) add("desktop nav did not open services");
  }

  await page.goto(base + "/", { waitUntil: "networkidle" });
  const slider = page.locator(".compare-range input");
  const before = await slider.inputValue();
  await slider.fill("12");
  const after = await slider.inputValue();
  if (before === after) add(`${vpName} slider did not move`);
  const widthStyle = await page.locator(".compare-before").getAttribute("style");
  if (!widthStyle?.includes("12%")) add(`${vpName} slider style ${widthStyle}`);

  const links = await page.locator("a[href^='/']").evaluateAll((nodes) =>
    [...new Set(nodes.map((node) => node.getAttribute("href")?.split("#")[0]).filter(Boolean))],
  );
  for (const href of links) {
    const res = await page.request.get(base + href);
    if (res.status() >= 400) add(`${vpName} broken link ${href} ${res.status()}`);
  }

  await context.close();
}

await browser.close();
console.log(issues.length ? `FAILED ${issues.length}` : "AUDIT CLEAN");
process.exit(issues.length ? 1 : 0);
