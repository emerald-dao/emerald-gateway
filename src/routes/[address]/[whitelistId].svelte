<script>
    import { page } from "$app/stores";

    import VerificationComponent from "$lib/components/projects/VerificationComponent.svelte";
    import CollectionComponent from "$lib/components/tabs/CollectionComponent.svelte";
    import VerticalSpace from "$lib/components/VerticalSpace.svelte";
    import { readWhitelist } from "$lib/flow/utils";

    let whitelist = readWhitelist(
        $page.params.address,
        $page.params.whitelistId
    );
</script>

<svelte:head>
    <title>Whitelist details</title>
</svelte:head>

{#await whitelist then whitelist}
        
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
                <div
                    style="--width:{'30%'}; --margin-left:{i === 0
                        ? '0rem'
                        : '0.8rem'}"
                    class={"token-container"}
                >
                    <div
                        style="display:flex; justify-content:space-between; align-items:center; width: 2.6rem; height:2.6rem; "
                    >
                        <img
                            style="height:100%; width:2.6rem;   border-radius: 50px; object-fit:cover"
                            src={tokenModule.imgUrl}
                            alt="logo"
                        />
                    </div>
                    <div style="margin-right: 1rem;">
                        {tokenModule.label}
                    </div>
                    <div class="amount-container">
                        {parseFloat(tokenModule.amount).toFixed(2)}
                    </div>
                </div>
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

<style>
    .token-container {
        display: flex;
        width: var(--width);
        height: 70%;
        justify-content: space-between;
        border-radius: 50px;
        align-items: center;
        background-color: #252e37;
        font-weight: bold;
        margin-left: var(--margin-left);
    }

    .amount-container {
        color: #252e37;
        font-weight: bold;
        display: flex;
        height: 2.6rem;
        width: 36%;
        justify-content: center;
        align-items: center;
        background: white;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
</style>
