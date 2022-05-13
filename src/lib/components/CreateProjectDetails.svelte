<script>
    import {
        tabs,
        tokens,
        collections,
        activeTabVal,
        projects,
        tab1data,
        emeraldIdVerif,
        discordVerif,
        twitterVerif,
    } from "$lib/stores";
    import { createWhitelist } from "$lib/flow/actions";
    import TabBar from "./tab_bar/TabBar.svelte";

    function createProject() {
        const newProject = {
            id: $projects.length,
            name: $tab1data.name,
            description: $tab1data.description,
            tokens: $tokens,
            collections: $collections,
            emeraldIdVerif: $emeraldIdVerif,
            discordVerif: $discordVerif,
            twitterVerif: $twitterVerif,
        };
        $projects = [...$projects, newProject];
        createWhitelist(newProject);
    }
</script>

<article class="app">
    <TabBar />

    {#each $tabs as item}
        {#if $activeTabVal == item.value}
            <svelte:component this={item.component} />
            <footer>
                <div class="mt-0 mb-0 pl-1">
                    <button
                        class="contrast small-button"
                        on:click={createProject}
                    >
                        {$activeTabVal === 6 ? 'CONFIRM' : 'CONTINUE'}
                    </button>
                </div>
            </footer>
        {/if}
    {/each}
</article>

<style>
</style>
