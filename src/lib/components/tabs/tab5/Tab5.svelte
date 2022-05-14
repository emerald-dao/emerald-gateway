<script>
    import Icon from "@iconify/svelte";
    import { discordVerif, modal } from "$lib/stores.js";
    import TabHeader from "../TabHeader.svelte";
    import DiscordServers from "./DiscordServers.svelte";
</script>

<div>
    <TabHeader
        title={"Discord Verification"}
        subtitle={"Select Discord servers and roles within that server that the user must have."}
    />
    <button
        class={$discordVerif.active
            ? "discord-active flex-align"
            : "discord-inactive outline mb-1 flex-align"}
        on:click={() => ($discordVerif.active = !$discordVerif.active)}
    >
        Require
        <div class="logo">
            <Icon
                height="100%"
                icon="radix-icons:discord-logo"
                color={$discordVerif.active ? "white" : "#5865F2"}
            />
        </div>
    </button>

    {#if $discordVerif.active}
        <DiscordServers />
        <button
            style="width: 50%; display:flex"
            class="discord-inactive flex-align mt-0"
        >
            Add Server
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
