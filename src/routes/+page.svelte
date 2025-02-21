<script lang="ts">
	import Device from '$lib/components/Device.svelte';
	import DoubleSyncSliders from '$lib/components/DoubleSyncSliders.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import OptionsFilter from '$lib/components/OptionsFilter.svelte';
	import type { PageProps } from './$types';

	let form: HTMLFormElement | undefined = $state();
	let { data }: PageProps = $props();
	let fromSlider: number = $state(Number(data.params.get('from')) || data.minPrice);
	let toSlider: number = $state(Number(data.params.get('to')) || data.maxPrice);
	let selectedGrade = $state(data.params.get('grade') || 'none');
</script>

<svelte:head>
	<title>AlexPhone</title>
</svelte:head>
<section id="main">
	{#await data.devices}
		<h1>Loading</h1>
	{:then devices}
		<form bind:this={form} class="flex w-full flex-wrap justify-around">
			<DoubleSyncSliders
				leftSliderValue={fromSlider}
				rightSliderValue={toSlider}
				minValue={data.minPrice}
				maxValue={data.maxPrice}
				{form}
			/>
			<OptionsFilter
				filterName={'grade'}
				paramBind={selectedGrade}
				{form}
				options={['none', ...data.grades.map((g) => g.valueOf())]}
			/>
		</form>
		<Grid>
			{#each devices as device}
				<Device {device} />
			{/each}
		</Grid>
	{/await}
</section>
