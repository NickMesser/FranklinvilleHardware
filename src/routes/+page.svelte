<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import BrandGrid from '$lib/components/BrandGrid.svelte';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import {
		featuredServiceLinks,
		homeFeatures,
		homeGallery,
		hardwareBrands,
		paintBrands,
		siteMeta
	} from '$lib/data/site';
</script>

<SeoHead
	title="Hardware Store in Franklinville, NY | Franklinville Hardware"
	description="Franklinville Hardware is your local hardware store in Franklinville, NY for key cutting, paint matching, pump propane tank refills, and authorized Stihl dealer and service support."
	path="/"
/>

<HeroBanner
	title="Your local hardware store in Franklinville, NY for everyday projects and service."
	intro="Find tools, paint, plumbing, seasonal supplies, key cutting, paint matching, pump propane refills, and authorized Stihl dealer and service support all in one Franklinville stop."
	image="/IMG_1970 Large.jpeg"
	kicker="Local hardware store"
>
	<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a href="/services" class="button-primary">Explore Services</a>
		<a href="/contact" class="button-secondary">Plan Your Visit</a>
	</div>
</HeroBanner>

<section class="section-space">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Why Franklinville Hardware"
				title="A better hardware experience for everyday projects."
				intro="We focus on practical products, local service, and straightforward help so Franklinville homeowners, contractors, and DIYers can get what they need without the big-box runaround."
			/>
		</div>

		<div use:reveal class="reveal-stagger mt-12 grid gap-6 md:grid-cols-3">
			{#each homeFeatures as feature}
				<article class="surface-card rounded-3xl p-8">
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-lighter text-navy">
						<Icon name={feature.icon} className="h-7 w-7" />
					</div>
					<h3 class="mt-6 text-base font-bold text-navy-dark">{feature.title}</h3>
					<p class="mt-3 leading-7 text-slate-600">{feature.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-space bg-white">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Popular local services"
				title="More than shelves of hardware."
				intro="Customers around Franklinville count on us for quick, practical services that save a trip out of town."
			/>
		</div>

		<div use:reveal class="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each featuredServiceLinks as service}
				<a href={service.href} class="surface-card rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1">
					<h3 class="text-base font-bold text-navy-dark">{service.title}</h3>
					<p class="mt-3 leading-7 text-slate-600">{service.description}</p>
					<span class="mt-5 inline-block text-sm font-semibold text-brand-red">Learn More</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section-space bg-navy-lighter/65">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Trusted brands"
				title="Well-known names for jobs large and small."
				intro="We stock the tools, repair products, paint lines, and outdoor power equipment brands that homeowners and pros already know and trust."
			/>
		</div>

		<div use:reveal class="reveal mt-12">
			<BrandGrid brands={hardwareBrands} />
		</div>

		<div use:reveal class="reveal mt-12">
			<p class="text-center text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Paint department</p>
			<div class="mt-6">
				<BrandGrid brands={paintBrands} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" compact />
			</div>
		</div>
	</div>
</section>

<section class="section-space bg-white">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Inside the store"
				title="A closer look at what you'll find inside."
				intro="From paint and plumbing to hand tools and seasonal supplies, the store is laid out to make project shopping easy."
			/>
		</div>

		<div use:reveal class="reveal-stagger mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
			{#each homeGallery as image}
				<div class="overflow-hidden rounded-3xl shadow-card aspect-[4/3]">
					<img src={image.src} alt={image.alt} class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section-space">
	<div class="page-shell">
		<div use:reveal class="reveal surface-card rounded-[2rem] px-6 py-12 text-center sm:px-10">
			<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Welcome to Franklinville Hardware</p>
			<h2 class="mx-auto mt-4 max-w-3xl text-xl font-bold tracking-tight text-navy-dark md:text-2xl">
				Helpful service, practical inventory, and a store that still feels local.
			</h2>
			<p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
				Since {siteMeta.yearOpened}, we've focused on making Franklinville Hardware the kind of place where you can ask questions, compare options, and leave ready to finish the job with confidence, whether you need a key cut, a propane tank refill, or the right part for a repair.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a href="/about" class="button-primary">Learn More About Us</a>
				<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-secondary">View Inventory</a>
			</div>
		</div>
	</div>
</section>
