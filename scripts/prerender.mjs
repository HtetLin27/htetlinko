import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { buildSeoHead, getSeoForPath } from "../src/seo/siteSeo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.resolve(root, "dist");
const routes = ["/", "/htet-lin-ko"];

const templatePath = path.resolve(distDir, "index.html");
const template = await fs.readFile(templatePath, "utf-8");
const assetFiles = await fs.readdir(path.resolve(distDir, "assets"));

const replaceBuiltAssetPaths = (html) =>
  html.replace(/\/src\/assets\/images\/certificates\/([^"')\s]+)/g, (match, filename) => {
    const extension = path.extname(filename);
    const basename = path.basename(filename, extension);
    const builtFile = assetFiles.find((assetFile) => assetFile.startsWith(`${basename}-`) && assetFile.endsWith(extension));

    return builtFile ? `/assets/${builtFile}` : match;
  });

const vite = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false, ws: false },
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

  await Promise.all(
    routes.map(async (route) => {
      const appHtml = render(route);
      const seoHtml = buildSeoHead(getSeoForPath(route));
      const html = replaceBuiltAssetPaths(
        template
          .replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)
          .replace(
            /<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/,
            `<!-- SEO_HEAD_START -->\n    ${seoHtml}\n    <!-- SEO_HEAD_END -->`,
          ),
      );

      const outputPath =
        route === "/"
          ? path.resolve(distDir, "index.html")
          : path.resolve(distDir, route.replace(/^\//, ""), "index.html");

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, html);
    }),
  );
} finally {
  await vite.close();
}
