<script>
    import { tab1data } from "../../stores";
    import TabHeader from "./TabHeader.svelte";
</script>

<div>
    <TabHeader
        title={"General Information"}
        subtitle={"Please fill in general information about your Whitelist."}
    />
    <div>
        <h3 class="mt-1">Name</h3>
        <input
            id="name"
            placeholder="My awesome project"
            bind:value={$tab1data.name}
        />

        <h3 class="mt-1">Description</h3>
        <textarea
            id="description"
            rows="4"
            placeholder="My awesome project it´s ..."
            bind:value={$tab1data.description}
        />
    </div>
</div>

<style>
    textarea {
        border-radius: 6px;
    }
</style>
