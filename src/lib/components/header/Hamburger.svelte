<script>
import { drawer } from "$lib/stores";

let drawerVal;
let opened;

drawer.subscribe(val => {
	drawerVal = val
	opened = drawerVal.opened
})

</script>

<div style="color: var(--primary); z-index:3; position:relative"  class:opened on:click={() => $drawer.opened = !$drawer.opened}>
	<svg width=30 height=30>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=24 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
	</svg>
</div>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 20;
	}
	
	.opened svg {
		transform: scale(0.7)
	}
	
	.opened #top {
		transform: translate(6px, 0px) rotate(45deg)
	}
	
	.opened #middle {
		opacity: 0;
	}
	
  .opened #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
</style>