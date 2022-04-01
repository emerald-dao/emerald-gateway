<script>
import {
    tokens,
    modal,
    dialog,
    selectedToken
} from "$lib/stores";
import Icon from "@iconify/svelte";


export let selected
export let imgUrl
export let label
export let amount
export let mobile
export let id
export let i

let tokensValue;
tokens.subscribe(val => {
    tokensValue = val
})

function openDialog() {
    $dialog.title = "Token Amount"
    $dialog.opened = true
}

const handleEdit = (id) => {
    $selectedToken = id
    openDialog()
}

const handleSelection = (id) => {
    // update token 
    $selectedToken = id
    $tokens[id].selected = !$tokens[id].selected
    console.log("tokens val", tokensValue)

    // check store state
    const tokenAmount = tokensValue[id].amount
    console.log("tokenAmount", tokenAmount)
    if (tokenAmount === 0) {
        console.log("opening")
        openDialog()
    } else {
        //reset token amount and selection state
        $tokens[id].amount = 0
        $tokens[id].selected = false
    }   
}

</script>


<li
    class={"token mt-1"}
    >
    <div
        style="--width:{amount ? "30%" : "20%"} "
        class={ !mobile  ? "token-container" : "token-container-mobile"}
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
        {#if amount !== 0}
        <div class="amount-container"
            on:click={() => handleEdit(id)}
            >
            {amount}
            <div class="icon-container">
                <Icon icon="akar-icons:edit" />

            </div>
        </div>
        {:else}
        <div></div>
        {/if}

    </div>
    <div
        style="display:flex; justify-content:end; width:20%; padding-right: 1rem;"
        >

        <input
            type="checkbox"
            on:click={() => handleSelection(id)}
        bind:checked={selected}
        />
    </div>
</li>

                <style>
.amount-container {
    color: #252E37;
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

.token{
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;

}

.token:hover {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(56, 232, 198, 0.1);
    cursor: pointer;
    padding-left: 3%;
}

.token-container {
    position: relative;
    display: flex;
    width: var(--width);
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;
}

.token-container-mobile {
    position: relative;
    display: flex;
    width: 50%;
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
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
