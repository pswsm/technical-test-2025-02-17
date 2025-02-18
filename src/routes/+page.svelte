<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>AlexPhone</title>
</svelte:head>
<h1>Welcome to SvelteKit</h1>
<section id="main">
	{#await data.skus}
		<p>loading skus...</p>
	{:then skus}
		{@debug skus}
		<p>skus loaded</p>
	{/await}
</section>
