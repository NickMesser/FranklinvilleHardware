<script lang="ts">
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { featuredServiceLinks, siteMeta } from '$lib/data/site';
	import type { LocalServicePage } from '$lib/data/localServices';
	import { makeBreadcrumbSchema, makeFaqSchema } from '$lib/seo';

	type Props = {
		pageData: LocalServicePage;
	};

	let { pageData }: Props = $props();

	function getRelatedServices() {
		return featuredServiceLinks.filter((service) => service.href !== pageData.path).slice(0, 3);
	}

	function getSeoSchemas() {
		return [
			makeBreadcrumbSchema([
				{ name: 'Home', path: '/' },
				{ name: 'Services', path: '/services' },
				{ name: pageData.title, path: pageData.path }
			]),
			makeFaqSchema(pageData.faqs)
		];
	}
</script>

<SeoHead
	title={pageData.metaTitle}
	description={pageData.metaDescription}
	path={pageData.path}
	jsonLd={getSeoSchemas()}
/>

<HeroBanner title={pageData.heroTitle} intro={pageData.heroIntro} image={pageData.image} kicker={pageData.kicker}>
	<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a href="/contact" class="button-primary">Plan Your Visit</a>
		<a href="/services" class="button-secondary">See All Services</a>
	</div>
</HeroBanner>

<section class="section-space bg-white">
	<div class="page-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
		<div>
			<SectionHeading
				align="left"
				eyebrow={pageData.kicker}
				title={pageData.overviewTitle}
				intro={pageData.overviewIntro}
			/>
			<div class="mt-6 space-y-4 text-lg leading-8 text-slate-600">
				{#each pageData.details as detail, index}
					{#if index === 0}
						<p>{detail}</p>
					{/if}
				{/each}
			</div>
		</div>

		<div class="surface-card rounded-[2rem] p-8">
			<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Why locals use this service</p>
			<div class="mt-6 space-y-4">
				{#each pageData.highlights as highlight}
					<div class="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">{highlight}</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section-space bg-navy-lighter/65">
	<div class="page-shell">
		<SectionHeading eyebrow="Visit details" title={pageData.detailsTitle} intro="A few helpful notes before you stop by the store." />
		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each pageData.details as detail}
				<article class="surface-card rounded-3xl p-6">
					<p class="leading-7 text-slate-600">{detail}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-space bg-white">
	<div class="page-shell">
		<SectionHeading eyebrow="FAQ" title={`Common questions about ${pageData.title.toLowerCase()}.`} intro="These are the details customers usually want to confirm before they visit." />
		<div class="mt-10 space-y-4">
			{#each pageData.faqs as faq}
				<details class="surface-card rounded-3xl p-6">
					<summary class="cursor-pointer text-base font-bold text-navy-dark">{faq.question}</summary>
					<p class="mt-4 leading-7 text-slate-600">{faq.answer}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<section class="section-space">
	<div class="page-shell">
		<SectionHeading eyebrow="Related local services" title="More ways we help Franklinville projects move." intro="If you are already making the trip, these are some of the other popular in-store services customers ask for." />
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each getRelatedServices() as service}
				<a href={service.href} class="surface-card rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
					<h3 class="text-base font-bold text-navy-dark">{service.title}</h3>
					<p class="mt-3 leading-7 text-slate-600">{service.description}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section-space bg-white">
	<div class="page-shell">
		<div class="surface-card rounded-[2rem] px-6 py-12 text-center sm:px-10">
			<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Stop by Franklinville Hardware</p>
			<h2 class="mx-auto mt-4 max-w-3xl text-xl font-bold tracking-tight text-navy-dark md:text-2xl">
				Local service, practical answers, and one less trip out of town.
			</h2>
			<p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
				Visit us at {siteMeta.address}, call {siteMeta.phoneDisplay}, or check inventory online before you head over.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a href="/contact" class="button-primary">Get Directions</a>
				<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-secondary">View Inventory</a>
			</div>
		</div>
	</div>
</section>
