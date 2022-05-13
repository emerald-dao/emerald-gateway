<script>
    import { tokens, modal } from "$lib/stores.js";

    import HorizontalSpace from "$lib/components/HorizontalSpace.svelte";
    import Icon from "@iconify/svelte";
    import TabHeader from "$lib/components/tabs/TabHeader.svelte";
    import TokenRow from "./TokenRow.svelte";

    function openModal() {
        $modal.content = "custom-token";
        $modal.opened = true;
    }
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
        <footer class="custom-container">
            <div class="secondary-btn" on:click={openModal}>
                <Icon
                    icon="ant-design:plus-circle-outlined"
                    height={"1.2rem"}
                />
                <HorizontalSpace value="0.3rem" />
                <div>ADD CUSTOM TOKEN</div>
            </div>
        </footer>
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

    .secondary-btn {
        display: flex;
        height: 1.6rem;
        align-items: center;
        padding: 0.6rem 1rem;
        border-radius: 3px;
        cursor: pointer;
    }

    .secondary-btn:hover {
        background: rgba(56, 232, 198, 0.1);
    }

    .custom-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        font-size: 0.7rem;
        color: var(--primary);
        font-weight: bold;
        border-top: 2px solid var(--form-element-border-color);
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
