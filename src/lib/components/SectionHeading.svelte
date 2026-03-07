<script lang="ts">
	export let title: string;
	export let eyebrow = '';
	export let intro = '';
	export let align: 'left' | 'center' = 'center';
</script>

<div class:mx-auto={align === 'center'} class:max-w-3xl={align === 'center'} class:text-center={align === 'center'}>
	{#if eyebrow}
		<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">{eyebrow}</p>
	{/if}
	<h2 class="section-title mt-3">{title}</h2>
	<div class:mx-auto={align === 'center'} class="mt-4 h-1 w-16 rounded-full bg-brand-red"></div>
	{#if intro}
		<p class="section-copy mt-5">{intro}</p>
	{/if}
</div>
