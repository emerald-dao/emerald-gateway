<script>
import Icon from "@iconify/svelte"

export let localRoles
</script>

{#if localRoles === []}
<div>no roles</div>

{:else}
<ul >
    {#each localRoles as role }
    <li class="role-container">
        <div class="role">{role.label}
            <div class="icon-container">
                <Icon icon="ant-design:minus-circle-twotone" height="3rem" />
            </div>
        </div>
        
    </li>
    {/each}
</ul>
{/if}

<style>
    ul {
        list-style-type: none;
        width: 100%;
        display: flex;
        margin: 0;
        padding: 0;
    }
    
    li {
        margin: 0;
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
        width: 70%;
        border-radius: 50px;
        height: 100%;
    }
    </style>
    
