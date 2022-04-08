<script>
    import Hamburger from "$lib/components/header/Hamburger.svelte";
import ConnectWallet from "$lib/components/ConnectWallet.svelte";
import UserAddress from "$lib/components/UserAddress.svelte";
import Divider from "$lib/components/common/Divider.svelte";
import Header from "$lib/components/header/Header.svelte";

import Drawer from 'svelte-drawer-component'
import { drawer } from "$lib/stores";

import * as fcl from "@samatech/onflow-fcl-esm";
import {
    user
} from "$lib/flow/stores";
import { goto } from "$app/navigation";
import { page } from "$app/stores";


const whitelistsPath = `/${$user?.addr}/whitelists`
let drawerVal;
let opened

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

let open = true

drawer.subscribe(val => {
	drawerVal = val
	open = drawerVal.opened
})
</script>


<Drawer  {open} size='100%' placement='right' on:clickAway={() =>  $drawer.opened = false}>

    <nav style="display: flex; width:100%; justify-content:end" class="container">
         
          <!-- <li><a href="/create" role="button" class="small-button" sveltekit:prefetch>+</a></li> -->
          
            <div class="flex-align"  style="height:4rem; width:3rem; margin-right:0rem">
            
              <Hamburger />
      
            </div>
      </nav>
                  <article class="flex-align" style="display: flex; flex-direction:column">

            {#if $user?.loggedIn}
            <button on:click={auth}   class="outline">
                <UserAddress address={$user?.addr || "0x0"} abbreviated={true} />
            </button>
            {:else}
            <ConnectWallet/>
            {/if}
        <Divider />
        <div class="mt-1" on:click="{initNavEngine}" >
            <!-- <a href="/{$user?.addr}/whitelists">Your Whitelists</a> -->
            <a>Your Whitelists</a>
            </div >
            </article>
   
  </Drawer> 