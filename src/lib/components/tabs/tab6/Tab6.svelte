<script>
    import Icon from "@iconify/svelte";
    import { twitterVerif, modal } from "$lib/stores.js";
    import TabHeader from "../TabHeader.svelte";
    import TwitterAccountsComponent from "./TwitterAccountsComponent.svelte";

    let twitterVal;
    export let mobile

    twitterVerif.subscribe((val) => (twitterVal = val));

    const handleEvent = (e) => {
        $twitterVerif.active = !twitterVal.active;
        $modal.content = "twitter";
    };

    function openModal() {
        $modal.opened = true;
    }
</script>

<div>
    <TabHeader
        title={"Twitter Verification"}
        subtitle={"Something about the twitter verification"}
    />
    <button
        class={twitterVal?.active
            ? "twitter-active flex-align"
            : "twitter-inactive outline mb-1 flex-align"}
        on:click={handleEvent}
    >
        Require
        <div class="logo">
            <Icon
                height="100%"
                icon="radix-icons:twitter-logo"
                color={twitterVal?.active ? "white" : "#1DA1F2"}
            />
        </div>
    </button>

    {#if twitterVal.active}
        <TwitterAccountsComponent mobile={mobile} accounts={twitterVal.accounts} />
    {/if}
</div>

<style>
    .twitter-active {
        color: white;
        border-color: #1da1f2;
        background: #1da1f2;
    }

    .twitter-inactive {
        color: #1da1f2;
        border-color: #1da1f2;
        background: transparent;
        cursor: pointer;
    }

    .logo {
        object-fit: cover;
        height: 2rem;
        margin-left: 0.5rem;
    }
</style>
