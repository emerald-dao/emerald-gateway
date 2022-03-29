<script>
// import Icon from "@iconify/svelte"
// import CreateProject from '$lib/components/CreateProject.svelte';
import {
    PAGE_TITLE_EXTENSION
} from '$lib/constants';
// import {
//     handleTokenSelection,
//     handleCollectionSelection,
// } from "$lib/components/tabs/utils"

// import {
//     tabs,
//     tokens,
//     collections,
//     activeTabVal,
// } from '$lib/stores';
import Dialog from "$lib/components/Dialog.svelte";
import Modal from "$lib/components/Modal.svelte";
import CreateProjectDetails from '$lib/components/CreateProjectDetails.svelte';
import MediaQuery from './MediaQuery.svelte';
// import EmeraldIdIcon from "$lib/components/tabs/EmeraldIdIcon.svelte";

// let tabsValue
// let activeTabValue;
// let isHovered = {
//     right: false,
//     left: false
// }

// // logic
// tabs.subscribe(value => {
//     tabsValue = value;
// });

// activeTabVal.subscribe(val =>  activeTabValue = val)

// const handleEvent = msg => {
//     switch (activeTabValue) {
//         case 0:
//             $tabs[activeTabValue].done = true
//             handleAction("increment")
//             break;
//         case 1:
//             $tabs[activeTabValue].done = true
//             handleAction("increment")
//             break;
//         case 2:
//             $tabs[activeTabValue].done = true
//             handleAction("increment")
//             break;
//         case 3:
//             $tabs[activeTabValue].done = true
//             handleAction("increment")
//             break;

//         default:
//             break;
//     }
// }

// const autoScroll = (target) => {
//     console.log("scrolling")
//     const el = document.querySelector(`#tab${activeTabValue}`);
//     if (!el) return;
//     el.scrollIntoView({
//       behavior: "smooth"
//     });
// }

// const handleAction = (action) => {
//     if (activeTabValue === 0 && action === "decrement" || activeTabValue === 4 && action === "increment") {
//         return
//     } else {
//         action === "increment" ? activeTabValue++ : activeTabValue--
//         autoScroll()

//     }
// }
// const handleClick = tabValue => () => ($activeTabVal = tabValue);
</script>





<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
    </svelte:head>

    <Dialog />
    <Modal />

    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <CreateProjectDetails screenSize="desktop" />
        {/if}
    </MediaQuery>
    <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
        {#if matches}
        <CreateProjectDetails screenSize="tablet" />
        {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
        <CreateProjectDetails screenSize="mobile" />
        {/if}
    </MediaQuery>
    

    

