<script>
import {
    user
} from "$lib/flow/stores";
import ConnectWallet from "./ConnectWallet.svelte";
import * as fcl from "@samatech/onflow-fcl-esm";

import UserAddress from "./UserAddress.svelte";
import Divider from "./common/Divider.svelte";

export let open = false

function auth() {
    if ($user && $user.loggedIn) {
        fcl.unauthenticate();
    } else {
        fcl.authenticate();
    }
}
</script>

<!-- <aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open> -->
<!-- <main id="background"     style="--display: {open ? 'block' : 'none'}"
    >

</main> -->
<article class="closed" class:open>

    <div style="">
        {#if $user?.loggedIn}
        <button on:click={auth} class="outline">
            <UserAddress address={$user?.addr || "0x0"} abbreviated={true} />
        </button>
        {:else}
        <ConnectWallet />
        {/if}
    </div>
    <Divider />
    <div class="mt-1" >
        <a href="/{$user?.addr}/whitelists">Your Whitelists</a>
        </div >
        </article>

<style>
#background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0%;
    transition: right 0.3s ease-in-out;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
}

.closed {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    right: -100%;
    transition: right 0.3s ease-in-out;
}

.open {
    right: 0;
}
</style>
