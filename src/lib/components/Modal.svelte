<script>
import {
    modal,
    discordVerif
} from "$lib/stores"
import VerticalSpace from "../components/VerticalSpace.svelte"
import Icon from "@iconify/svelte"
import DiscordVerifContent from './discordModal/DiscordVerifContent.svelte';
import CustomTokenContent from './modals/customToken/CustomTokenContent.svelte';

let Modal
let DiscordVerif

let localRoles = []
$: localRoles && console.log("changed")
let serverId = ""
let roleName = ""

modal.subscribe(val => Modal = val)
discordVerif.subscribe(val => DiscordVerif = val)

// export let Modal.opened;
let isHovered;

// const dispatch = createEventDispatcher();

function closeModal() {
    console.log("closing")
    $modal.opened = false
}

function addServer() {
    console.log("localRoles", localRoles)

    $discordVerif.servers = [...$discordVerif.servers, {
        id: DiscordVerif.servers.length,
        label: serverId,
        roles: localRoles
    }];
}

function handleMessage(event) {
    const data = event.detail.data
    const action = event.detail.action
    if (action === "removal") {
        // alert(data);
        removeRole(data)
    } else {
        addRole(data)
    }
}

const handleIdChange = ({
    detail
}) => {
    // validation here
    // alert(detail)
    serverId = detail
}

const handleRoleChange = ({
    detail
}) => {
    // validation here
    // alert(detail)
    roleName = detail
}

const addRole = (data) => {

    // check if the user it´s editing or creating a server
    if (DiscordVerif.editing) {
        // update store
        $discordVerif.servers[DiscordVerif.selectedId].roles = [...$discordVerif.servers[DiscordVerif.selectedId].roles, {
            label: roleName,
        }];
    } else {
        // update local state 
        console.log("added role")
        localRoles.push({
            label: roleName
        })
        localRoles = localRoles
    }

};

const removeRole = (index) => {
    localRoles = [
        ...localRoles.slice(0, index),
        ...localRoles.slice(index + 1, localRoles.length)
    ];

}

function resetLocalState() {
    localRoles = []
    serverId = ""
    roleName = ""
}

function handleSave() {
    console.log("serverId", serverId)

    if (DiscordVerif.editing) {
        closeModal()
        // update store
        $discordVerif.editing = false
    } else {
        // creating 
        addServer()
        resetLocalState()
        closeModal()
    }
}

function handleCancel() {
    resetLocalState()
    closeModal()
}
</script>

<div
    id="background"
    style="--display: {Modal.opened ? 'block' : 'none'}"
    />
    <main id="modal" style="--display: {Modal.opened ? 'block' : 'none'};
     --border: {Modal.content === "custom-token" ? "2px solid var(--primary)" : "2px solid #5865F2" }">
        <header>
            <div>
                <h3>Modal Title</h3>
            </div>
            <div>
                <!-- <div
                    on:click={closeModal}
                    >
                    <Icon
                        icon="ant-design:close-circle-outlined"
                        height={"1.4rem"}
                        color={isHovered ? "var(--primary)" : "lightgrey"}
                        />
                </div> -->
            </div>
        </header>
        <div class="content">
            {#if Modal.content === "custom-token" }
            <CustomTokenContent />
            {:else}
            <DiscordVerifContent
                localRoles={localRoles}
                serverId={serverId}
                roleName={roleName}
                on:child-blur={handleIdChange}
                on:role-change={handleRoleChange}
                on:message={handleMessage}
                />

                {/if}
                </div>

                <footer >
                    <div  class="cancel flex-align"
                        on:click={handleCancel}
                        >
                        CANCEL

                    </div>
                    <div  class="save flex-align"
                        on:click={handleSave}
                        >
                        SAVE

                    </div>
                </footer>
                </main>

<style>
.cancel {
    height: 2.4rem;
    width: 5rem;
    cursor: pointer;
    color: red
}

.cancel:hover {
    background-color: rgba(255, 0, 61, 0.1);
    border-radius: 6px;
}

.save {
    height: 2.4rem;
    width: 5rem;
    cursor: pointer;
    color: var(--border)
}

.save:hover {
    background-color: rgba(88, 101, 242, 0.1);
    border-radius: 6px;
}

header {
    display: flex;
    flex-direction: row;
    height: 12%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;
    border-bottom: var(--border);
}

.content {
    height: 76%;
}

section {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    height: 73%;
    width: 100%;
}

footer {
    color: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;
    height: 12%;
    width: 100%;
    border-top: var(--border);
    ;
}

#background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

#modal {
    display: var(--display);
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #141e26;
    /* filter: drop-shadow(0 0 20px #333); */
    height: 80%;
    width: 48%;
    border-radius: 20px;
    border: var(--border)

}
</style>
