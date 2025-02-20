<script lang="ts">
	import Price from '$lib/components/Price.svelte';
	import { UniqueId } from '$lib/shared/UniqueId';
	import { GlobalCartState } from '../cartState.svelte';
	import type { PageProps } from '../device/[slug]/$types';

	let { form }: PageProps = $props();
	if (form?.status) {
		GlobalCartState.flush();
	}
</script>

{#if form?.status}
	<p class="text-l text-center">Ordered correctly! - ID: {UniqueId.new().valueOf()}</p>
{/if}

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
	<form method="POST" action="?/order">
		<div class="flex">
			<input type="text" class="hidden" name="cartState" value={GlobalCartState.toFormableData()} />
			<button
				class="mx-auto rounded-md border-2 border-zinc-400 px-6 py-3 transition hover:enabled:bg-zinc-400 disabled:text-zinc-400"
				disabled={GlobalCartState.state.length > 0 ? false : true}>Order!</button
			>
		</div>
	</form>
</ul>
