<script>
  import Checkbox from "../Checkbox.svelte";
  import CollectionComponent from "./CollectionComponent.svelte";
  export let collection;

  function selectCollection() {
    collection.selected = !collection.selected;
  }
</script>

<li class="collection-row">
  <CollectionComponent {...collection} />
  <Checkbox handleClick={selectCollection} selected={collection.selected} />
</li>

<style>
  .collection-row {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
  }

  .collection-row:hover {
    background-color: rgba(56, 232, 198, 0.1);
    cursor: pointer;
  }
</style>
