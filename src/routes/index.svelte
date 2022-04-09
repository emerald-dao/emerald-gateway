<script>
import WhitelistsTable from "$lib/components/common/table/WhitelistsTable.svelte";
import DrawerComponent from "$lib/components/drawer/DrawerComponent.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import { PAGE_TITLE_EXTENSION } from "$lib/constants";
import MediaQuery from "./MediaQuery.svelte";
import Projects from "./[address]/whitelists.svelte";
import { user } from "$lib/flow/stores";
import { goto } from "$app/navigation";
import { page } from "$app/stores";

import Loading from "$lib/components/common/Loading.svelte";

$: tab = $page.query.get('tab') || 'floats';
  let query = new URLSearchParams($page.query.toString());
</script>

<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
</svelte:head>

<!-- <div let:dataFromB>
    <div>i want {dataFromB}!</div>
</div> -->
<article class="app" >
   <DrawerComponent />
   <ul class="tabs">
    <li
      on:click={() => {
        query.set('tab', 'floats')
        goto(`?${query.toString()}`);
      }}
      class:animatedlink={tab !== "floats"}
      class:selected={tab === "floats"}>
      Your Whitelists
    </li>
    <li
      on:click={() => {
        query.set('tab', 'events')
        goto(`?${query.toString()}`);
      }}
      class:animatedlink={tab !== "events"}
      class:selected={tab === "events"}>
      Joined Whitelists
    </li>
    
    <!-- {#await addressObject then addressObject}
      {#if $user?.addr == addressObject.address}
        <li
        on:click={() => {
          query.set('tab', 'account')
          goto(`?${query.toString()}`);
        }}
          class:animatedlink={tab !== "account"}
          class:selected={tab === "account"}>
          Account
        </li>
      {/if}
    {/await} -->
  </ul>

  <!-- {#await addressObject}
    <Loading /> -->
  <!-- {:then addressObject} -->
    {#if tab === "floats"}
    <WhitelistsTable />
    {:else}
    <WhitelistsTable />
    {/if}
  <!-- {/await} -->
    <!-- <Projects  /> -->
  </article>


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

  .animatedlink {
  display: inline-block;
  position: relative;
}
.animatedlink:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.animatedlink:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.selected {
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
}
.tabs {
  display: flex;
  justify-content: space-around;
}
.tabs li {
  list-style-type: none;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  cursor:pointer;
}
.tabs li.selected {
  cursor:default;
}
  @media screen and (max-width: 767px) {
    .tabs {
      margin: 0px;
    }
    .tabs li {
      font-size: 15px;
    }
  }
</style>
   