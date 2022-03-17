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
import { handleEvent } from './utils';


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
    // console.log(e.target.value)
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

        <div class="collections-container mt-1">
            <ul style="height:100%; width: 100%; list-style:none; overflow:hidden">
                {#each collectionsValue as { id, label, imgUrl }, i}
                <li
                class={hoveredId === id ? "collection-active" : "collection-inactive"}
                on:pointerenter={() => handlePointerEnter(id)}
                    on:pointerleave={() => handlePointerLeave(id)}
                    on:click={() => handleChange(id)}
                    >
                    <div
                        style="display:flex; width: 80%; height: 100%; align-items:center"
                        >
                        <div
                            style="display:flex; justify-content:center; align-items:center; width: 4rem; height:100%;"
                            >
                            <img
                                style="height:2rem; border-radius: 50px; object-fit:cover"
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
    .collection-inactive {
        display: flex;
        height: 20%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    
    .collection-active {
        display: flex;
        height: 20%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(218, 4, 106, 0.1);
        cursor: pointer;
    }
    
    main {
        margin: 0;
        padding: 0;
    }
    
    ul{
        margin: 0;
        padding: 0;
    }
    li{
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
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        cursor: pointer;
    }
    
    .secondary-btn:hover {
        background: rgba(218, 4, 106, 0.1);
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