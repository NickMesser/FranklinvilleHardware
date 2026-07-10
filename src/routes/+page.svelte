<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import BrandGrid from '$lib/components/BrandGrid.svelte';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { makeFaqSchema } from '$lib/seo';
	import {
		featuredServiceLinks,
		homeFeatures,
		homeGallery,
		hardwareBrands,
		paintBrands,
		siteMeta
	} from '$lib/data/site';

	const homeFaqs = [
		{
			question: 'Does Franklinville Hardware refill propane tanks?',
			answer: 'Yes. We offer on-site pump propane refills for grill tanks and other eligible portable cylinders.'
		},
		{
			question: 'Can Franklinville Hardware cut keys and match paint?',
			answer: 'Yes. Key cutting and custom paint matching are available in the store at 99 N Main St in Franklinville.'
		},
		{
			question: 'Is Franklinville Hardware an authorized Stihl dealer?',
			answer: 'Yes. We sell Stihl outdoor power equipment and provide authorized local service support.'
		},
		{
			question: 'Can I check store inventory before visiting?',
			answer: 'Yes. Use the View Inventory link to browse the online Paladin Shop, or call the store to confirm a specific item.'
		}
	] as const;
</script>

<SeoHead
	title="Hardware Store in Franklinville, NY | Franklinville Hardware"
	description="Franklinville Hardware is your local hardware store in Franklinville, NY for key cutting, paint matching, pump propane tank refills, and authorized Stihl dealer and service support."
	path="/"
	jsonLd={[makeFaqSchema([...homeFaqs])]}
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

<nav class="border-b border-slate-200 bg-white" aria-label="Quick store actions">
	<div class="page-shell grid gap-px py-3 sm:grid-cols-3">
		<a href={siteMeta.phoneHref} class="quick-action">
			<Icon name="phone" className="h-5 w-5 text-brand-red" />
			<span><strong>Call the store</strong><small>{siteMeta.phoneDisplay}</small></span>
		</a>
		<a href={siteMeta.mapUrl} target="_blank" rel="noreferrer" class="quick-action">
			<Icon name="location" className="h-5 w-5 text-brand-red" />
			<span><strong>Get directions</strong><small>99 N Main St</small></span>
		</a>
		<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="quick-action">
			<Icon name="package" className="h-5 w-5 text-brand-red" />
			<span><strong>Check inventory</strong><small>Browse before you visit</small></span>
		</a>
	</div>
</nav>

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
					<img
						src={image.src}
						alt={image.alt}
						width="960"
						height="1280"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						loading="lazy"
						decoding="async"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section-space bg-navy-lighter/65">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Quick answers"
				title="What customers ask before they visit."
				intro="A few useful details about the local services available at Franklinville Hardware."
			/>
		</div>
		<div use:reveal class="reveal-stagger mx-auto mt-10 max-w-4xl space-y-4">
			{#each homeFaqs as faq}
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
