import Tooltip from './TooltipFromAction.svelte';

export function tooltip(element) {
	let div;
	let title;
	let tooltipComponent;
	function onclick(event) {
		// NOTE: remove the `title` attribute, to prevent showing the default browser tooltip
		// remember to set it back on `mouseleave`

		tooltipComponent = new Tooltip({
			props: {
				title: "Copied",
				x: event.pageX,
				y: event.pageY,
			},
			target: document.body,
		});

        setTimeout(() => {
            tooltipComponent.$destroy();

        }, 1000);
	}
	function mouseMove(event) {
		tooltipComponent.$set({
			x: event.pageX,
			y: event.pageY,
		})
	}
	function mouseLeave() {
		tooltipComponent.$destroy();
		// NOTE: restore the `title` attribute
	}
	
	element.addEventListener('click', onclick);
  element.addEventListener('mouseleave', mouseLeave);
	element.addEventListener('mousemove', mouseMove);
	
	return {
		destroy() {
			element.removeEventListener('click', onclick);
			element.removeEventListener('mouseleave', mouseLeave);
			element.removeEventListener('mousemove', mouseMove);
		}
	}
}