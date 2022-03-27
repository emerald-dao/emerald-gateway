<script>
import {
    createEventDispatcher
} from 'svelte';
const dispatch = createEventDispatcher();
import Icon from "@iconify/svelte"
import DiscordRoles from "./DiscordRoles.svelte";
import {
    discordVerif
} from "$lib/stores";

export let localRoles

export let serverId
export let roleName

let DiscordVerif
discordVerif.subscribe(val => DiscordVerif = val)

function sayHello() {
    dispatch('message', {
        text: 'Hello!'
    });
}

function handleAddRole() {
    roleName = ""
    sayHello()
}
</script>

<div class="content"
    >
    <div style="width:80%">
        <h3 class="mt-1">Discord Server ID</h3>
        {#if DiscordVerif.editing}
        <input placeholder="Server ID" bind:value={DiscordVerif.servers[DiscordVerif.selectedId].label}  />
        {:else}
        <input placeholder="Server ID"  bind:value={serverId} on:blur={dispatch("child-blur", serverId)} />
        {/if}

    </div>
    <div style="width:80%">
        <h3 class="mt-0">Discord Server Roles</h3>
        <div class="role-input">
            <div style="width: 70%;">
                <input placeholder="Server Role"  bind:value={roleName} on:blur={dispatch("role-change", roleName)} />
            </div>
            <div style="width: 30%; height:100%">
                <!-- <button class="outline small-button" on:click={addToArray}>
                        <Icon icon="ant-design:plus-circle-twotone"  />
                </button> -->
                <div class="flex-align" on:click={handleAddRole}>
                    <Icon icon="ant-design:plus-circle-twotone" color="#5865F2" height="3rem" />
                </div>
            </div>
        </div>
        <DiscordRoles localRoles={localRoles} />

    </div>


</div>

<style>
.role-input {
    display: flex;
    width: 100%;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    overflow-x: hidden;
}
</style>
