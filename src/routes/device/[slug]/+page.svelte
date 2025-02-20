<script lang="ts">
	import SpecList from '$lib/components/SpecList.svelte';
	import { Device } from '$lib/device/domain/Device';
	import toast, { Toaster } from 'svelte-french-toast';
	import type { PageProps } from './$types';
	import { GlobalCartState } from '../../cartState.svelte';
	import { UniqueId } from '$lib/shared/UniqueId';

	let { data }: PageProps = $props();
	let device: Device = Device.fromPrimitives(data.device);

	function addToCart(): void {
		GlobalCartState.push(UniqueId.new(), device);
		toast.success('Added device to cart!');
	}
</script>

<Toaster />
<section id="device">
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
			<div class="my-3">
				<SpecList deviceSpecs={device.getSpecs()} />
			</div>
			<button
				type="button"
				class="rounded-md border-2 border-white bg-white px-6 py-2 text-center transition hover:border-cyan-300"
				onclick={addToCart}>Add to cart</button
			>
		</div>
	</div>
</section>
