<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import BrandGrid from '$lib/components/BrandGrid.svelte';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import {
		aboutStoryImages,
		hardwareBrands,
		missionValues,
		paintBrands,
		serviceDepartmentHighlights
	} from '$lib/data/site';
</script>

<svelte:head>
	<title>About | Franklinville Hardware</title>
	<meta
		name="description"
		content="Learn about Franklinville Hardware, our hometown approach, service department, and paint department."
	/>
</svelte:head>

<HeroBanner
	title="Hardware, service, and hometown know-how in one place."
	intro="Franklinville Hardware was built to bring dependable products, personal service, and practical project help back to the center of town."
	image="/IMG_1972 Large.jpeg"
	kicker="About us"
/>

<section class="section-space bg-white">
	<div class="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
		<div use:reveal class="reveal">
			<SectionHeading
				align="left"
				eyebrow="Our story"
				title="A local store built around service, not guesswork."
				intro="Franklinville Hardware opened in 2021 to bring a full-service hometown hardware option back to the Franklinville community."
			/>
			<div class="mt-6 space-y-4 text-lg leading-8 text-slate-600">
				<p>
					From day one, the goal has been simple: create a store where neighbors can find what they need, get straightforward advice, and feel comfortable asking questions about the job in front of them.
				</p>
				<p>
					Today, the 8,000-square-foot store is packed with dependable merchandise, trusted brands, and the kind of personal attention that helps homeowners and contractors make confident decisions.
				</p>
			</div>
		</div>

		<div use:reveal class="reveal overflow-hidden rounded-[2rem] shadow-soft">
			<img src={aboutStoryImages.story.src} alt={aboutStoryImages.story.alt} class="h-full w-full object-cover" />
		</div>
	</div>
</section>

<section class="section-space bg-navy-lighter/65">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Brands we carry"
				title="Names customers already trust."
				intro="We stock a practical mix of hardware, power tool, repair, and outdoor brands that help projects move faster."
			/>
		</div>
		<div use:reveal class="reveal mt-12">
			<BrandGrid brands={hardwareBrands} />
		</div>
	</div>
</section>

<section class="section-space bg-white">
	<div class="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
		<div use:reveal class="reveal">
			<SectionHeading
				align="left"
				eyebrow="Service department"
				title="More than a place to buy supplies."
				intro="Our in-store services help you solve problems quickly without making extra stops around town."
			/>
			<div class="mt-8 overflow-hidden rounded-[2rem] shadow-card">
				<img src={aboutStoryImages.service.src} alt={aboutStoryImages.service.alt} class="h-72 w-full object-cover" />
			</div>
		</div>

		<div use:reveal class="reveal-stagger grid gap-4 sm:grid-cols-2">
			{#each serviceDepartmentHighlights as item}
				<article class={`surface-card rounded-3xl p-5 ${item.title === 'Propane' ? 'sm:col-span-2' : ''}`}>
					<div class="flex items-start gap-4">
						<div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
							<Icon name={item.icon} className="h-5 w-5" />
						</div>
						<div>
							<h3 class="text-sm font-bold text-navy-dark">{item.title}</h3>
							<p class="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-space bg-navy-lighter/65">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Paint department"
				title="Color matching and dependable paint products."
				intro="Whether you are touching up one wall or starting a bigger refresh, our paint department helps you match, compare, and move forward with confidence."
			/>
		</div>
		<div use:reveal class="reveal mt-12">
			<BrandGrid brands={paintBrands} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" compact />
		</div>
		<div use:reveal class="reveal-stagger mt-10 grid gap-6 md:grid-cols-2">
			<div class="overflow-hidden rounded-[2rem] shadow-card aspect-[4/3]">
				<img src={aboutStoryImages.paintOne.src} alt={aboutStoryImages.paintOne.alt} class="h-full w-full object-cover" />
			</div>
			<div class="overflow-hidden rounded-[2rem] shadow-card aspect-[4/3]">
				<img src={aboutStoryImages.paintTwo.src} alt={aboutStoryImages.paintTwo.alt} class="h-full w-full object-cover" />
			</div>
		</div>
		<div use:reveal class="reveal mt-8">
			<div class="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
					<Icon name="paint" className="h-6 w-6" />
				</div>
				<h3 class="mt-4 text-lg font-bold text-navy-dark">Bring us the sample. We'll help match it.</h3>
				<p class="mt-3 text-slate-600">
					Our team can help dial in the right color and finish so your next project starts on the right foot.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section-space bg-white">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Mission and values"
				title="The kind of store our community deserves."
				intro="We believe a hometown hardware store should be straightforward, helpful, and genuinely invested in the people who shop there."
			/>
		</div>

		<div use:reveal class="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each missionValues as value}
				<article class="surface-card rounded-3xl p-6 text-center">
					<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
						<Icon name={value.icon} className="h-6 w-6" />
					</div>
					<h3 class="mt-5 text-sm font-bold text-navy-dark">{value.title}</h3>
					<p class="mt-3 text-sm leading-7 text-slate-600">{value.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-space">
	<div class="page-shell">
		<div use:reveal class="reveal surface-card rounded-[2rem] px-6 py-12 text-center sm:px-10">
			<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Part of the community</p>
			<h2 class="mx-auto mt-4 max-w-3xl text-xl font-bold tracking-tight text-navy-dark md:text-2xl">
				We're proud to be a store people can rely on.
			</h2>
			<p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
				Franklinville is home, and we want the store to feel like part of the neighborhood. Whether you are fixing a faucet or planning a bigger renovation, we're here to help you get started.
			</p>
			<a href="/contact" class="button-primary mt-8">Come Say Hello</a>
		</div>
	</div>
</section>
