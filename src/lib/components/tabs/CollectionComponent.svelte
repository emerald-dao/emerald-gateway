<script>
import Icon from "@iconify/svelte"
import {
    selectedCollection,
    dialog
} from "$lib/stores"

export let selected
export let amount
export let label
export let imgUrl
export let id
export let progress
export let token1valid

// let callParentFunction = functionProp();
const handleEdit = id => {
    $selectedCollection = id

    $dialog.opened = true
}
</script>

<div style=" width:{`${$progress}%`};" class:valid={token1valid}  >

    <div
        class={amount ? "collection-container-active" : "collection-container-inactive"}

        >
        <div
            style="display:flex; justify-content:center; align-items:center; width: 2.6rem; height:100%;"
            >
            <img
                src={imgUrl}
                alt="logo"
                />
        </div>
        <div                 class={amount ? "label-active" : "label-inactive"}
            >
            {label}
        </div>
        {#if amount}
        <!-- <div class="amount-container"
        on:click={() => handleEdit(id)}
        > -->
        <div class="amount-container"
            on:click={() => handleEdit(id)}
            >
            {amount}
            <div class="icon-container">
                <Icon icon="akar-icons:edit" s/>

                    </div>
                    </div>
                    {:else}
                    <div></div>
                    {/if}
                    
                    </div>
                    {#if token1valid}
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

img {
    max-width: 2.4rem;
    /* min-width: 2.4rem; */
    height: 100%;
    border-style: none;
    margin-left: -0.1rem;
    border-radius: 50px;
}

.label-active {
    margin-left: 2rem;
    width: 10rem;
    display: flex;
    justify-content: end;
}

.label-inactive {
    /* margin-left: 2rem;
    width: 12rem; */
    width: 10rem;
    display: flex;
    justify-content: end;
}

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
    margin-left: 1rem;
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

.collection-container-active {
    position: relative;
    display: flex;
    width: 16rem;
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;

}

.collection-container-inactive {
    position: relative;
    display: flex;
    width: 14rem;
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;
    padding-right: 0.8rem;
}
</style>
