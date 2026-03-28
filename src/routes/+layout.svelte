<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import AnnouncementBanner from '$lib/components/AnnouncementBanner.svelte';
	import '../app.css';
	import { getHardwareStoreSchema } from '$lib/seo';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	const hardwareStoreSchema = getHardwareStoreSchema();
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script type="application/ld+json">
		{JSON.stringify(hardwareStoreSchema)}
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<SiteHeader />
	<AnnouncementBanner />
	<main class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />
</div>
