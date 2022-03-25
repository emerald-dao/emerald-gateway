<script>
    import Icon from "@iconify/svelte"
import DiscordRoles from "./DiscordRoles.svelte";
import {
    discordVerif
} from "$lib/stores";

let DiscordVerif
let roleVal


discordVerif.subscribe(val => DiscordVerif = val)

const addToArray = () => {
    $discordVerif.roles = [...$discordVerif.roles, {
        id: 1,
        label: roleVal
    }];
};
</script>

    <div class="content"
        >
        <div style="width:80%">
            <h3 class="mt-1">Discord Server ID</h3>
            <input placeholder="Input 1" bind:value={DiscordVerif.serverId}  />
        </div>
        <div style="width:80%">
            <h3 class="mt-0">Discord Server Roles</h3>
            <div class="role-input">
                <div style="width: 70%;">
                    <input placeholder="Input 2" bind:value={roleVal}  />
                </div>
                <div style="width: 30%;">
                    <!-- <button class="outline small-button" on:click={addToArray}>
                        <Icon icon="ant-design:plus-circle-twotone"  />
                    </button> -->
                    <div  on:click={addToArray}>
                        <Icon icon="ant-design:plus-circle-twotone"  />
                    </div>
                </div>
            </div>
        </div>
        <DiscordRoles roles={DiscordVerif.roles}/>
            </div>

<style>
.role-input {
    display: flex;
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
