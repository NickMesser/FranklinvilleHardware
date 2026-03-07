<script lang="ts">
	import type { IconName } from '$lib/data/site';

	export let name: IconName;
	export let className = 'h-5 w-5';
</script>

{#if name === 'location'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.8"
			d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z"
		/>
		<circle cx="12" cy="11" r="2.5" stroke-width="1.8" />
	</svg>
{:else if name === 'clock'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="12" cy="12" r="9" stroke-width="1.8" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 7v5l3 2" />
	</svg>
{:else if name === 'phone'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.8"
			d="M4.5 5.5a2 2 0 0 1 2-2h2.2a1 1 0 0 1 .95.68l1.2 3.58a1 1 0 0 1-.5 1.2l-1.7.83a13.8 13.8 0 0 0 6.56 6.56l.83-1.7a1 1 0 0 1 1.2-.5l3.58 1.2a1 1 0 0 1 .68.95v2.2a2 2 0 0 1-2 2h-1c-8.28 0-15-6.72-15-15v-1Z"
		/>
	</svg>
{:else if name === 'email'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<rect x="3" y="5" width="18" height="14" rx="2" stroke-width="1.8" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m4 7 8 6 8-6" />
	</svg>
{:else if name === 'check'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="12" cy="12" r="9" stroke-width="1.8" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m8.5 12.2 2.3 2.3 4.7-5.2" />
	</svg>
{:else if name === 'wrench'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.8"
			d="m14.7 6.3 3-3a4 4 0 0 1-5.2 5.9L6.8 15a2.1 2.1 0 1 1-3 3l5.8-5.8a4 4 0 0 1 5.9-5.2Z"
		/>
	</svg>
{:else if name === 'community'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="9" cy="9" r="3" stroke-width="1.8" />
		<circle cx="17" cy="8" r="2.5" stroke-width="1.8" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 19a5 5 0 0 1 10 0" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14 18.5a4 4 0 0 1 6 0" />
	</svg>
{:else if name === 'heart'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.8"
			d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z"
		/>
	</svg>
{:else if name === 'star'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.8"
			d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.4l-5.3 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z"
		/>
	</svg>
{:else if name === 'spark'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3v4" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 17v4" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m4.5 7.5 3 1.5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m16.5 15 3 1.5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m19.5 7.5-3 1.5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m7.5 15-3 1.5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8.5 14.5 12 12 15.5 9.5 12 12 8.5Z" />
	</svg>
{:else if name === 'bolt'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
	</svg>
{:else if name === 'package'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7.5V16.5L12 21 20 16.5V7.5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 12v9" />
	</svg>
{:else if name === 'key'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="16" cy="8" r="4" stroke-width="1.8" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 12 5 19h3v-3h3v-3h1Z" />
	</svg>
{:else if name === 'toolbox'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<rect x="3" y="8" width="18" height="11" rx="2" stroke-width="1.8" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 12h18" />
	</svg>
{:else if name === 'paint'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.8"
			d="M7 19a3 3 0 1 1 0-6h7.5a4.5 4.5 0 1 0 0-9A10 10 0 1 0 7 19Z"
		/>
		<circle cx="15.5" cy="8" r="1" stroke-width="1.8" />
	</svg>
{:else if name === 'menu'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7h16" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 12h16" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 17h16" />
	</svg>
{:else if name === 'close'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m6 6 12 12" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M18 6 6 18" />
	</svg>
{:else if name === 'external'}
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14 5h5v5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 14 19 5" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
	</svg>
{/if}
