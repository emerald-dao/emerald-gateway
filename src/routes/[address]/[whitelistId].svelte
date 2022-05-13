<script>
import {
    page
} from "$app/stores";
import { spring } from "svelte/motion";
  import { quartInOut } from "svelte/easing";
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
import Dialog from "$lib/components/Dialog.svelte";
import {
collections,
    dialog,
    emeraldIdVerif,
    joinedWhitelists,
    transactionInProgress,
    transactionStatus,

} from "$lib/stores";

import VerificationComponent from "$lib/components/projects/VerificationComponent.svelte";
import CollectionComponent from "$lib/components/tabs/tab3/CollectionComponent.svelte";
import VerticalSpace from "$lib/components/VerticalSpace.svelte";
import {
    readWhitelist
} from "$lib/flow/utils";
import TokenComponent from "$lib/components/common/TokenComponent.svelte"
import { goto } from "$app/navigation";
import { user } from "$lib/flow/stores";

const tokens = [
    {
        id: 0,
    label: "FLOW",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145425/FlowLogo_myf3sv.svg",
    selected: false,
    amount:0,
    path: {
      domain: "public",
      identifier: "flowTokenBalance"
    },
    identifier: "A.1654653399040a61.FlowToken.Vault"
  },
  {
    id: 1,
    label: "FUSD",
    imgUrl:
      "https://res.cloudinary.com/do4mactw0/image/upload/v1647145831/FusdIcon_esmisr.svg",
    selected: false,
    amount:0,
    path: {
      domain: "public",
      identifier: "fusdBalance"
    },
    identifier: "A.3c5959b568896393.FUSD.Vault"
  },
    
]


let whitelist = readWhitelist(
    $page.params.address,
    $page.params.whitelistId,
);

const  whitelistID = $page.params.whitelistId
const joinedWls = $joinedWhitelists.filter(wl => wl.variables.whitelistId.toString() === whitelistID) 
const joined = joinedWls.length > 0
let token1valid = null
let isVerifing = false

const width = tweened(50, {
    duration: 600,
    easing: cubicOut
  })

  const handleAnimation = () => {
    $width = 100
    token1valid = true
  }



function addJoinedWhitelist(whitelist) {
        const wl = {
            variables: {
                active: whitelist?.active,
                dateCreated: whitelist?.dateCreated,
                description: whitelist?.description,
                extraMetadata: whitelist?.extraMetadata,
                host: whitelist?.host,
                image: whitelist?.image,
                modules: whitelist?.modules,
                name: whitelist?.name,
                registered: whitelist?.registered,
                totalCount: whitelist?.totalCount,
                url: whitelist?.url,
                uuid: whitelist?.uuid,
                whitelistId: whitelist?.whitelistId,
            },
            modules: whitelist.modules,
        }
        console.log("wl", wl)
        $joinedWhitelists = [...$joinedWhitelists, wl];
        // createJoinedWhitelist(newProject);
}

function handleJoin(whitelist) {
    isVerifing = true
    $transactionInProgress = true
    $transactionStatus = 1
    setTimeout(() => {
        handleAnimation()
        $transactionStatus = 4
        addJoinedWhitelist(whitelist)
        $transactionInProgress = false
    }, 2000);
    setTimeout(() => {

        goto("/?tab=joined")
        
    },3000)
}
</script>

<svelte:head>
    <title>Whitelist details</title>
    </svelte:head>
    <Dialog />
    {#await whitelist then whitelist}
    <article>
        <blockquote>
            <h1>
                {whitelist.name}
            </h1>
            <p>
                {whitelist.description}
            </p>
        </blockquote>
        <h1>Tokens</h1>
        <p>Something about the tokens</p>
            <!-- {#each whitelist.modules.token as tokenModule, i} -->
            {#each tokens as tokenModule, i}
            <div  class="mt-1">
                <TokenComponent joined={joined}  width={width} token1valid={token1valid} tokenModule={tokenModule} i={i} />
            </div>
            {/each}
        <h1>Collections</h1>
        <p>Something about the collections</p>
        <div class="mt-1">
            <!-- {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"]} -->
            <!-- {#each whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"] as collection} -->
            {#if $collections} 
            {#each $collections as collection}
            {#if collection.selected}
            <div class="mt-1">
                <CollectionComponent joined={joined} token1valid={token1valid} width={width} {...collection} />
            </div>
            {/if}
            {/each}
            {/if}
        </div>

        <div class="mt-2" style="display: flex;">
            <h1>Verification</h1>
        </div>
        <p>Something about the verification</p>

        <!-- <div class="mt-1">
             {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsEmeraldID"]}
             <VerificationComponent {...EmeraldIdVerif} /> 
            {/if} 
            <VerticalSpace value="0.8rem" />
            {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.DiscordRoles"]}
             <VerificationComponent {...DiscordVerif} /> 
            {/if}
            <VerticalSpace value="0.8rem" />
            {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.TwitterFollows"]}
             <VerificationComponent {...TwitterVerif} /> 
            {/if}
        </div> -->
        <div class="mt-1">
             {#if $emeraldIdVerif}
             <VerificationComponent joined={joined} token1valid={token1valid} width={width} {...$emeraldIdVerif} /> 
            {/if} 
            
        </div>
        {#if !joined}
        <footer>
            <button style="--opacity:{isVerifing ? 0.4 : 1 }"  on:click="{() => handleJoin(whitelist)}">JOIN</button>
        </footer>
        {/if}
       
    </article>
    {/await}

    <style>
        button{
            opacity: var(--opacity);
        }
    </style>
