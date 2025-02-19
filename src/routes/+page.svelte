<script lang="ts">
	import Device from '$lib/components/Device.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import type { PageProps } from './$types';

	let form: HTMLFormElement | undefined = $state();
	let { data }: PageProps = $props();
	let fromSlider = $state(data.minPrice);
	let toSlider = $state(data.maxPrice);
	let selectedGrade = $state(data.params.get('grade') || 'none');
</script>

<svelte:head>
	<title>AlexPhone</title>
</svelte:head>
<section id="main" class="mx-auto w-2/3">
	{#await data.visibleDevices}
		<p>loading skus...</p>
	{:then devices}
		<form bind:this={form}>
			<div class="flex">
				<div>
					<label class="pr-2"
						>From: {fromSlider}
						<input
							type="range"
							min={data.minPrice}
							max={data.maxPrice}
							step="1"
							bind:value={fromSlider}
							name="from"
							onchange={() => form?.requestSubmit()}
						/>
					</label>
				</div>
				<div>
					<label class="pr-2"
						>To: {toSlider}
						<input
							type="range"
							min={data.minPrice}
							max={data.maxPrice}
							step="1"
							bind:value={toSlider}
							name="to"
							onchange={() => form?.requestSubmit()}
						/></label
					>
				</div>
				<div>
					<select
						name="grade"
						id="grade"
						bind:value={selectedGrade}
						onchange={() => form?.requestSubmit()}
					>
						<option value="none">None</option>
						{#each data.grades as grade}
							<option value={grade.valueOf()}>{grade.valueOf()}</option>
						{/each}
					</select>
				</div>
			</div>
		</form>
		<Grid>
			{#each devices as device}
				<Device {device} />
			{/each}
		</Grid>
	{/await}
</section>
