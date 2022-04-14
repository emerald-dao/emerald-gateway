<script>
	import { fade } from "svelte/transition"
	export let title = '';
	let isHovered = false;
	let x;
	let y;


	
	function mouseOver(event) {
		x = event.pageX + 5;
		y = event.pageY + 5;
		
	}
	function onClick(event) {
		isHovered = true;

		setTimeout(() => {
			isHovered = false
		}, 1500);
	}
	function mouseMove(event) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div

on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	on:click={onClick}>
	<slot />
</div>

{#if isHovered}
	<div
	out:fade
in:fade
	style="top: {y}px; left: {x}px;" class="tooltip">{title}wdw</div>
{/if}

<style>
	.tooltip {
		border: 1px solid #ddd;
		/* box-shadow: 1px 1px 1px #ddd; */
		 background-color: #252e37;

		border-radius: 4px;
		padding: 4px;
		position: absolute;
	}
</style>