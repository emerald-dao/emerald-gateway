<script>
import {
    discordVerif
} from "$lib/stores";

import Icon from "@iconify/svelte"


let DiscordVerif
discordVerif.subscribe(val => DiscordVerif = val)


</script>



{#if DiscordVerif.servers[DiscordVerif.selectedId].roles.length === 0}
<div>no roles</div>

{:else}
<ul >
    {#each DiscordVerif.servers[DiscordVerif.selectedId].roles as role } 
    <li class="role-container">

        <div class="role">{role.label}</div>
        <div class="icon-container">
            <Icon icon="ant-design:minus-circle-twotone" height="3rem"/>
        </div>
    </li>
    {/each} 
</ul>
{/if}

<style>
    ul {
        list-style-type: none;
        width: 100%;
    }
    
    li {
        display: flex;
        height: 3rem;
    }
    
    .role-container {
        display: flex;
        width: 80%;
    }
    
    .role {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        background: #252E37;
        width: 80%;
        border-radius: 9px;
        height: 100%;
    
    }
    </style>
    
