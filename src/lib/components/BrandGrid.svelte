<script lang="ts">
	import type { BrandCard } from '$lib/data/site';

	export let brands: BrandCard[] = [];
	export let columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';
	export let compact = false;
</script>

<div class={`grid ${columns} gap-4 sm:gap-5`}>
	{#each brands as brand}
		<div
			class={`surface-card flex items-center justify-center rounded-3xl px-4 ${
				compact ? 'h-24' : 'min-h-28 py-4'
			} ${brand.containerClass ?? ''}`}
		>
			{#if brand.kind === 'image'}
				<img
					src={brand.src}
					alt={brand.alt}
					class={`max-h-14 w-auto max-w-full object-contain ${brand.imageClass ?? ''}`}
					loading="lazy"
				/>
			{:else}
				<span class={brand.textClass ?? 'text-lg font-semibold text-slate-700'}>{brand.text}</span>
			{/if}
		</div>
	{/each}
</div>
