<script>
  import { collections } from "$lib/stores.js";
  import CollectionComponent from "./CollectionComponent.svelte";
  export let collection;

  let hoveredId;

  const handlePointerEnter = (id) => (hoveredId = id);
  const handlePointerLeave = (id) => (hoveredId = null);

  const handleSelection = (id) => {
    $collections[id].selected = !$collections[id].selected;
  };
</script>

<li
  class={hoveredId === collection.id
    ? "collection-active"
    : "collection-inactive"}
  on:pointerenter={() => handlePointerEnter(collection.id)}
  on:pointerleave={() => handlePointerLeave(collection.id)}
>
  <CollectionComponent {...collection} />

  <div
    style="display:flex; justify-content:end; width:20%; padding-right: 1rem;"
  >
    <input
      type="checkbox"
      on:click={() => handleSelection(collection.id)}
      bind:checked={collection.selected}
    />
  </div>
</li>

<style>
  .collection-inactive {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
  }

  .collection-active {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(56, 232, 198, 0.1);
    cursor: pointer;
    padding-left: 3%;
  }
</style>
