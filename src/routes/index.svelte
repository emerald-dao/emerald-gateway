<script>
import DrawerComponent from "$lib/components/drawer/DrawerComponent.svelte";

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
<div class="app" >
   <DrawerComponent />
    <Projects  />

</div>

<style>
    .app :global(.drawer .panel) {
        background: #11191F;
    }
    li {
    margin-right: 1rem;
  }

  .outline {
    padding: 6px 14px;
  }
</style>
   