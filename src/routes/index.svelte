<script>
// import Icon from "@iconify/svelte"
// import CreateProject from '$lib/components/CreateProject.svelte';
import {
    PAGE_TITLE_EXTENSION
} from '$lib/constants';

import Dialog from "$lib/components/Dialog.svelte";
import Modal from "$lib/components/Modal.svelte";
import Projects from './projects.svelte';

</script>





<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
    </svelte:head>

    <Dialog />
    <Modal />
    <Projects />

    

    

