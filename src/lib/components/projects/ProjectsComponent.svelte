<script>
    import { getWhitelists } from "$lib/flow/actions";
    import { user } from "$lib/flow/stores";
    import CreateProject from "../CreateProject.svelte";

    async function getAllWhitelists() {
        let whitelists = await getWhitelists($user?.addr);
        console.log(Object.values(whitelists))
        return Object.values(whitelists);
    }
    let projects = getAllWhitelists();
</script>

{#await projects then projects}
    <div class="projects-container">
        {#each projects as project, i}
         {#if i === 0}
         <a>
            <CreateProject />
         </a>
         {/if}
            <a href="{project.variables.whitelistId}">
                <div class="card project-card">
                    <div>
                        <h1>
                            {project.variables.name}
                        </h1>
                    </div>

                    <div>Entries: {project.variables.totalCount}</div>
                </div>
            </a>
        {/each}
    </div>
{/await}

<style>
    .projects-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 100%;
        width: 100%;
    }

    a {
        text-decoration: none;
        margin: 0;
        padding: 0;
        width: 32%;

    }

    p {
        font-size: medium;
    }

    .project-card {
        border-radius: 12px;
        background-color: #252e37;
        height: 15rem;
        width: 100%;
    }

    .project-card:hover {
        background-color: rgba(152, 189, 182, 0.1);
        cursor: pointer;
    }
</style>
