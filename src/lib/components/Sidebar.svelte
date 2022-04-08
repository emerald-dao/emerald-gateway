<script>
import {
    user
} from "$lib/flow/stores";
import { goto } from "$app/navigation";
import { page } from "$app/stores";

import ConnectWallet from "./ConnectWallet.svelte";
import * as fcl from "@samatech/onflow-fcl-esm";

import UserAddress from "./UserAddress.svelte";
import Divider from "./common/Divider.svelte";
import { drawer } from "$lib/stores";

// export let open = false
let drawerVal;
let opened;
const whitelistsPath = `/${$user?.addr}/whitelists`

drawer.subscribe(val => {
	drawerVal = val
	opened = drawerVal.opened
})

function auth() {
    if ($user && $user.loggedIn) {
        fcl.unauthenticate();
    } else {
        fcl.authenticate();
    }
}

function handleNav() {
    goto(whitelistsPath);
    $drawer.opened = false
}

function initNavEngine() {
    // if its in whitelists only close the drawer, else navigate
    $page.path === whitelistsPath ? $drawer.opened = false : handleNav();
    }
</script>

<div class="container">

</div>

<article  class="closed" class:opened>

        {#if $user?.loggedIn}
        <button on:click={auth}   class="outline">
            <UserAddress address={$user?.addr || "0x0"} abbreviated={true} />
        </button>
        {:else}
        <ConnectWallet />
        {/if}
    <Divider />
    <div class="mt-1" on:click="{initNavEngine}" >
        <!-- <a href="/{$user?.addr}/whitelists">Your Whitelists</a> -->
        <a>Your Whitelists</a>
        </div >
        </article>

<style>
article{
   
}

.closed {
    display: flex;
    visibility: hidden;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    align-items: center;
    width: 0%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    right:0
}

.opened {
    visibility:visible;
    /* right: 0; */
    width: 100%;

}
</style>
