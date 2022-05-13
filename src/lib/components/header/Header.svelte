<script>
  // import { page } from '$app/stores';
  import * as fcl from "@samatech/onflow-fcl-esm";
  import Icon from "@iconify/svelte";
  import { user } from "$lib/flow/stores";
  import ConnectWallet from "$lib/components/ConnectWallet.svelte";
  import UserAddress from "../UserAddress.svelte";
  import Hamburger from './Hamburger.svelte'
	import Menu from './Menu.svelte'

  export let screenSize;

  function auth() {
    if ($user && $user.loggedIn) {
      fcl.unauthenticate();
    } else {
      fcl.authenticate();
    }
  }

</script>

<nav class="container">
  <ul>
    <li>
      <!-- when on mainnnet, replace this line with the one below-->
      <h3>LOGO</h3>
      <!-- <h1><a href="/"><img src="/logo-testnet.png" alt="Emerald City FLOAT" /></a></h1> -->
      <!-- <h1><a href="/"><img src="/floatlogowebpage.png" alt="Emerald City FLOAT" /></a></h1> -->
    </li>
  </ul>
  <ul>
    <!-- <li><a href="/create" role="button" class="small-button" sveltekit:prefetch>+</a></li> -->
    {#if screenSize !== "mobile"}
      <!-- <li><a href="/{$user.addr}/whitelists">Whitelists</a></li> -->
      <li><a href="/">Whitelists</a></li>
      <li>
        {#if $user?.loggedIn}
          <button on:click={auth} class="outline">
            <UserAddress address={$user?.addr || "0x0"} abbreviated={true} />
          </button>
        {:else}
          <ConnectWallet />
        {/if}
      </li>
    {:else}
      <div style="margin-right:1rem">
        <!-- <Icon
          icon="charm:menu-hamburger"
          color="var(--primary)"
          height="2rem"
        /> -->
        <Hamburger />

      </div>
    {/if}
  </ul>
</nav>

<style>
  li {
    margin-right: 1rem;
  }

  .outline {
    padding: 6px 14px;
  }
</style>
