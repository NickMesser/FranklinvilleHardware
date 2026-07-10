<script lang="ts">
	import { siteMeta } from '$lib/data/site';
	import { makeWebPageSchema, toAbsoluteUrl } from '$lib/seo';

	type JsonLd = Record<string, unknown>;

	type Props = {
		title: string;
		description: string;
		path: string;
		image?: string;
		imageAlt?: string;
		imageWidth?: number;
		imageHeight?: number;
		type?: 'website' | 'article';
		jsonLd?: JsonLd[];
	};

	let {
		title,
		description,
		path,
		image = siteMeta.socialImage,
		imageAlt = 'Franklinville Hardware — local help, trusted brands, ready for the job',
		imageWidth = 1200,
		imageHeight = 630,
		type = 'website',
		jsonLd = []
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={toAbsoluteUrl(path)} />

	<meta property="og:site_name" content={siteMeta.name} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={toAbsoluteUrl(path)} />
	<meta property="og:image" content={toAbsoluteUrl(image)} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:image:width" content={String(imageWidth)} />
	<meta property="og:image:height" content={String(imageHeight)} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={toAbsoluteUrl(image)} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#each [makeWebPageSchema({ title, description, path }), ...jsonLd] as schema}
		<script type="application/ld+json">
			{JSON.stringify(schema)}
		</script>
	{/each}
</svelte:head>
