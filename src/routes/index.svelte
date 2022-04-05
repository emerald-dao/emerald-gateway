<script>
import Sidebar from "$lib/components/Sidebar.svelte";

    import { PAGE_TITLE_EXTENSION } from "$lib/constants";

    import Projects from "./[address]/whitelists.svelte";
</script>

<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
</svelte:head>

<Projects />