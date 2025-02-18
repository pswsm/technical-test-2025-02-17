<script lang="ts">
	import type { Device } from '$lib/device/domain/Device';
	import Price from './Price.svelte';

	interface Props {
		device: Device;
	}

	let { device }: Props = $props();
</script>

<div class="m-auto max-w-3/4" id={device.getName().valueOf()}>
	<img src={device.getImage().valueOf()} alt="device" />
	<p>{device.getDescription().valueOf()}</p>
	<Price price={device.getPrice()} />
</div>
