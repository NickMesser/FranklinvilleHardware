<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { navLinks, siteMeta, storeHours } from '$lib/data/site';

	const year = new Date().getFullYear();
</script>

<footer class="bg-navy text-slate-300">
	<div class="page-shell py-12">
		<div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1.1fr]">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.28em] text-brand-amber">Local and full-service</p>
				<h2 class="mt-4 text-2xl font-bold text-white">{siteMeta.name}</h2>
				<p class="mt-4 max-w-md text-sm leading-7 text-slate-300">
					{siteMeta.tagline} Stop in for trusted brands, project advice, paint help, repair services, and neighborly support.
				</p>
			</div>

			<div>
				<h3 class="text-base font-semibold text-white">Explore</h3>
				<ul class="mt-4 space-y-3 text-sm">
					{#each navLinks as link}
						<li><a href={link.href} class="hover:text-white">{link.label}</a></li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-base font-semibold text-white">Visit or Call</h3>
				<ul class="mt-4 space-y-3 text-sm">
					<li class="flex items-start gap-3">
						<Icon name="location" className="mt-0.5 h-4 w-4 flex-none text-brand-amber" />
						<a href={siteMeta.mapUrl} target="_blank" rel="noreferrer" class="hover:text-white">{siteMeta.address}</a>
					</li>
					<li class="flex items-start gap-3">
						<Icon name="phone" className="mt-0.5 h-4 w-4 flex-none text-brand-amber" />
						<a href={siteMeta.phoneHref} class="hover:text-white">{siteMeta.phoneDisplay}</a>
					</li>
					<li class="flex items-start gap-3">
						<Icon name="email" className="mt-0.5 h-4 w-4 flex-none text-brand-amber" />
						<a href={siteMeta.emailHref} class="hover:text-white">{siteMeta.email}</a>
					</li>
				</ul>

				<div class="mt-6 rounded-3xl bg-white/8 p-4">
					<p class="text-sm font-semibold text-white">Store Hours</p>
					<ul class="mt-3 space-y-2 text-sm">
						{#each storeHours as row}
							<li class="flex items-center justify-between gap-4">
								<span>{row.shortLabel}</span>
								<span class="font-medium text-white">{row.hours}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
			<p>&copy; {year} {siteMeta.name}. All rights reserved.</p>
		</div>
	</div>
</footer>
