<script lang="ts">
	import Device from '$lib/components/Device.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>AlexPhone</title>
</svelte:head>
<section id="main" class="mx-auto w-2/3">
	{#await data.devices}
		<p>loading skus...</p>
	{:then devices}
		<Grid>
			{#each devices as device}
				<Device {device} />
			{/each}
		</Grid>
	{/await}
</section>
