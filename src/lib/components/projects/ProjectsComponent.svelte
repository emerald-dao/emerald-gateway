<script>
import { user } from "$lib/flow/stores";
import CreateProject from "../CreateProject.svelte";

export let joined;
export let whitelists
console.log("component whitelist", whitelists)
export let screenSize
let mobile = screenSize === "mobile"
</script>

<div class="projects-container" style="--width:{mobile ? "48%" : "32%"} ">
    {#if !joined}
        <a>
            <CreateProject mobile={mobile} />
        </a>
    {/if}
    <!-- {#await whitelists then whitelists} -->
    {#each whitelists as whitelist, i}
    <a href={$user?.addr + "/" + whitelist.variables.whitelistId}>
        <div style="--height:{mobile ? "14rem" : "15rem"}; padding-left:0; padding-right:0" class="card project-card">
            <div class="image-title-container">
                <h1>
                    {whitelist.variables.name}
                </h1>
            </div>
            <div class="description-container">
                    {whitelist.variables.description}
            </div>
            <footer>
                <span>
                    ENTRIES: {whitelist.variables.totalCount}
                </span>
                <span>
                    09/04/22
                </span>
            </footer>
        </div>
    </a>
    {/each}
    <!-- {/await} -->
</div>

<style>
.image-title-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 60%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
    background-image:    linear-gradient(to bottom, rgba(245, 246, 252, 0.2), rgba(20, 18, 20, 0.6), rgba(20, 18, 20, 0.9)),
    url("https://images.squarespace-cdn.com/content/v1/61646635d8111916a92d2d0e/e7e84db0-2082-4269-bec7-aa07bd337714/ballerz.gif");
    background-size: cover;
    padding-left: 0.5rem;
}

.description-container {
    height: 30%;
    font-size: small;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;

    color: whitesmoke;
}

footer {
    height: 10%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 0.6rem;
    font-weight: 900;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin: 0

}

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
    text-align: left;
    padding-bottom: 0;
    padding-top: 0;

}

.project-card:hover {
    background-color: rgba(152, 189, 182, 0.1);
    cursor: pointer;
}
</style>
