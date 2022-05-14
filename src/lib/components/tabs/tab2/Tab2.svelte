<script>
    import { tokens } from "$lib/stores.js";
    import TabHeader from "$lib/components/tabs/TabHeader.svelte";
    import TokenRow from "./TokenRow.svelte";
</script>

<main>
    <TabHeader
        title={"Tokens"}
        subtitle={"Require the user to have a certain amount of tokens."}
    />
    <div class="tokens-container mt-2">
        <ul>
            {#each $tokens as token, i}
                <TokenRow {token} />
            {/each}
        </ul>
        <!-- <footer class="custom-container">
            <div class="secondary-btn" on:click={openModal}>
                <Icon
                    icon="ant-design:plus-circle-outlined"
                    height={"1.2rem"}
                />
                <HorizontalSpace value="0.3rem" />
                <div>ADD CUSTOM TOKEN</div>
            </div>
        </footer> -->
    </div>
</main>

<style>
    main {
        margin: 0;
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    .tokens-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 13rem;
        border: 2px solid var(--form-element-border-color);
        width: 100%;
        border-radius: 9px;
        background: var(--background-color);
    }
</style>
