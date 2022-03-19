<script>
import {
    fly
} from 'svelte/transition';
import {
    getContext
} from 'svelte';
import {
    createEventDispatcher
} from 'svelte';
import Dialog from '../Dialog.svelte';
import {
    tabs,
    collections
} from '../../stores';
import {
    handleEvent
} from './utils';

const dispatch = createEventDispatcher();

// import Popup from '../Popup.svelte';
import Modal from '../Modal.svelte';
import HorizontalSpace from "../HorizontalSpace.svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"
// import { modal } from '../../stores.js';

import Icon from "@iconify/svelte";

let hoveredId;
let selectedId;
let isOpenModal = false;
let collectionsValue;

collections.subscribe(val => collectionsValue = val)

const handleChange = (id) => {
    console.log("id", id)
    selectedId = id

    if ($collections[id].selected) {
        $collections[id].selected = false

    } else {
        $collections[id].selected = true
    }

}

const handlePointerEnter = id => hoveredId = id
const handlePointerLeave = id => hoveredId = null
</script>

<!-- <Modal isOpenModal={isOpenModal} on:closeModal={closeModal} /> -->
<main class="container">
    <header>
        <h3 class="mt-1">Collections</h3>
        <p>Something about the Collections</p>
    </header>

    <div class="collections-container mt-2">
        <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">
            {#each collectionsValue as { id, label, imgUrl }, i}
            <li
                class={hoveredId === id ? "collection-active" : "collection-inactive"}
                on:pointerenter={() => handlePointerEnter(id)}
                on:pointerleave={() => handlePointerLeave(id)}
                on:click={() => handleChange(id)}
                >
                <div
                    class="collection-container-inactive"

                    >
                    <div
                        style="display:flex; justify-content:center; align-items:center; width: 2.6rem; height:100%;"
                        >
                        <img
                            style="height:2.6rem; width:2.6rem; border-radius: 50px; object-fit:fill"
                            src={imgUrl}
                            alt="logo"
                            />
                    </div>
                    <div>
                        {label}
                    </div>
                </div>
                <div
                    style="display:flex; justify-content:end; width:20%; padding-right: 1rem;"
                    >
                    <input
                        type="checkbox"
                        on:click={() => handleEvent("selectCollection", id, dispatch)}
                    checked={collectionsValue[id].selected}
                    />
                </div>
            </li>
            {/each}
        </ul>

    </div>

</main>
<!-- <div>
            <h6>Url</h6>
            <input
              placeholder="https://myproject.com"
              value={projectURL ? projectURL : null}
              on:change={handleChange}
            />
          </div>
          <div>
              <h6>Privacy</h6>

</div> -->

<style>
.collection-container-active {
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

.collection-container-inactive {
    position: relative;
    display: flex;
    width: 30%;
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;
    padding-right: 1rem;
}

.collection-inactive {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;

}

.collection-active {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(218, 4, 106, 0.1);
    cursor: pointer;
    padding-left: 3%;

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

.collections-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 13rem;
    border: 2px solid var(--form-element-border-color);
    width: 100%;
    border-radius: 9px;
    background: var(--background-color);
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
