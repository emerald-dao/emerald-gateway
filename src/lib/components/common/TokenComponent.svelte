<script>
import Icon from "./Icon.svelte"
export let tokenModule
export let token1valid
export let i
export let width
export let joined
</script>

<div style="height: 70%; width:{`${joined ? 100 : $width}%`};" class:valid={token1valid || joined}  >
    <div
        style="--width:{"12rem"};"
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
    {#if token1valid || joined}
    <Icon icon="line-md:confirm-circle" color="var(--primary)" height="2.6rem" />
    {/if}
</div>

                <style>
.valid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    /* width: 100%; */
    background-color: rgba(56, 232, 198, 0.1);
    border-radius: 50px;

}

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
