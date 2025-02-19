<script lang="ts">
	import type { Specs } from '$lib/device/domain/Specs';
	import { DefaultTranslator } from '$lib/translation/Translator';

	let { deviceSpecs }: { deviceSpecs: Specs } = $props();
</script>

<ul class="list-inside list-disc">
	Specs:
	<li class="capitalize">Color: {deviceSpecs.color.valueOf()}</li>
	<li class="capitalize">Condition: {DefaultTranslator.translate(deviceSpecs.grade)}</li>
	<li class="capitalize">Storage: {deviceSpecs.storage.valueOf()}GB</li>
</ul>
