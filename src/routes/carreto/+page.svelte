<script lang="ts">
	import Device from '$lib/components/Device.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import { cartState } from '../cartState.svelte';
</script>

<h1>Carreto</h1>
<Grid>
	{#each cartState as cartItem}
		<Device device={cartItem} />
	{/each}
</Grid>
