<script>
    import VerificationComponent from "$lib/components/projects/VerificationComponent.svelte";
    import CollectionComponent from "$lib/components/tabs/tab3/CollectionComponent.svelte";
    import {
        tab1data,
        tokens,
        collections,
        emeraldIdVerif,
        discordVerif,
        twitterVerif,
    } from "$lib/stores.js";
    import VerticalSpace from "$lib/components/VerticalSpace.svelte";
    import TabHeader from "../TabHeader.svelte";
</script>

<div>
    <TabHeader
        title="Confirmation"
        subtitle="Confirm your whitelist information."
    />

    <h3>
        {$tab1data.name}
    </h3>
    <p>
        {$tab1data.description}
    </p>

    <h3>Tokens</h3>
    <div style="display: flex; flex-direction:column;" class="mt-1">
        {#each $tokens as { imgUrl, label, amount, selected, id }}
            {#if selected}
                <div
                    style="--width:30%; --margin-left:0.8rem; --margin-top:0rem"
                    class="token-container mt-1"
                >
                    <div
                        style="display:flex; justify-content:space-between; align-items:center; width: 2.6rem; height:2.6rem; "
                    >
                        <img
                            style="height:100%; width:2.6rem;   border-radius: 50px; object-fit:cover"
                            src={imgUrl}
                            alt="logo"
                        />
                    </div>
                    <div style="margin-right: 1rem;">
                        {label}
                    </div>
                    <div class="amount-container">
                        {amount}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    <h3>Collections</h3>
    <div class="mt-1">
        {#each $collections as collection}
            {#if collection.selected}
                <div class="mt-1">
                    <CollectionComponent {...collection} />
                </div>
            {/if}
        {/each}
    </div>

    <div class="mt-2" style="display: flex;">
        <h3>Verification</h3>
    </div>
    <div class="mt-1">
        {#if $emeraldIdVerif.active}
            <VerificationComponent {...$emeraldIdVerif} />
        {/if}
        <VerticalSpace value="0.8rem" />
        {#if $discordVerif.active}
            <VerificationComponent {...$discordVerif} />
        {/if}
        <VerticalSpace value="0.8rem" />
        {#if $twitterVerif.active}
            <VerificationComponent {...$twitterVerif} />
        {/if}
    </div>
</div>

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
