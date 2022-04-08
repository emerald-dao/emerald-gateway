<script>
import {
    discordVerif
} from "$lib/stores";

import LocalRolesComponent from "./LocalRolesComponent.svelte";
import ServerRolesComponent from "./ServerRolesComponent.svelte";

export let localRoles
export let dispatch

let DiscordVerif
discordVerif.subscribe(val => DiscordVerif = val)
</script>

{#if DiscordVerif.editing}
<ServerRolesComponent dispatch={dispatch} />
{:else}
<LocalRolesComponent dispatch={dispatch} localRoles={localRoles} />

{/if}

