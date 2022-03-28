<script>
import Icon from "@iconify/svelte"

export let localRoles
export let dispatch

function handleRemoval(idx) {
    dispatch("message", {
        action: "removal",
        data: idx
    })
}

</script>

{#if localRoles === []}
<div>no roles</div>

{:else}
<ul >
    {#each localRoles as role, i}
    <li class="role-container">
        <div class="role">{role.label}
            <div class="icon-container" on:click={() => handleRemoval(i)}>
                <Icon icon="ant-design:minus-circle-twotone" height="3rem" />
            </div>
        </div>
        
    </li>
    {/each}
</ul>
{/if}

<style>

    .icon-container{
        height:3rem;
    }
    .icon-container:hover{
        color: red;
        height: 3rem;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        width: 99.5%;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
    
    li {
        margin-top: 0.3rem;
        padding: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;

        height: 3rem;
    }
    
    /* .role-container {
        display: flex;
        width: 80%;
    } */
    
    .role {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
        background: #252E37;
        width: 100%;
        border-radius: 50px;
        height: 100%;
    }
    </style>
    
