<script lang="ts">
	import SlideFilter from './SlideFilter.svelte';

	let { leftSliderValue, rightSliderValue, minValue, maxValue, form } = $props();
</script>

<SlideFilter
	labelText={'From'}
	minSlider={minValue}
	maxSlider={rightSliderValue}
	paramBind={leftSliderValue}
	filterName={'from'}
	{form}
/>
<SlideFilter
	labelText={'To'}
	minSlider={leftSliderValue}
	maxSlider={maxValue}
	paramBind={rightSliderValue}
	filterName={'to'}
	{form}
/>
