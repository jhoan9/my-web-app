// Prerender the built page: open build/index.html in headless Chromium, let React render it, and write
// the markup into the HTML file, so the page is readable before any script runs (search engines, link
// previews, the design checks). index.tsx then hydrates it. The design kit's own scripts are blocked
// while the snapshot is taken, so it captures React's markup exactly as React will hydrate it.
// Needs Playwright; without it the build stays a plain client-rendered app.
import { createRequire } from "node:module";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("build");
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require("playwright")); } catch {
  console.warn("prerender: playwright not found, the build stays client-rendered");
  process.exit(0);
}

const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".png": "image/png", ".ico": "image/x-icon" };
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(root, url);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root, "index.html");
  res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.route(/\/assets\/.*\.js$/, (route) => route.abort());
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) => route.abort());
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "load" });
  await page.waitForSelector("#root main");
  const markup = await page.$eval("#root", (el) => el.innerHTML);
  const htmlFile = path.join(root, "index.html");
  const html = fs.readFileSync(htmlFile, "utf8");
  if (!html.includes('<div id="root"></div>')) throw new Error("no empty #root in build/index.html");
  fs.writeFileSync(htmlFile, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  console.log(`prerender: wrote ${markup.length} characters into build/index.html`);
} finally {
  await browser.close();
  server.close();
}
