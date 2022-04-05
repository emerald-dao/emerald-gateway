<script>
import Sidebar from "$lib/components/Sidebar.svelte";

    import { PAGE_TITLE_EXTENSION } from "$lib/constants";
import MediaQuery from "./MediaQuery.svelte";

    import Projects from "./[address]/whitelists.svelte";
</script>

<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
</svelte:head>

<!-- <div let:dataFromB>
    <div>i want {dataFromB}!</div>
</div> -->

    <Projects  />
   