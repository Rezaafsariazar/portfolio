import { site } from '../data/site';

export const GET = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.w3.org/2000/sitemap/0.9">\n  <url><loc>${site.url}/</loc></url>\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
