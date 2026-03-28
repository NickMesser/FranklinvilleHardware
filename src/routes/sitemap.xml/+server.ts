import type { RequestHandler } from './$types';
import { toAbsoluteUrl } from '$lib/seo';

export const prerender = true;

const routes = [
	'/',
	'/about',
	'/contact',
	'/services',
	'/services/key-cutting',
	'/services/paint-matching',
	'/services/propane-tank-refill',
	'/services/stihl-service',
	'/services/screen-window-repair',
	'/services/glass-plexiglass-cutting'
];

export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `  <url>
    <loc>${toAbsoluteUrl(route)}</loc>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
