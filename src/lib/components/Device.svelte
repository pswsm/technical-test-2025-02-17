<script lang="ts">
	import type { Device } from '$lib/device/domain/Device';
	import type { Specs } from '$lib/device/domain/Specs';
	import { DefaultTranslator } from '$lib/translation/Translator';
	import Price from './Price.svelte';
	import SpecList from './SpecList.svelte';

	interface Props {
		device: Device;
	}

	let { device }: Props = $props();
	let deviceSpecs: Specs = device.getSpecs();
</script>

<a
	class="row-span-6 m-auto grid grid-rows-subgrid gap-y-2 rounded-lg border-2 border-white bg-white px-6 py-2"
	href={`/device/${device.getSkuId().valueOf()}`}
>
	<div>
		<img
			class="m-auto"
			src={device.getImage().valueOf()}
			alt={`device ${device.getName().valueOf()}`}
		/>
	</div>
	<div>
		<hr />
	</div>
	<div>
		<p class="font-bold">{device.getName().valueOf()}</p>
		<SpecList deviceSpecs={device.getSpecs()} />
	</div>
	<div>
		<hr />
	</div>
	<div>
		<Price price={device.getPrice()} />
	</div>
</a>
