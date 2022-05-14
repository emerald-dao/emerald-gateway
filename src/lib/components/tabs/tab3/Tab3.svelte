<script>
    import { collections } from "$lib/stores.js";

    import TabHeader from "../TabHeader.svelte";

    import SearchComponent from "../SearchComponent.svelte";
    import CollectionRow from "./CollectionRow.svelte";

    let filteredCollections = $collections;
    let searchTerm = "";

    const searchCollections = () => {
        return (filteredCollections = $collections.filter((collection) => {
            let collectionLabel = collection.label.toLowerCase();
            return collectionLabel.includes(searchTerm.toLowerCase());
        }));
    };
</script>

<main class="container">
    <TabHeader
        title={"Collections"}
        subtitle={"Select certain NFTs the user must own."}
    />
    <div class="collections-container mt-2">
        <SearchComponent bind:searchTerm on:input={searchCollections} />

        <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">
            {#each filteredCollections as collection}
                <CollectionRow {collection} />
            {/each}
        </ul>
    </div>
</main>

<style>

    main {
        margin: 0;
        padding: 0;
    }

    ul {
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
