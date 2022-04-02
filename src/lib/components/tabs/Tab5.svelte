<script>
    import Icon from "@iconify/svelte";
    import PrimaryBtn from "../PrimaryBtn.svelte";
    import { discordVerif, modal } from "../../stores";
    // import {
    //     handleEvent
    // } from "./utils"
    import TabHeader from "./TabHeader.svelte";
    import DiscordServersComponent from "./DiscordServersComponent.svelte";

    let discordVal;

    discordVerif.subscribe((val) => (discordVal = val));

    const handleEvent = (e) => {
        $discordVerif.active = !discordVal.active;
        $modal.content = "discord-verif";
    };

    function openModal() {
        $modal.opened = true;
    }

    function handleAddServer() {
        $modal.content = "discord-verif";
        openModal();
    }
</script>

<div>
    <TabHeader
        title={"Discord Verification"}
        subtitle={"Something about the Discord verification"}
    />
    <button
        class={discordVal?.active
            ? "discord-active flex-align"
            : "discord-inactive outline mb-1 flex-align"}
        on:click={handleEvent}
    >
        Require
        <div class="logo">
            <Icon
                height="100%"
                icon="radix-icons:discord-logo"
                color={discordVal?.active ? "white" : "#5865F2"}
            />
        </div>
    </button>

    {#if discordVal.active}
        <DiscordServersComponent servers={discordVal.servers} />
        <button
            on:click={handleAddServer}
            style="width: 50%; display:flex"
            class="discord-inactive flex-align mt-0"
        >
            <span>Add Server</span>
            <div style="margin-left: 0.3rem;" class="flex-align">
                <Icon icon="ant-design:plus-circle-twotone" height="1.6rem" />
            </div>
        </button>
    {/if}
</div>

<style>
    .discord-active {
        color: white;
        border-color: #5865f2;
        background: #5865f2;
    }

    .discord-inactive {
        color: #5865f2;
        border-color: #5865f2;
        background: transparent;
        cursor: pointer;
    }

    .logo {
        object-fit: cover;
        height: 2rem;
        margin-left: 0.5rem;
    }
</style>
