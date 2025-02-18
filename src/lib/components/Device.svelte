<script lang="ts">
	import type { Device } from '$lib/device/domain/Device';

	export let device: Device;
</script>

<div id={device.getName().valueOf()}>
	<img src={device.getImage().valueOf()} alt="device" />
	<p>{device.getDescription().valueOf()}</p>
</div>
