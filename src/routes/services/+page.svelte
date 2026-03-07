<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { servicesList, siteMeta } from '$lib/data/site';
</script>

<svelte:head>
	<title>Services | Franklinville Hardware</title>
	<meta
		name="description"
		content="Explore the in-store services, paint help, special orders, and project support available at Franklinville Hardware."
	/>
</svelte:head>

<HeroBanner
	title="Practical services that help projects keep moving."
	intro="Franklinville Hardware offers more than shelves of product. We also help with paint, repair needs, special orders, and the everyday service work that saves time."
	image="/IMG_1967 Large.jpeg"
	kicker="Our services"
/>

<section class="section-space bg-white">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="What we offer"
				title="Project support that goes beyond retail."
				intro="Whether you need a quick key cut, the right paint mix, or help tracking down a specialty item, our team is here to help."
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
				We are always happy to help track down products, talk through options, and point you toward the best fit for the job.
			</p>
			<div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a href="/contact" class="button-primary">Contact Us</a>
				<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-secondary">View Inventory</a>
			</div>
		</div>
	</div>
</section>
