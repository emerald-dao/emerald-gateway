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
console.log("page", $page.path)

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

<article class="closed" class:opened>

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
    <div class="mt-1" on:click="{initNavEngine}" >
        <!-- <a href="/{$user?.addr}/whitelists">Your Whitelists</a> -->
        <a>Your Whitelists</a>
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

.opened {
    right: 0;
}
</style>
