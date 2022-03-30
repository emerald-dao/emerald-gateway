<script>
import Icon from "@iconify/svelte"
import {
    PAGE_TITLE_EXTENSION
} from '$lib/constants';
import {
    handleTokenSelection,
    handleCollectionSelection,
} from "$lib/components/tabs/utils"

import {
    goto,
} from '$app/navigation';

import {
    tabs,
    tokens,
    collections,
    activeTabVal,
    projects,
    tab1data,
    emeraldIdVerif,
    discordVerif,
    twitterVerif,
} from '$lib/stores';
import Dialog from "$lib/components/Dialog.svelte";
import Modal from "$lib/components/Modal.svelte";
import EmeraldIdIcon from "$lib/components/tabs/EmeraldIdIcon.svelte";

export let screenSize

let mobile = screenSize === "mobile"

let tabsValue
let activeTabValue;
let btnLabel
let isHovered = {
    right: false,
    left: false
}

let Tab1data
let Tokens
let Collections
let EmeraldIdVerif
let DiscordVerif
let TwitterVerif
let Projects

// logic
tabs.subscribe(value => {
    tabsValue = value;
});

activeTabVal.subscribe(val => {
    activeTabValue = val
    if(val === 6) {
        btnLabel = "CONFIRM"
    } else {
        btnLabel = "CONTINUE"
    }
})
tab1data.subscribe(val => Tab1data = val)
tokens.subscribe(val => Tokens = val)
collections.subscribe(val => Collections = val)
emeraldIdVerif.subscribe(val => EmeraldIdVerif = val)
discordVerif.subscribe(val => DiscordVerif = val)
twitterVerif.subscribe(val => TwitterVerif = val)
projects.subscribe(val => Projects = val)

function handleNav() {
    goto("/")
}

function createProject() {
    $projects = [...$projects, {
        id: Projects.length,
        name: Tab1data.name,
        description:Tab1data.description,
        tokens: Tokens,
        collections: Collections,
        emeraldIdVerif: EmeraldIdVerif,
        discordVerif: DiscordVerif,
        twitterVerif: TwitterVerif
    }];
}

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
        case 4:
            $tabs[activeTabValue].done = true
            handleAction("increment")
            break;
        case 5:
            $tabs[activeTabValue].done = true
            handleAction("increment")
            break;
        case 6:
            $tabs[activeTabValue].done = true
            createProject()
            handleNav()
            break;

        default:
            break;
    }
}

const autoScroll = (target) => {
    console.log("scrolling")
    const el = document.querySelector(`#tab${activeTabValue}`);
    if (!el) return;
    el.scrollIntoView({
        behavior: "smooth"
    });
}

const handleAction = (action) => {
    if ($activeTabVal === 0 && action === "decrement" || $activeTabVal === 6 && action === "increment") {
        return
    } else {
        action === "increment" ? $activeTabVal++ : $activeTabVal--
        autoScroll()

    }
}
const handleClick = tabValue => () => ($activeTabVal = tabValue);
</script>

<Dialog />
    <Modal />

<article>
    <main class="main-container">
        <!-- TabBar -->
        <div style="--width:{mobile ? "30%" : "20%"}"
            class="chevron-wrapper" on:click={() => handleAction("decrement")}>
            <div
                class={activeTabValue === 0 ? "chevron-icon-disabled" : "chevron-icon"}
                on:pointerenter={() => (isHovered.left = !isHovered.left)}
                on:pointerleave={() => (isHovered.left = !isHovered.left)}
                >
                <Icon
                    class="chevron-icon"
                    icon="akar-icons:circle-chevron-left"
                    height={mobile ? 30 : 36}
                    color={isHovered.left && activeTabValue !== 0 ? "var(--primary)" : "lightgrey"}
                    />
                    </div>
                    </div>
                    <ul>
                        {#each tabsValue as item, i}
                        <li
                            style="--width:{mobile ? "33.3%" : "25%"}"
                            id={`tab${i}`}
                            class={activeTabValue === item.value ? "active" : "inactive-tab"}
                            on:click={handleClick(item.value)}
                            >
                            {#if i === 3}
                            <div class="flex-align">
                                <EmeraldIdIcon mobile={mobile} color={activeTabValue === 3 || tabsValue[i].done ? "var(--primary)"  :"white"} />
                            </div>
                            {:else}
                            <Icon
                                icon={item.icon}
                                height={mobile ? 22 : i === 3 ? 26 : 30}
                                color={tabsValue[i].done
                                ? "var(--primary)"
                                : activeTabValue === item.value
                                ? "var(--primary)"
                                : "lightgrey"}
                                />

                                {/if}

                                </li>
                                {/each}
                                </ul>
                                <div
                                    style="--width:{mobile ? "30%" : "20%"}"
                                    class="chevron-wrapper" on:click={() => handleAction("increment")}>
                                    <div
                                        class={activeTabValue === 5 ? "chevron-icon-disabled" : "chevron-icon"}
                                        on:pointerenter={() => (isHovered.right = !isHovered.right)}
                                        on:pointerleave={() => (isHovered.right = !isHovered.right)}
                                        >
                                        <Icon
                                            class="chevron-icon"
                                            icon="akar-icons:circle-chevron-right"
                                            height={mobile ? 30 : 36}
                                            color={isHovered.right && activeTabValue !== 5 ? "var(--primary)" : "lightgrey"}
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
                                                <svelte:component this={item.component} mobile={mobile}  />
                                            </div>
                                            <footer>
                                                <div class="mt-0 mb-0 pl-1">
                                                    <button class="contrast small-button"
                                                        on:click={handleEvent}
                                                        >{btnLabel}</button
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
    width: var(--width);
    height: 100%;
    min-width: var(--width);
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
    width: var(--width);
    height: 100%;
    min-width: var(--width);
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
    height: var(--height);
    width: var(--width)
}
</style>
