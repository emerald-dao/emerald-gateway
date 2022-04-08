<script>
import {
    getWhitelists
} from "$lib/flow/actions";
import {
    user
} from "$lib/flow/stores";
import CreateProject from "../CreateProject.svelte";

export let screenSize
let mobile = screenSize === "mobile"
async function getAllWhitelists() {
    let whitelists = await getWhitelists($user?.addr);
    return Object.values(whitelists);
}
let projects = getAllWhitelists();
</script>

<div class="projects-container" style="--width:{mobile ? "48%" : "32%"} ">
    <a>
        <CreateProject mobile={mobile} />
    </a>
    {#await projects then projects}
    {#each projects as project, i}
    <a href="{project.variables.whitelistId}">
        <div style="--height:{mobile ? "14rem" : "15rem"}" class="card project-card">
            <div>
                <h1>
                    {project.variables.name}
                </h1>
            </div>

            <div>Entries: {project.variables.totalCount}</div>
        </div>
    </a>
    {/each}
    {/await}
</div>

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
    width: var(--width)

}

p {
    font-size: medium;
}

.project-card {
    border-radius: 12px;
    background-color: #252e37;
    height: var(--height);
    width: 100%;
}

.project-card:hover {
    background-color: rgba(152, 189, 182, 0.1);
    cursor: pointer;
}
</style>
