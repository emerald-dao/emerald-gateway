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
        <h3 class="mt-1">Server ID</h3>
        {#if DiscordVerif.editing}
        <input class="id-input" placeholder="Server ID" bind:value={DiscordVerif.servers[DiscordVerif.selectedId].label}  />
        {:else}
        <input class="id-input" placeholder="Server ID"  bind:value={serverId} on:blur={dispatch("child-blur", serverId)} />
        {/if}

    </div>
    <div style="width:80%">
        <h3 class="mt-0">Server Roles</h3>
        <div class="role-input-container">
            <div class="" style="display:flex; margin:0; padding:0; width:100%">
                <input class="role-input" placeholder="Server Role"  bind:value={roleName} on:blur={dispatch("role-change", roleName)} />
                <div class="plus-icon-container flex-align">
                    <div class="plus-icon flex-align" on:click={handleAddRole}>
                        <Icon icon="ant-design:plus-circle-twotone" height="3rem"/>
                            </div>
                            </div>
                            </div>
                            </div>
                            <DiscordRoles dispatch={dispatch} localRoles={localRoles} />
                            </div>
                            </div>

<style>
.id-input:focus {
    border-color: #5865F2;
}

.plus-icon {
    height: 3rem;
}

.plus-icon:hover {
    height: 3rem;
    color: #5865F2;
    cursor: pointer;
}

.plus-icon-container {
    width: 4rem;
    height: 100%;
    border: 0.2px solid var(--form-element-border-color);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

}

.role-input {
    width: 100%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right-width: 0.5px;
}

.role-input:focus {
    width: 100%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right-width: 0.5px;
    border-color: #5865F2;
}

.role-input-container {
    display: flex;
    width: 100%;
    /* height: 4rem; */
    /* justify-content: space-between; */
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow:auto;
    overflow-x: hidden;
}

.content::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.content {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


</style>
