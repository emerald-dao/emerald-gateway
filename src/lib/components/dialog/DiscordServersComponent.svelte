<script>
    import {
        tokens,
        discordVerif
    } from "$lib/stores";

	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()

import Icon from "../common/Icon.svelte";
import DiscordRolesComponent from "./DiscordRolesComponent.svelte";
    
    export let selectedVal
    let amountInput
    let tokensVal
    let servers
    let DiscordVerif
     let selectedServer
    
    tokens.subscribe(val => tokensVal = val)
    discordVerif.subscribe(val => {
        servers = val.servers
    })
    
    const handleChange = (e) => $tokens[selectedVal].amount = e.target.value

function handleSelection(i) {
    if (i === selectedServer) {
        selectedServer = -1
    } else {
        selectedServer = i

    }
	}
    </script>
    
    <div
        style="width: 100%; height:84%; display:flex;
        flex-direction:column;
        overflow-y:auto;
        align-items:center">
        <div style="width:80%">
            <ul class="mt-2">
                {#each servers as server, i}
                <button class="server-container mt-1" on:click={() => handleSelection(i)} >
                    <div class="server" >
                        {server.label}
                    </div>
                    <div>
                        <Icon icon={`fa6-solid:chevron-${selectedServer === i ? "up" : "down"}`} height="1.4rem" />
                    </div>
                  
                </button>
                <!-- // if selected and roles exist -->
                <!-- {#if server.roles.length > 0 && isSelected} -->
                {#if server.roles.length > 0 && selectedServer === i}
                <!-- {#if  isSelected} -->
                <DiscordRolesComponent roles={server.roles} />

                {/if}
                {/each}
            </ul>
            
        </div>
    </div>
    
    <style>
button{
    background-color: #5865F2;
    border-color: #5865F2;
}

ul {
    list-style-type: none;
    width: 100%;

    margin-top: 0.9rem;
    padding: 0;
}

li {
    display: flex;
    height: 3rem;
    margin-top: 1rem;
    padding: 0;
}
.server-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;
    
}
.server-container:hover {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #5865F2;
    background-color: rgba(88, 101, 242, 0.1);
    /* border-radius: 12px; */
}


    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 73%;
        width: 100%;
    }
    </style>
    