<script>
import YourWhitelists from "$lib/components/common/table/YourWhitelists.svelte";
import DrawerComponent from "$lib/components/drawer/DrawerComponent.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import { PAGE_TITLE_EXTENSION } from "$lib/constants";
import MediaQuery from "./MediaQuery.svelte";
import Projects from "./[address]/whitelists.svelte";
import { user } from "$lib/flow/stores";
import {
    getWhitelists
} from "$lib/flow/actions";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import Loading from "$lib/components/common/Loading.svelte";
import CreateProject from "$lib/components/CreateProject.svelte";
import JoinedWhitelists from "$lib/components/common/table/JoinedWhitelists.svelte";
import { joinedWhitelists } from "$lib/stores";

let borrowed = true

async function getAllWhitelists() {
try {
  let whitelists = await getWhitelists($user?.addr);
console.log("whitelists1", whitelists)
return Object.values(whitelists);
} catch (error) {
  borrowed = false
  console.log("err", error)
}


} 

let whitelists = getAllWhitelists();

// let whitelists = [{name:"n1"}]

$: tab = $page.query.get('tab') || 'created';

  let query = new URLSearchParams($page.query.toString());
</script>

<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
</svelte:head>


<article class="app" >
   <DrawerComponent />
   <ul class="tabs">
    <li
      on:click={() => {
        query.set('tab', 'created')
        goto(`?${query.toString()}`);
      }}
      class:animatedlink={tab !== "created"}
      class:selected={tab === "created"}>
      Your Whitelists
    </li>
    <li
      on:click={() => {
        query.set('tab', 'joined')
        goto(`?${query.toString()}`);
      }}
      class:animatedlink={tab !== "joined"}
      class:selected={tab === "joined"}>
      Joined Whitelists
    </li>
  </ul>
  <!-- <CreateProject mobile={false} /> -->

  {#if borrowed}
  {#await whitelists}
  <Loading />
  {:then whitelists}
  {#if whitelists === null} 
  nop
  {:else}
    {#if tab === "created"}
  <YourWhitelists whitelists={whitelists} />
  {:else}
  <JoinedWhitelists  whitelists={$joinedWhitelists} />
    {/if}
  
  {/if}
  {/await}
     <!-- not borrowed -->
  {:else}
    <CreateProject mobile={false} />

  {/if}


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
   