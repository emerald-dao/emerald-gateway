<script>
import {
    page
} from "$app/stores";
import Dialog from "$lib/components/Dialog.svelte";
import {
    dialog
} from "$lib/stores";

import VerificationComponent from "$lib/components/projects/VerificationComponent.svelte";
import CollectionComponent from "$lib/components/tabs/CollectionComponent.svelte";
import VerticalSpace from "$lib/components/VerticalSpace.svelte";
import {
    readWhitelist
} from "$lib/flow/utils";
import TokenComponent from "$lib/components/whitelists/TokenComponent.svelte";

let whitelist = readWhitelist(
    $page.params.address,
    $page.params.whitelistId
);
</script>

<svelte:head>
    <title>Whitelist details</title>
    </svelte:head>

    {#await whitelist then whitelist}

    <Dialog />
    <article>
        <h1>
            {whitelist.name}
        </h1>
        <p>
            {whitelist.description}
        </p>
        <h1>Tokens</h1>
        <div style="display: flex;" class="mt-1">
            {#each whitelist.modules.token as tokenModule, i}
            <TokenComponent {...tokenModule} i={i} />
            {/each}
        </div>
        <h1>Collections</h1>
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
    </article>
    {/await}
