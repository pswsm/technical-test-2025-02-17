<script lang="ts">
	interface OptionsFilterProps {
		filterName: string;
		paramBind?: string;
		form: HTMLFormElement;
		options: string[];
	}

	let { filterName, paramBind, form, options }: OptionsFilterProps = $props();
</script>

<div>
	<select
		name={filterName}
		id={filterName}
		bind:value={paramBind}
		onchange={() => form?.requestSubmit()}
	>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
