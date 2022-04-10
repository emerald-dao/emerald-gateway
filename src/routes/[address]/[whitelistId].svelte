<script>
import {
    page
} from "$app/stores";
import Dialog from "$lib/components/Dialog.svelte";
import {
    dialog,
    joinedWhitelists,
    transactionInProgress,
    transactionStatus
} from "$lib/stores";

import VerificationComponent from "$lib/components/projects/VerificationComponent.svelte";
import CollectionComponent from "$lib/components/tabs/CollectionComponent.svelte";
import VerticalSpace from "$lib/components/VerticalSpace.svelte";
import {
    readWhitelist
} from "$lib/flow/utils";
import TokenComponent from "$lib/components/common/TokenComponent.svelte"
import { goto } from "$app/navigation";

let whitelist = readWhitelist(
    $page.params.address,
    $page.params.whitelistId
);

let token1valid = null

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
    $transactionInProgress = true
    $transactionStatus = 1
    setTimeout(() => {
        token1valid = true
        $transactionStatus = 4
        addJoinedWhitelist(whitelist)
        $transactionInProgress = false
    }, 2000);
    setTimeout(() => {
        goto("/?tab=joined")
    },3500)
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
        <div style="display: flex;" class="mt-1">
            {#each whitelist.modules.token as tokenModule, i}
                <TokenComponent token1valid={token1valid} tokenModule={tokenModule} i={i} />
            {/each}
        </div>
        <h1>Collections</h1>
        <p>Something about the collections</p>
        <div class="mt-1">
            {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"]}
            {#each whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsNFT"] as collection}
            {#if collection.selected}
            <div class="mt-1">
                <CollectionComponent {...collection} />
            </div>
            {/if}
            {/each}
            {/if}
        </div>

        <div class="mt-2" style="display: flex;">
            <h1>Verification</h1>
        </div>
        <p>Something about the verification</p>

        <div class="mt-1">
            {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.OwnsEmeraldID"]}
            <!-- <VerificationComponent {...EmeraldIdVerif} /> -->
            {/if}
            <VerticalSpace value="0.8rem" />
            {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.DiscordRoles"]}
            <!-- <VerificationComponent {...DiscordVerif} /> -->
            {/if}
            <VerticalSpace value="0.8rem" />
            {#if whitelist.modules["A.f8d6e0586b0a20c7.GatewayModules.TwitterFollows"]}
            <!-- <VerificationComponent {...TwitterVerif} /> -->
            {/if}
        </div>
        <footer>
            <button on:click="{() => handleJoin(whitelist)}">JOIN</button>
        </footer>
    </article>
    {/await}
