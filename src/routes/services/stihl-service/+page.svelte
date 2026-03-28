<script lang="ts">
	import LocalServicePage from '$lib/components/LocalServicePage.svelte';
	import { localServicePages } from '$lib/data/localServices';
</script>

<LocalServicePage pageData={localServicePages.stihlService} />
