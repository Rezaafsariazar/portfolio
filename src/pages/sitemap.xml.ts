import { site } from '../data/site';

const urls = ['/', '/de/'];
export const GET = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls
      .map(
        (u) =>
          `  <url><loc>${site.url}${u}</loc><xhtml:link rel="alternate" hreflang="en" href="${site.url}/"/><xhtml:link rel="alternate" hreflang="de" href="${site.url}/de/"/></url>`,
      )
      .join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
