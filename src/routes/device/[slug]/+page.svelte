<script lang="ts">
	import SpecList from '$lib/components/SpecList.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section id="device" class="mx-auto w-2/3">
	{#await data.device}
		<p>loading...</p>
	{:then device}
		<div class="grid grid-cols-2 gap-x-4">
			<div class="rounded-md border-2 border-white bg-white p-3">
				<img src={device.getImage().valueOf()} alt="alt" />
			</div>
			<div>
				<h1 class="text-xl font-semibold">
					{device.getName().valueOf()} &#9679 {device.getPrice().valueOf()}€
				</h1>
				<p>{device.getDescription().valueOf()}</p>
				<hr />
				<div>
					<SpecList deviceSpecs={device.getSpecs()} />
				</div>
			</div>
		</div>
	{/await}
</section>
