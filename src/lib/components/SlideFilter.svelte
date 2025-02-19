<script lang="ts">
	interface SliderFilterProps {
		labelText: string;
		paramBind: number;
		minSlider: number;
		maxSlider: number;
		form: HTMLFormElement;
		filterName: string;
	}

	let { labelText, paramBind, minSlider, maxSlider, form, filterName }: SliderFilterProps =
		$props();
</script>

<div>
	<label class="pr-2">
		{labelText}: {paramBind}
		<input
			type="range"
			min={minSlider}
			max={maxSlider}
			step="1"
			bind:value={paramBind}
			name={filterName}
			onchange={() => form?.requestSubmit()}
		/>
	</label>
</div>
