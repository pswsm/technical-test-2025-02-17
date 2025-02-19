<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navbar />
<div class="mx-auto w-2/3">
	{@render children()}
</div>
