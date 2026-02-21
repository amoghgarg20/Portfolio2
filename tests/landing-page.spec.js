/**
 * Playwright screenshot tests for the landing page (index.html).
 *
 * Usage:
 *   npm install
 *   npx playwright install chromium
 *   npm test
 *
 * Screenshots are saved to screenshots/landing-desktop.png and
 * screenshots/landing-mobile.png.
 */

const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Minimal static file server for the repo root
// ---------------------------------------------------------------------------
function createServer(root) {
  return http.createServer((req, res) => {
    let filePath = path.join(root, req.url === '/' ? '/index.html' : req.url);
    // strip query strings
    filePath = filePath.split('?')[0];

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png' };
      res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
(async () => {
  const ROOT = path.resolve(__dirname, '..');
  const SCREENSHOTS = path.join(ROOT, 'screenshots');

  const server = createServer(ROOT);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const browser = await chromium.launch();

  const viewports = [
    { name: 'desktop', width: 1280, height: 800, file: 'landing-desktop.png' },
    { name: 'mobile',  width: 390,  height: 844, file: 'landing-mobile.png'  },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto(base, { waitUntil: 'networkidle' });
    const outPath = path.join(SCREENSHOTS, vp.file);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved ${outPath}`);
    await context.close();
  }

  await browser.close();
  server.close();
  console.log('Done.');
})();
