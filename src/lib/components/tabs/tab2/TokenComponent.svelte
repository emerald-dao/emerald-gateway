<script>
    import Icon from "@iconify/svelte";

    export let token;
    let editing;

    function onEnter(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            editing = false
        }
    }
</script>

<div style="--width:{token.selected ? '225px' : '150px'}" class="token-container">
    <img src={token.imgUrl} alt="logo" class="token-image" />
    <div style="margin-right: 1rem;">
        {token.label}
    </div>
    {#if token.selected && !editing}
        <div class="amount-container" on:click={() => (editing = true)}>
            {token.amount}
            <div class="icon-container">
                <Icon icon="akar-icons:edit" />
            </div>
        </div>
    {:else if token.selected && editing}
        <div class="amount-container">
            <input id="editor" type="text" style="color: black;" on:keydown={onEnter} on:change={(e) => token.amount = e.target.value} />
            <div class="icon-container" on:click={() => (editing = false)}>
                <Icon icon="akar-icons:clipboard" />
            </div>
        </div>
    {/if}
</div>

<style>
    #editor {
        text-decoration: none;
        background: none;
        border: none;
        outline: none;
        border-bottom: 1px solid;
        margin-bottom: 0px;
        padding: 5px;
        width: 50px;
        height: 70%;
        border-radius: 0px;
        margin-right: 20px;
    }
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
