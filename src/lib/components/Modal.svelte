<script>
import {
    modal,
    discordVerif
} from "$lib/stores"
import VerticalSpace from "../components/VerticalSpace.svelte"
import Icon from "@iconify/svelte"
import DiscordVerifContent from './discordModal/DiscordVerifContent.svelte';
import CustomTokenContent from './modals/customToken/CustomTokenContent.svelte';
import TwitterVerifContent from "./tabs/TwitterVerifContent.svelte";

let Modal
let DiscordVerif

let localRoles = []
let serverId = ""
let roleName = ""
export let mobile
const modalWidth = mobile ? "80%" : "42%"
const modalHeight = mobile ? "50%" : "60%"
const headerHeight = mobile ? "15%" : "12%"
const bodyHeight = mobile ? "72%" : "76%"
const footerHeight = mobile ? "12%" : "12%"
const saveWidth = mobile ? "4rem" : "4rem"


modal.subscribe(val => Modal = val)
discordVerif.subscribe(val => DiscordVerif = val)

function closeModal() {
    $modal.opened = false
}

function addServer() {

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
     --modalWidth:{modalWidth};
     --modalHeight:{modalHeight};
     --border: {Modal.content === "custom-token" ? "2px solid var(--primary)" : Modal.content !== "twitter" ? "2px solid #5865F2" : "2px solid #1DA1F2" };
     --color: {Modal.content === "custom-token" ? "var(--primary)" : Modal.content !== "twitter" ? "#5865F2" : "#1DA1F2" };
     --bg: {Modal.content === "custom-token" ? "rgba(56, 232, 198, 0.1)" : Modal.content !== "twitter" ? "rgba(88, 101, 242, 0.1)" : "rgba(29, 161, 242, 0.1)" };
     ">
        <header style="height: {headerHeight};">
            <div>
                <h3>{Modal.content}</h3>
            </div>
            <div>
            </div>
        </header>
        <div style="height:{bodyHeight}">
            {#if Modal.content === "custom-token" }
            <CustomTokenContent mobile={mobile} />
            {:else if Modal.content === "twitter"}   
            <TwitterVerifContent />
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

                <footer style="height: {footerHeight};" >
                    <div  class="cancel flex-align"
                        on:click={handleCancel}
                        >
                        CANCEL

                    </div>
                    <div style="height: 2.4rem;
                    width: {saveWidth};
                    cursor: pointer;
                    color: var(--color)"  class=" flex-align"
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
    color: var(--color)
}

.save:hover {
    /* background-color: rgba(88, 101, 242, 0.1); */
    background-color: var(--bg);
    border-radius: 6px;
    color: var(--color)
}

header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;
    border-bottom: var(--border);
}



footer {
    color: var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;
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
    height: var(--modalHeight);
    width: var(--modalWidth);
    border-radius: 20px;
    border: var(--border)

}
</style>
