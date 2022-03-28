<script>
import Icon from "@iconify/svelte"

import CheckAddress from '$lib/components/CheckAddress.svelte';
import CreateProject from '$lib/components/CreateProject.svelte';
import {
    PAGE_TITLE_EXTENSION
} from '$lib/constants';
import {
    handleTokenSelection,
    handleCollectionSelection,
} from "$lib/components/tabs/utils"

import {
    tabs,
    tokens,
    collections,
    activeTabVal,
} from '$lib/stores';
import Dialog from "$lib/components/Dialog.svelte";
import Modal from "$lib/components/Modal.svelte";

let tabsValue
let activeTabValue;
let isHovered = {
    right: false,
    left: false
}

// logic
tabs.subscribe(value => {
    tabsValue = value;
});

activeTabVal.subscribe(val =>  activeTabValue = val)

const handleEvent = msg => {
    switch (activeTabValue) {
        case 0:
            $tabs[activeTabValue].done = true
            handleAction("increment")
            break;
        case 1:
            $tabs[activeTabValue].done = true
            handleAction("increment")
            break;
        case 2:
            $tabs[activeTabValue].done = true
            handleAction("increment")
            break;
        case 3:
            $tabs[activeTabValue].done = true
            handleAction("increment")
            break;

        default:
            break;
    }
}

const handleAction = action => {
    if (activeTabValue === 0 && action === "decrement" || activeTabValue === 4 && action === "increment") {
        return
    } else {
        action === "increment" ? activeTabValue++ : activeTabValue--

    }
}
const handleClick = tabValue => () => ($activeTabVal = tabValue);
</script>

<svelte:head>
    <title>Home {PAGE_TITLE_EXTENSION}</title>
    </svelte:head>

    <Dialog />
    <Modal />
    <article>
        <main class="main-container">
            <!-- TabBar -->
            <div class="chevron-wrapper" on:click={() => handleAction("decrement")}>
                <div
                    class={activeTabValue === 0 ? "chevron-icon-disabled" : "chevron-icon"}
                    on:pointerenter={() => (isHovered.left = !isHovered.left)}
                    on:pointerleave={() => (isHovered.left = !isHovered.left)}
                    >
                    <Icon
                        class="chevron-icon"
                        icon="akar-icons:circle-chevron-left"
                        height={36}
                        color={isHovered.left && activeTabValue !== 0 ? "var(--primary)" : "lightgrey"}
                        />
                        </div>
                        </div>
                        <ul>
                            {#each tabsValue as item, i}
                            <li
                                class={activeTabValue === item.value ? "active" : "inactive-tab"}
                                on:click={handleClick(item.value)}
                                >
                                <Icon
                                    icon={item.icon}
                                    height={i === 3 ? 26 : 30}
                                    color={tabsValue[i].done
                                    ? "#85DFB4"
                                    : activeTabValue === item.value
                                    ? "var(--primary)"
                                    : "lightgrey"}
                                    />
                                    </li>
                                    {/each}
                                    </ul>
                                    <div class="chevron-wrapper" on:click={() => handleAction("increment")}>
                                        <div
                                            class={activeTabValue === 4 ? "chevron-icon-disabled" : "chevron-icon"}
                                            on:pointerenter={() => (isHovered.right = !isHovered.right)}
                                            on:pointerleave={() => (isHovered.right = !isHovered.right)}
                                            >
                                            <Icon
                                                class="chevron-icon"
                                                icon="akar-icons:circle-chevron-right"
                                                height={36}
                                                color={isHovered.right && activeTabValue !== 3 ? "var(--primary)" : "lightgrey"}
                                                />
                                                </div>
                                                </div>
                                                </main>

                                                <!-- TabContent -->
                                                {#each tabsValue as item}
                                                {#if activeTabValue == item.value}
                                                <div class="tab-content-container" >
                                                    <!-- <div class="tab-content-container" in:fade={{ duration: 1000 }}> -->
                                                    <!-- <svelte:component this={item.component} on:message={handleEvent} /> -->
                                                    <svelte:component this={item.component}  />
                                                </div>
                                                <footer>
                                                    <div class="mt-0 mb-0 pl-1">
                                                        <button class="contrast small-button"
                                                            on:click={handleEvent}
                                                            >Continue</button
                                                            >
                                                            </div>
                                                            </footer>
                                                            {/if}
                                                            {/each}

                                                            </article>

<style>
h1 {
    text-align: center;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 70%;
    width: 70%;
    max-width: 70%;
    overflow: scroll;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.08);
    list-style: none;
}

ul::-webkit-scrollbar {
    display: none;
}

li {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
    min-width: 25%;
    cursor: pointer;
}

li.active {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #495057;
    background-color: #fff;
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
    background-color: rgba(56, 232, 198, 0.1);
    margin: 0;
    padding: 0;
    width: 25%;
    height: 100%;
    min-width: 25%;
}

.inactive-tab:hover {
    background: var(--form-element-border-color);
}

.chevron-icon {
    cursor: pointer;
}

.chevron-icon-disabled {
    opacity: 0.5;
}

.main-container {
    margin-top: -6%;
    height: 3rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.tag-line {
    font-weight: 300;
    font-size: 1.2rem;
    margin-top: 30px;
    display: block;
}

.island {
    width: 30vw;
    max-width: 400px;
}

.chevron-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%;
}
</style>
