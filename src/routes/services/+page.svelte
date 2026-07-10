<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { servicesList, siteMeta } from '$lib/data/site';
</script>

<SeoHead
	title="Hardware Store Services in Franklinville, NY | Franklinville Hardware"
	description="Explore hardware store services in Franklinville, NY including key cutting, paint matching, pump propane tank refills, and authorized Stihl dealer and service support."
	path="/services"
/>

<HeroBanner
	title="Local hardware store services that save time and extra trips."
	intro="Franklinville Hardware offers practical in-store services for Franklinville projects, including key cutting, paint matching, pump propane refills, screen repair, glass cutting, and authorized Stihl dealer and service support."
	image="/IMG_1967 Large.jpeg"
	kicker="Our services"
/>

<section class="section-space bg-white">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="What we offer"
				title="Project support that goes beyond retail."
				intro="Whether you need a quick key cut, paint matching, a grill tank refill, or help with Stihl equipment, our team is here to help."
			/>
		</div>

		<div use:reveal class="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
			{#each servicesList as service}
				<article class="surface-card overflow-hidden rounded-[2rem]">
					{#if service.image}
						<div class={`h-48 overflow-hidden ${service.image.containerClass ?? ''}`}>
							<img
								src={service.image.src}
								alt={service.image.alt}
								class={`h-full w-full transition-transform duration-500 hover:scale-105 ${service.image.imageClass ?? 'object-cover'}`}
								loading="lazy"
								decoding="async"
							/>
						</div>
					{/if}

					<div class="p-8">
						{#if service.icon}
							<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
								<Icon name={service.icon} className="h-6 w-6" />
							</div>
						{/if}
						<h3 class={`text-base font-bold text-navy-dark ${service.icon ? 'mt-5' : ''}`}>{service.title}</h3>
						<p class="mt-3 leading-7 text-slate-600">{service.body}</p>
						{#if service.href}
							<a href={service.href} class="mt-5 inline-block text-sm font-semibold text-brand-red">Learn More</a>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-space">
	<div class="page-shell">
		<div use:reveal class="reveal surface-card rounded-[2rem] px-6 py-12 text-center sm:px-10">
			<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Need something specific?</p>
			<h2 class="mx-auto mt-4 max-w-3xl text-xl font-bold tracking-tight text-navy-dark md:text-2xl">
				If you do not see it on the shelf, ask us.
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
				We are always happy to help track down products, talk through options, and point you toward the best fit for the job, whether that means service work in-store or the right supplies to finish it yourself.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a href="/contact" class="button-primary">Contact Us</a>
				<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-secondary">View Inventory</a>
			</div>
		</div>
	</div>
</section>
