<script context="module">
  import Pagination, {
    setLabels as _setPaginationLabels
  } from "./Pagination.svelte";
  import Row from "./Row.svelte";
  import Search, { setLabels as _setSearchLabels } from "./Search.svelte";
  import Sort, { setLabels as _setSortLabels } from "./Sort.svelte";
  export { Pagination, Row, Search, Sort };

  let globalLabels;

  export function setTableLabels(labels) {
    globalLabels = labels;
  }

  export const setPaginationLabels = _setPaginationLabels;
  export const setSearchLabels = _setSearchLabels;
  export const setSortLabels = _setSortLabels;
</script>

<script>
  import { createEventDispatcher, setContext } from "svelte";
import SearchComponent from "$lib/components/tabs/SearchComponent.svelte";
  const dispatch = createEventDispatcher();

  export let loading = false;
  export let page = 0;
  export let pageIndex = 0;
  export let pageSize = 2;
  export let responsive = true;
  export let whitelists;
  export let serverSide = false;
  export let labels = {
    empty: "No records available",
    loading: "Loading data",
    ...globalLabels
  };

  let filteredCollections = [];

// For Search Input
let searchTerm = "";



  let buttons = [-2, -1, 0, 1, 2];
  let pageCount = 0;

  $: filteredWhitelists = whitelists;
  $: visibleWhitelists = filteredWhitelists.slice(pageIndex, pageIndex + pageSize);

  setContext("state", {
    getState: () => ({
      page,
      pageIndex,
      pageSize,
      whitelists,
      filteredWhitelists
    }),
    setPage: (_page, _pageIndex) => {
      page = _page;
      pageIndex = _pageIndex;
    },
    setWhitelists: _whitelists => (filteredWhitelists = _whitelists)
  });

  const searchCollections = () => {
    return filteredWhitelists = whitelists.filter(whitelist => {
        let whitelistLabel = whitelist.variables.name.toLowerCase();
        return whitelistLabel.includes(searchTerm.toLowerCase())
    });
  }

  function onPageChange(event) {
    dispatch("pageChange", event.detail);
  }

  function onSearch(event) {
    dispatch("search", event.detail);
  }
</script>


<style>
  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table :global(th), .table :global(td) {
    position: relative;
  }

</style>

<slot name="top">
  <div class="slot-top">
    <!-- <svelte:component this={Search} on:search={onSearch} /> -->
    <SearchComponent bind:searchTerm on:input={searchCollections} />

  </div>
</slot>

<table class={'table ' + $$props.class} class:responsive>
  <slot name="head" />
  {#if loading}
    <tbody>
      <tr>
        <td class="center" colspan="100%">
          <span>
            {@html labels.loading}
          </span>
        </td>
      </tr>
    </tbody>
  {:else if visibleWhitelists.length === 0}
    <tbody>
      <tr>
        <td class="center" colspan="100%">
          <span>
            empty
            {@html labels.empty}
          </span>
        </td>
      </tr>
    </tbody>
  {:else}
    <!-- // dynamic search or no search -->
    
    <slot whitelists={!searchTerm ? visibleWhitelists : filteredWhitelists} />
    <!-- <slot whitelists={ visibleWhitelists} /> -->
  {/if}
  <slot name="foot" />
</table>

<slot name="bottom">
  <div class="slot-bottom">
    <svelte:component
      this={Pagination}
      {page}
      {pageSize}
      {serverSide}
      count={filteredWhitelists.length - 1}
      on:pageChange={onPageChange} />
  </div>
</slot>
