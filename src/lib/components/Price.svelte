<script lang="ts">
	import type { Price } from '$lib/device/domain/value-objects/Price';

	interface Props {
		price: Price;
		currency?: string; // TODO: add currency enum
	}
	let { price, currency = '€' }: Props = $props();
</script>

<p>Price: {price.valueOf()}{currency}</p>
