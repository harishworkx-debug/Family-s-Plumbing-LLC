import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { createServer, defineConfig, type Plugin } from 'vite';

const SRC_DIR = fileURLToPath(new URL('./src', import.meta.url));
const PUBLIC_SITEMAP = fileURLToPath(new URL('./public/sitemap.xml', import.meta.url));

function buildSitemapXml(siteUrl: string, paths: string[]): string {
  const uniquePaths = Array.from(new Set(paths));
  const urls = uniquePaths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function sitemapGeneratorPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    async buildStart() {
      const server = await createServer({
        configFile: false,
        resolve: { alias: { '@': SRC_DIR } },
        server: { middlewareMode: true, watch: null },
        appType: 'custom',
        optimizeDeps: { noDiscovery: true },
      });

      try {
        const [{ getAllSitePaths }, { BUSINESS }] = await Promise.all([
          server.ssrLoadModule(resolve(SRC_DIR, 'lib/routes.ts')),
          server.ssrLoadModule(resolve(SRC_DIR, 'data/business.ts')),
        ]);
        const xml = buildSitemapXml(BUSINESS.siteUrl, getAllSitePaths());
        writeFileSync(PUBLIC_SITEMAP, xml, 'utf8');
      } finally {
        await server.close();
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemapGeneratorPlugin()],
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
