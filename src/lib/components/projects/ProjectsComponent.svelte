<script>
    import { getWhitelists } from "$lib/flow/actions";
    import { user } from "$lib/flow/stores";

    async function getAllWhitelists() {
        let whitelists = await getWhitelists($user?.addr);
        console.log(Object.values(whitelists))
        return Object.values(whitelists);
    }
    let projects = getAllWhitelists();
</script>

{#await projects then projects}
    <div class="projects-container">
        {#each projects as project}
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
        flex-wrap: true;
        max-width: 100%;
    }

    a {
        text-decoration: none;
    }

    p {
        font-size: medium;
    }

    .project-card {
        border-radius: 12px;
        background-color: #252e37;
        height: 16rem;
    }

    .project-card:hover {
        background-color: rgba(56, 232, 198, 0.03);
        cursor: pointer;
    }
</style>
