<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { contactHighlights, siteMeta, storeHours } from '$lib/data/site';
</script>

<svelte:head>
	<title>Contact | Franklinville Hardware</title>
	<meta
		name="description"
		content="Visit, call, or email Franklinville Hardware. See our hours, address, and map."
	/>
</svelte:head>

<HeroBanner
	title="Stop by, call, or send us a note."
	intro="Questions about a project, product availability, or services? Reach out and we'll help point you in the right direction."
	image="/IMG_1970 Large.jpeg"
	kicker="Contact us"
/>

<section class="section-space bg-white">
	<div class="page-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
		<div>
			<div use:reveal class="reveal">
				<SectionHeading
					align="left"
					eyebrow="Get in touch"
					title="The easiest way to reach us."
					intro="Visit the store, browse current inventory online, or email us and we'll get back to you as soon as we can."
				/>
			</div>

			<div use:reveal class="reveal-stagger mt-8 space-y-4">
				{#each contactHighlights as item}
					<article class="surface-card rounded-3xl p-5">
						<div class="flex items-start gap-4">
							<div class="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-navy-lighter text-navy">
								<Icon name={item.icon} className="h-5 w-5" />
							</div>
							<div>
								<h3 class="text-sm font-bold text-navy-dark">{item.title}</h3>
								{#if item.icon === 'location'}
									<a href={siteMeta.mapUrl} target="_blank" rel="noreferrer" class="mt-2 block leading-7 text-slate-600 hover:text-brand-red">
										{item.body}
									</a>
								{:else if item.icon === 'phone'}
									<a href={siteMeta.phoneHref} class="mt-2 block leading-7 text-slate-600 hover:text-brand-red">{item.body}</a>
								{:else}
									<a href={siteMeta.emailHref} class="mt-2 block leading-7 text-slate-600 hover:text-brand-red">{item.body}</a>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>

		<div use:reveal class="reveal">
			<div class="surface-card rounded-[2rem] p-8">
				<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Store hours</p>
				<h2 class="mt-4 text-xl font-bold text-navy-dark md:text-2xl">Plan your visit.</h2>
				<div class="mt-8 space-y-3">
					{#each storeHours as row}
						<div class="flex items-center justify-between gap-6 rounded-2xl bg-slate-50 px-4 py-4">
							<span class="font-medium text-slate-700">{row.days}</span>
							<span class="text-right font-semibold text-navy">{row.hours}</span>
						</div>
					{/each}
				</div>

				<div class="mt-8 rounded-3xl bg-navy-dark p-6 text-slate-200">
					<h3 class="text-base font-bold text-slate-50">Browse inventory before you make the trip.</h3>
					<p class="mt-3 leading-7">
						Looking for a specific product? Check our Paladin Shop to see current inventory online before you head over.
					</p>
					<div class="mt-5 flex flex-col gap-3 sm:flex-row">
						<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-primary">View Inventory</a>
						<a href={siteMeta.emailHref} class="button-secondary border-white/20 bg-white/10 text-white hover:bg-white/15">
							Email Us
						</a>
					</div>
				</div>

				<div class="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5">
					<p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Online contact note</p>
					<p class="mt-3 leading-7 text-slate-600">
						We're keeping online contact simple for now. For the fastest response, call or email us directly instead of filling out a form that may delay your message.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-space bg-navy-lighter/65">
	<div class="page-shell">
		<div use:reveal class="reveal">
			<SectionHeading
				eyebrow="Find us"
				title="Right on Main Street in Franklinville."
				intro="Use the map below for directions, or tap the address above to open your preferred map app."
			/>
		</div>

		<div use:reveal class="reveal mt-10 overflow-hidden rounded-[2rem] border border-slate-200 shadow-soft">
			<iframe
				src={siteMeta.mapEmbedUrl}
				width="100%"
				height="420"
				style="border:0;"
				allowfullscreen={true}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Franklinville Hardware location"
			></iframe>
		</div>
	</div>
</section>
