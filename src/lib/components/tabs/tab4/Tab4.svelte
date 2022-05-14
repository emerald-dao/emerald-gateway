<script>
    import { emeraldIdVerif } from "$lib/stores.js";
    import TabHeader from "../TabHeader.svelte";
</script>

<div>
    <TabHeader title={"Emerald ID"} subtitle={"Whether or not the user must own an EmeraldID."} />
    <button
        class={$emeraldIdVerif.active ? "flex-align" : "outline mb-1 flex-align"}
        on:click={() => $emeraldIdVerif.active = !$emeraldIdVerif.active}
    >
        Require
        <img
            class="logo"
            src="https://res.cloudinary.com/do4mactw0/image/upload/v1648233132/Emerald_Bot_Logo_olre0f.svg"
            alt="emeraldid"
        />
    </button>
</div>

<style>
    .logo {
        object-fit: cover;
        height: 2rem;
        margin-left: 0.5rem;
    }
</style>
