<script>
import Icon from "@iconify/svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"
import {
    discordVerif,
    modal
} from '../../stores';
// import {
//     handleEvent
// } from "./utils"
import TabHeader from "./TabHeader.svelte";
import DiscordServersComponent from "./DiscordServersComponent.svelte";

let discordVal

discordVerif.subscribe(val => discordVal = val)

const handleEvent = (e) => {
    $discordVerif.active = true
    $modal.content = "discord-verif"
    openModal()
}

function openModal() {
    $modal.opened = true
}



function handleAddServer() {
    $modal.content = "discord-verif"
    openModal()
}
</script>

<div >
    <TabHeader title={"Discord Verification"} subtitle={"Something about the Discord verification"} />
    <button  class={discordVal?.active ? "discord-active flex-align" : "discord-inactive outline mb-1 flex-align"}
        on:click={handleEvent}
        >
        Add Discord Verification
        <div class="logo">
            <Icon height="100%"  icon="radix-icons:discord-logo" color={discordVal?.active ? "black" : "#5865F2" } />
        </div>
    </button>

    {#if discordVal.servers }
    <DiscordServersComponent servers={discordVal.servers} />
    <button on:click={handleAddServer} style="width: 50%;" class="discord-active mt-1">Add Server</button>
    {/if}

</div>

    
        
        <style>
.discord-active {
    color: "black";
    border-color: #5865F2;
    background: #5865F2;
}

.discord-inactive {
    color: #5865F2;
    border-color: #5865F2;
}

.logo {
    object-fit: cover;
    height: 2rem;
    margin-left: 0.5rem;
}
</style>
