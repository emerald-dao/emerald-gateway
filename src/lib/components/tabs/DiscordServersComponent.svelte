<script>
import { modal, discordVerif } from "$lib/stores";
import Icon from "@iconify/svelte"

export let servers

function handleSelection(i) {
    $discordVerif.selectedId = i 
    $modal.content = "Discord Verification"
    $discordVerif.editing = true 
    $modal.opened = true
    
}

function removeServer(id) {
		$discordVerif.servers = $discordVerif.servers.filter(function(value, index, arr){ 
			if (value.id != id) return value;
		});
	}

</script>

<h3 class="mt-2">Discord Servers</h3>
<ul class="mt-2">
    {#each servers as server, i}
    <li class="server-container" >
        <div class="server" on:click={() => handleSelection(i)}>
            {server.label}
            <div class="edit-icon-container">
                <Icon color="white" icon="akar-icons:edit" />
            </div>
        </div>
        <div class="icon-container flex-align" on:click={() => removeServer(server.id)}>
            <Icon height="80%" icon="ant-design:minus-circle-twotone" />
        </div>
    </li>
    {/each}
</ul>

<style>
.edit-icon-container {
    position: absolute;
    top: -0.8rem;
    right: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5865F2;
    border-radius: 100px;
    height: 1.4rem;
    width: 1.4rem;
    padding: 0.2rem;
}

.edit-icon-container:hover {
    cursor: pointer;
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

.icon-container {
    height: 100%;
    color: lightslategrey;
}

.icon-container:hover {
    color: red;
    cursor: pointer;
}

.server-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #5865F2;
    
}
.server-container:hover {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #5865F2;
    background-color: rgba(88, 101, 242, 0.1);
    border-radius: 12px;
}

.server {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    background: #252E37;
    width: 50%;
    border-radius: 9px;
    height: 100%;
}

.server:hover {
    cursor: pointer;
}
</style>
