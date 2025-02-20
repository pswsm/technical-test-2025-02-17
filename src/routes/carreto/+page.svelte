<script lang="ts">
	import Price from '$lib/components/Price.svelte';
	import { GlobalCartState } from '../cartState.svelte';
</script>

<section id="title" class="mb-4">
	<h1 class="text-xl font-semibold">Shopping Cart</h1>
	<hr />
</section>
<ul class="list-disc">
	{#each GlobalCartState.state as cartItem}
		<li class="flex w-full flex-row content-center items-center justify-between">
			<div>
				<p>{cartItem.getDeviceName().valueOf()}</p>
				<p>
					{cartItem.getDeviceDescription().valueOf()} - <Price price={cartItem.getDevicePrice()} />
				</p>
			</div>
			<div>
				<button
					class="rounded-md p-3 transition hover:bg-zinc-400"
					type="button"
					aria-label="remove"
					onclick={() => GlobalCartState.remove(cartItem)}><i class="fa-solid fa-trash"></i></button
				>
			</div>
		</li>
		<hr class="my-2" />
	{/each}
</ul>
