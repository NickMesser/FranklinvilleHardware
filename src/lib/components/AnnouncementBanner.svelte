<script lang="ts">
	import { onMount } from 'svelte';
	import { getActiveAnnouncements, type SiteAnnouncement } from '$lib/data/site';

	let activeAnnouncements: SiteAnnouncement[] = [];

	onMount(() => {
		activeAnnouncements = getActiveAnnouncements();
	});
</script>

{#if activeAnnouncements.length}
	<section class="border-b border-amber-100 bg-amber-50/50">
		<div class="page-shell space-y-2 py-2.5 sm:py-3">
			{#each activeAnnouncements as announcement}
				<div class="rounded-2xl border border-amber-100 bg-white/65 px-4 py-3 shadow-[0_1px_8px_rgba(15,23,42,0.04)] sm:px-4.5">
					<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div class="min-w-0">
							<p class="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-red/85">Announcement</p>
							<h2 class="mt-1 text-sm font-semibold text-navy-dark">{announcement.title}</h2>
							<p class="mt-0.5 text-sm leading-5 text-slate-600">{announcement.message}</p>
						</div>

						{#if announcement.linkHref && announcement.linkLabel}
							<a
								href={announcement.linkHref}
								class="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy transition hover:border-slate-300 hover:bg-slate-50"
							>
								{announcement.linkLabel}
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}
