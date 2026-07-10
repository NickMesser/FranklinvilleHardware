<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { featuredServiceLinks, getTodaysHoursDisplay, navLinks, siteMeta } from '$lib/data/site';
	import Icon from '$lib/components/Icon.svelte';

	let mobileMenuOpen = false;
	let servicesMenuOpen = false;
	let todaysHoursSummary = '';
	let todaysHoursHeadline = '';

	const isActive = (href: string) => (href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href));

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
		servicesMenuOpen = false;
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}

	onMount(() => {
		const hoursDisplay = getTodaysHoursDisplay();
		todaysHoursSummary = hoursDisplay.summary;
		todaysHoursHeadline = hoursDisplay.headline;
	});

	afterNavigate(() => {
		closeMenu();
	});
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<div class="bg-navy-dark text-slate-300">
	<div class="page-shell py-2 text-[11px] sm:py-3 sm:text-sm">
		<div class="flex items-center justify-between gap-3 sm:hidden">
			<div class="inline-flex min-w-0 items-center gap-2 text-slate-200">
				<Icon name="clock" className="h-4 w-4 shrink-0 text-brand-amber" />
				<span class="truncate">{todaysHoursSummary ? todaysHoursSummary : 'Open daily'}</span>
			</div>
			<a href={siteMeta.phoneHref} class="inline-flex shrink-0 items-center gap-2 font-medium text-slate-100 hover:text-white">
				<Icon name="phone" className="h-4 w-4 text-brand-amber" />
				<span>{siteMeta.phoneDisplay}</span>
			</a>
		</div>
		<div class="hidden sm:flex sm:flex-row sm:items-center sm:justify-between">
			<div class="flex flex-wrap items-center gap-4">
				<a href={siteMeta.mapUrl} target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 hover:text-white">
					<Icon name="location" className="h-4 w-4 text-brand-amber" />
					<span>{siteMeta.address}</span>
				</a>
				<div class="inline-flex items-center gap-2">
					<Icon name="clock" className="h-4 w-4 text-brand-amber" />
					<span>{todaysHoursHeadline ? todaysHoursHeadline : 'Local hardware, paint, and repair help all week long.'}</span>
				</div>
			</div>
			<a href={siteMeta.phoneHref} class="inline-flex items-center gap-2 font-medium hover:text-white">
				<Icon name="phone" className="h-4 w-4 text-brand-amber" />
				<span>{siteMeta.phoneDisplay}</span>
			</a>
		</div>
	</div>
</div>

<header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
	<div class="page-shell">
		<div class="flex h-20 items-center justify-between gap-4">
			<a href="/" class="inline-flex items-center gap-3">
				<div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white shadow-card">
					<Icon name="toolbox" className="h-5 w-5 text-brand-amber" />
				</div>
				<div>
					<p class="text-lg font-bold tracking-tight text-navy">{siteMeta.name}</p>
					<p class="text-sm text-slate-500">Franklinville, New York</p>
				</div>
			</a>

			<nav class="hidden items-center gap-2 md:flex" aria-label="Primary">
				{#each navLinks as link}
					{#if link.href === '/services'}
						<div class="relative">
							<div
								class={`inline-flex items-center rounded-full text-sm font-medium ${
									isActive(link.href)
										? 'bg-navy text-white shadow-sm'
										: 'text-slate-600 hover:bg-slate-100 hover:text-navy'
								}`}
							>
								<a href={link.href} class="py-2 pl-4 pr-2" aria-current={isActive(link.href) ? 'page' : undefined}>
									{link.label}
								</a>
								<button
									type="button"
									class="flex h-9 w-8 items-center justify-center rounded-r-full"
									aria-controls="services-menu"
									aria-expanded={servicesMenuOpen}
									aria-label={servicesMenuOpen ? 'Close services menu' : 'Open services menu'}
									on:click={() => (servicesMenuOpen = !servicesMenuOpen)}
								>
									<span aria-hidden="true" class={`text-xs transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`}>⌄</span>
								</button>
							</div>

							{#if servicesMenuOpen}
								<div id="services-menu" class="absolute right-0 mt-3 w-[34rem] rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
									<div class="flex items-center justify-between px-2 pb-3">
										<p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Popular services</p>
										<a href="/services" class="text-sm font-semibold text-brand-red hover:text-navy">See all services</a>
									</div>
									<div class="grid grid-cols-2 gap-2">
										{#each featuredServiceLinks as service}
											<a href={service.href} class="rounded-2xl px-3 py-3 hover:bg-slate-50">
												<span class="block text-sm font-semibold text-navy-dark">{service.title}</span>
												<span class="mt-1 block text-xs leading-5 text-slate-500">{service.description}</span>
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{:else}
						<a
							href={link.href}
							class={`rounded-full px-4 py-2 text-sm font-medium ${
								isActive(link.href)
									? 'bg-navy text-white shadow-sm'
									: 'text-slate-600 hover:bg-slate-100 hover:text-navy'
							}`}
							aria-current={isActive(link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					{/if}
				{/each}
				<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-primary ml-2">
					<span>View Inventory</span>
				</a>
			</nav>

			<button
				type="button"
				class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 md:hidden"
				aria-controls="mobile-menu"
				aria-expanded={mobileMenuOpen}
				aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				on:click={toggleMenu}
			>
				<Icon name={mobileMenuOpen ? 'close' : 'menu'} className="h-5 w-5" />
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div id="mobile-menu" class="border-t border-slate-200 bg-white md:hidden">
			<div class="page-shell space-y-2 py-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class={`block rounded-2xl px-4 py-3 text-base font-medium ${
							isActive(link.href)
								? 'bg-navy text-white'
								: 'text-slate-700 hover:bg-slate-100 hover:text-navy'
						}`}
						aria-current={isActive(link.href) ? 'page' : undefined}
					>
						{link.label}
					</a>
				{/each}
				<div class="px-4 pb-1 pt-3">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Popular services</p>
				</div>
				<div class="grid grid-cols-2 gap-2">
					{#each featuredServiceLinks as service}
						<a href={service.href} class="rounded-2xl bg-slate-50 px-3 py-3 text-sm font-medium leading-5 text-navy-dark">
							{service.title}
						</a>
					{/each}
				</div>
				<div class="grid grid-cols-2 gap-2 pt-2">
					<a href={siteMeta.phoneHref} class="button-secondary px-3">Call Store</a>
					<a href={siteMeta.mapUrl} target="_blank" rel="noreferrer" class="button-secondary px-3">Directions</a>
				</div>
				<a href={siteMeta.inventoryUrl} target="_blank" rel="noreferrer" class="button-primary mt-3 flex w-full">
					<span>View Inventory</span>
				</a>
			</div>
		</div>
	{/if}
</header>
