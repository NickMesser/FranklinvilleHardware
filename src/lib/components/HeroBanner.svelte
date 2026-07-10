<script lang="ts">
	export let title: string;
	export let intro: string;
	export let image: string;
	export let align: 'left' | 'center' = 'center';
	export let kicker = '';
</script>

<svelte:head>
	<link rel="preload" as="image" href={image} fetchpriority="high" />
</svelte:head>

<section class="relative isolate overflow-hidden bg-navy">
	<div class="absolute inset-0">
		<img
			src={image}
			alt=""
			width="960"
			height="1280"
			fetchpriority="high"
			decoding="async"
			class="h-full w-full object-cover brightness-[0.58]"
		/>
		<div class="absolute inset-0 bg-navy-dark/82"></div>
		<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,53,0.76),rgba(15,32,53,0.68))]"></div>
	</div>

	<div class="page-shell relative py-16 md:py-20">
		<div class:max-w-3xl={align === 'left'} class:text-center={align === 'center'}>
			{#if kicker}
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-amber">{kicker}</p>
			{/if}
			<h1 class="mt-4 text-2xl font-bold leading-tight text-slate-50 md:text-3xl lg:text-4xl">{title}</h1>
			<p class="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-100 md:text-base">{intro}</p>
			<slot />
		</div>
	</div>
</section>
