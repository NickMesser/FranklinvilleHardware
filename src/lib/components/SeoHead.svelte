<script lang="ts">
	import { siteMeta } from '$lib/data/site';
	import { makeWebPageSchema, toAbsoluteUrl } from '$lib/seo';

	type JsonLd = Record<string, unknown>;

	type Props = {
		title: string;
		description: string;
		path: string;
		image?: string;
		type?: 'website' | 'article';
		jsonLd?: JsonLd[];
	};

	let {
		title,
		description,
		path,
		image = siteMeta.socialImage,
		type = 'website',
		jsonLd = []
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={toAbsoluteUrl(path)} />

	<meta property="og:site_name" content={siteMeta.name} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={toAbsoluteUrl(path)} />
	<meta property="og:image" content={toAbsoluteUrl(image)} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={toAbsoluteUrl(image)} />

	{#each [makeWebPageSchema({ title, description, path }), ...jsonLd] as schema}
		<script type="application/ld+json">
			{JSON.stringify(schema)}
		</script>
	{/each}
</svelte:head>
