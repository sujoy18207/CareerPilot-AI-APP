#!/usr/bin/env node
/**
 * Capacitor / Ionic Appflow require webDir ("out") to exist even when
 * capacitor.config uses server.url to load the live site.
 * Next.js does not emit `out/` unless output: "export" (which this app can't use).
 */
const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const indexPath = path.join(outDir, "index.html");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>CareerPilot</title>
    <script>
      window.location.replace("https://www.careerpilot.cc/");
    </script>
  </head>
  <body>
    <p>Loading CareerPilot…</p>
  </body>
</html>
`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(indexPath, html, "utf8");
console.log("Prepared Capacitor webDir:", indexPath);
