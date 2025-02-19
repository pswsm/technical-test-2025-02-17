<script lang="ts">
	import { StringValueObject } from '$lib/shared/StringValueObject';
	import { DefaultTranslator } from '$lib/translation/Translator';

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
		class="capitalize"
	>
		{#each options as option}
			<option value={option}>{DefaultTranslator.translate(new StringValueObject(option))}</option>
		{/each}
	</select>
</div>
