<script lang="ts">
	import Device from '$lib/components/Device.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>AlexPhone</title>
</svelte:head>
<section id="main">
	{#await data.devices}
		<p>loading skus...</p>
	{:then devices}
		{#each devices as device}
			<Device {device} />
		{/each}
		<p>skus loaded</p>
	{/await}
</section>
