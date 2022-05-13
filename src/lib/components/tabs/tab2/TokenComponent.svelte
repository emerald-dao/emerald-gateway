<script>
    import { selectedToken } from "$lib/stores";
    import Icon from "@iconify/svelte";

    export let imgUrl;
    export let label;
    export let amount;
    export let id;

    const handleEdit = (id) => {
        $selectedToken = id;
        openDialog();
    };
</script>

<div style="--width:{amount ? '225px' : '150px'}" class="token-container">
    <img src={imgUrl} alt="logo" class="token-image" />
    <div style="margin-right: 1rem;">
        {label}
    </div>
    {#if amount !== 0}
        <div class="amount-container" on:click={() => handleEdit(id)}>
            {amount}
            <div class="icon-container">
                <Icon icon="akar-icons:edit" />
            </div>
        </div>
    {/if}
</div>

<style>
    .token-image {
        border-radius: 50px;
        object-fit: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 2.6rem;
        height: 2.6rem;
    }
    .amount-container {
        color: #252e37;
        font-weight: bold;
        display: flex;
        height: 100%;
        width: 36%;
        justify-content: center;
        align-items: center;
        background: white;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    .token-container {
        position: relative;
        display: flex;
        width: var(--width);
        height: 70%;
        justify-content: space-between;
        border-radius: 50px;
        align-items: center;
        background-color: #252e37;
        font-weight: bold;
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary);
        border-radius: 100px;
        position: absolute;
        top: -0.6rem;
        right: 0px;
        height: 1.2rem;
        width: 1.2rem;
        padding: 0.2rem;
    }
</style>
