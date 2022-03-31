<script>
import {
    fly
} from 'svelte/transition';
import {
    getContext
} from 'svelte';
import {
    createEventDispatcher
} from 'svelte';
// import Dialog from '../Dialog.svelte';
import {
    tabs,
    collections,
    selectedCollection,
    dialog
} from '../../stores';
import {
    handleEvent
} from './utils';

const dispatch = createEventDispatcher();

import Modal from '../Modal.svelte';
import HorizontalSpace from "../HorizontalSpace.svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"
import TabHeader from "./TabHeader.svelte"
import CollectionComponent from "./CollectionComponent.svelte"

import Icon from "@iconify/svelte";
import SearchComponent from './SearchComponent.svelte';

let hoveredId;
let selectedId;
let isOpenModal = false;
let collectionsValue;
let searchVal;

collections.subscribe(val => collectionsValue = val)

function parentFunction() {
    console.log("called")
}

function openDialog() {
    $dialog.opened = true
}

const handleChange = (id) => {
    console.log("id", id)
    selectedId = id

    if ($collections[id].selected) {
        $collections[id].selected = false

    } else {
        $collections[id].selected = true
    }

}

const handlePointerEnter = id => hoveredId = id
const handlePointerLeave = id => hoveredId = null

// const handleEdit = (id) => {
//     console.log("id cole", id)
//     $selectedCollection = id
//     openDialog()
// }

const handleSelection = (id) => {
    $collections[id].selected = !$collections[id].selected


    // update token 
    // $selectedCollection = id
    // $collections[id].selected = true
    // console.log("collections val", collectionsValue)

    // // check store state
    // const collectionAmount = $collections[id].amount

    // if (collectionAmount === 0) {
    //     openDialog()
    // } else {
    //     //reset token amount and selection state
    //     $collections[id].amount = 0
    //     $collections[id].selected = false
    // }

}

// Query results
let filteredCollections = [];

// For Search Input
let searchTerm = "";
// // resets language menu if search input is used
// $: if (searchTerm) selectedLang = ""; 

const searchCollections = () => {
    return filteredCollections = collectionsValue.filter(collection => {
        let collectionLabel = collection.label.toLowerCase();
        return collectionLabel.includes(searchTerm.toLowerCase())
    });
}
</script>

<!-- <Dialog /> -->
<main class="container">
    <TabHeader title={"Collections"} subtitle={"Something about the collections"} />
     <div class="collections-container mt-2">
        <SearchComponent bind:searchTerm on:input={searchCollections} />
        {#if !searchTerm && filteredCollections.length === 0}
        <!-- <div>no results then</div> -->
          <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">
            {#each collectionsValue as collection, i}
            <li
                class={hoveredId === collection.id ? "collection-active" : "collection-inactive"}
                on:pointerenter={() => handlePointerEnter(collection.id)}
                on:pointerleave={() => handlePointerLeave(collection.id)}
                >
                <CollectionComponent {...collection}  selectedCollection={selectedCollection}  />

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
            {/each}
        </ul>
	{:else if filteredCollections.length > 0}

    <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">

{#each filteredCollections as collection}

<li
class={hoveredId === collection.id ? "collection-active" : "collection-inactive"}
on:pointerenter={() => handlePointerEnter(collection.id)}
on:pointerleave={() => handlePointerLeave(collection.id)}
>
<CollectionComponent {...collection} dialog={$dialog} selectedCollection={$selectedCollection}  />

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
{/each}	
</ul>

        {/if}

    </div>
</main>

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

main {
    margin: 0;
    padding: 0;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    margin: 0;
    padding: 0;
}

.collections-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 26rem;
    border: 2px solid var(--form-element-border-color);
    width: 100%;
    border-radius: 9px;
    background: var(--background-color);
}

.container {
    height: 100%;
    width: 100%;
}
</style>

  <!-- <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">
            {#each collectionsValue as collection, i}
            <li
                class={hoveredId === collection.id ? "collection-active" : "collection-inactive"}
                on:pointerenter={() => handlePointerEnter(collection.id)}
                on:pointerleave={() => handlePointerLeave(collection.id)}
                >
                <CollectionComponent {...collection} dialog={$dialog} selectedCollection={$selectedCollection}  />

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
            {/each}
        </ul> -->
