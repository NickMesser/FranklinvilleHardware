<script lang="ts">
	import AnnouncementBanner from '$lib/components/AnnouncementBanner.svelte';
	import '../app.css';
	import { getHardwareStoreSchema, getWebSiteSchema } from '$lib/seo';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	const siteSchemas = [getHardwareStoreSchema(), getWebSiteSchema()];
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
	<link rel="manifest" href="/site.webmanifest" />
	{#each siteSchemas as schema}
		<script type="application/ld+json">
			{JSON.stringify(schema)}
		</script>
	{/each}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<a href="#main-content" class="skip-link">Skip to main content</a>
	<SiteHeader />
	<AnnouncementBanner />
	<main id="main-content" class="flex-1" tabindex="-1">
		{@render children()}
	</main>
	<SiteFooter />
</div>
