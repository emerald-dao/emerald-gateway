<script>
import {
    fly
} from 'svelte/transition';
import {
    tokens,
    modal,
    dialog,
    selectedToken
} from '../../stores';

import {
    handleEvent
} from './utils';

import Modal from '../Modal.svelte';
import HorizontalSpace from "../HorizontalSpace.svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"
import Icon from "@iconify/svelte";
// import Dialog from '../Dialog.svelte';
import TabHeader from './TabHeader.svelte';

let hoveredId;
let tokensValue;
let ModalVal

modal.subscribe(val => ModalVal = val)
tokens.subscribe(val => {
    tokensValue = val
})

function openModal() {
    $modal.opened = true
}

function openDialog() {
    $dialog.opened = true
}

// function closeModal() {
//     $modal.opened = false
// }

// function closeDialog() {
//     $dialog.opened = false
// }

const handleEdit = (id) => {
    $selectedToken = id
    openDialog()
}

const handleSelection = (id) => {
    // update token 
    $selectedToken = id
    $tokens[id].selected = true
    console.log("tokens val", tokensValue)

    // check store state
    const tokenAmount = $tokens[id].amount
    if (tokenAmount === 0) {
        openDialog()
    } else {
        //reset token amount and selection state
        $tokens[id].amount = 0
        $tokens[id].selected = false
    }   

}

const handlePointerEnter = id => hoveredId = id
const handlePointerLeave = id => hoveredId = null
</script>

<Modal   />
<!-- <Dialog  /> -->
<main class="container">
    <TabHeader title={"Tokens"} subtitle={"Something about the tokens"} />
    <div class="tokens-container mt-2">
        <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">
            {#each tokensValue as { id, label, amount,  imgUrl, selected }, i}
            <li
                class={hoveredId === id ? "token-active mt-1" : "token-inactive mt-1"}
                on:pointerenter={() => handlePointerEnter(id)}
                on:pointerleave={() => handlePointerLeave(id)}
                >
                <div
                    class={amount ? "token-container-active" : "token-container-inactive"}
                    >
                    <div
                        style="display:flex; justify-content:space-between; align-items:center; width: 4rem; height:100%; "
                        >
                        <img
                            style="height:96%; border-radius: 50px; object-fit:cover"
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
                            <Icon icon="akar-icons:edit" s/>

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
                                {/each}
                                </ul>
                                <footer class="custom-container">
                                    <div class="secondary-btn" on:click={openModal}>
                                        <div>
                                            <Icon icon="ant-design:plus-circle-outlined" height={"1.2rem"} />
                                        </div>
                                        <HorizontalSpace value="0.3rem" />
                                        <div>ADD CUSTOM TOKEN</div>
                                    </div>
                                </footer>
                                </main>

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

.token-inactive {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;

}

.token-active {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(56, 232, 198, 0.1);
    cursor: pointer;
    padding-left: 3%;
}

.token-container-active {
    position: relative;
    display: flex;
    width: 30%;
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;
}

.token-container-inactive {
    position: relative;
    display: flex;
    width: 20%;
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

main {
    margin: 0;
    padding: 0;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    margin: 0;
    padding: 0;
}

textarea {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

h5 {
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

.menu-icon-container {
    display: flex;
    height: 100%;
    width: 6%;
    justify-content: center;
    align-items: center;
}

.alignment-icon {
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.alignment-container {
    display: flex;
    width: 20%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid var(--form-element-border-color);
}

.text-type-container {
    display: flex;
    width: 34%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid var(--form-element-border-color);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.text-icons-container {
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: start;
    align-items: center;
    border-right: 1px solid var(--form-element-border-color);
}

.text-icon {
    display: flex;
    height: 100%;
    width: 1.8rem;
    justify-content: center;
    align-items: center;
}

.textarea-header {
    display: flex;
    width: 100%;
    height: 1.6rem;
    border: 1px solid var(--form-element-border-color);
    border-bottom: none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    margin-top: 3px;
}

.inputs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    width: 100%;
}

.container {
    height: 100%;
    width: 100%;
}
</style>
