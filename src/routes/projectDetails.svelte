<script>
import HorizontalSpace from "$lib/components/HorizontalSpace.svelte"
import VerificationComponent from "$lib/components/projects/VerificationComponent.svelte";
import CollectionComponent from "$lib/components/tabs/CollectionComponent.svelte"
import VerticalSpace from "$lib/components/VerticalSpace.svelte";
import {
    tab1data,
    tokens,
    collections,
    emeraldIdVerif,
    discordVerif,
    twitterVerif
} from "$lib/stores"
import {
    latestBlock
} from "@samatech/onflow-fcl-esm"

let Tab1data
let Tokens
let Collections
let EmeraldIdVerif
let DiscordVerif
let TwitterVerif
let verificationData = []

tab1data.subscribe(val => Tab1data = val)
tokens.subscribe(val => Tokens = val)
collections.subscribe(val => Collections = val)
emeraldIdVerif.subscribe(val => EmeraldIdVerif = val)
discordVerif.subscribe(val => DiscordVerif = val)
twitterVerif.subscribe(val => TwitterVerif = val)
</script>

<svelte:head>
    <title>{Tab1data.name} details</title>
    </svelte:head>
    <article>
        <h1>
            {Tab1data.name}
        </h1>
        <p>
            {Tab1data.description}
        </p>

        <h1>
            Tokens
        </h1>
        <div style="display: flex;" class="mt-1">
            {#each Tokens as {imgUrl, label, amount, selected, id} }
            {#if selected || true}
            <div
                style="--width:{ "30%"}; --margin-left:{id === 0 ? "0rem" : "0.8rem"}"
                class={"token-container"}
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
                <div style="margin-right: 1rem;"  >
                    {label}

                </div>
                <div class="amount-container"

                    >
                    {amount}
                </div>
            </div>

            {/if}

            {/each}
        </div>
        <h1>
            Collections
        </h1>
        <div  class="mt-1">
            {#each Collections as collection }
            {#if collection.selected || true}
            <div class="mt-1">
                <CollectionComponent {...collection} />

            </div>

            {/if}

            {/each}
        </div>

        <div class="mt-2" style="display: flex;">
            <h1>Verification</h1>
        </div>
        <div class="mt-1">
            {#if EmeraldIdVerif.active || true}
            <VerificationComponent {...EmeraldIdVerif} />
            {/if}
            <VerticalSpace value="0.8rem" />
            {#if DiscordVerif.active || true}
            <VerificationComponent {...DiscordVerif} />
            {/if}
            <VerticalSpace value="0.8rem" />
            {#if TwitterVerif.active || true}
            <VerificationComponent {...TwitterVerif} />
            {/if}
        </div>

    </article>

    
    <style>
.token-container {
    display: flex;
    width: var(--width);
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;
    margin-left: var(--margin-left);
}

.amount-container {
    color: #252E37;
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
