<script>
    import Icon from "@iconify/svelte"

    export let servers
</script>

    <ul >
        {#each servers as server }
            <li class="role-container">

                <div class="role">{server.label}</div>
                <div class="icon-container">
                    <Icon icon="ant-design:minus-circle-twotone" />
                </div>
            </li>
        {/each}
    </ul>
   

<style>
    ul{
        list-style-type: none;
        width: 100%;
    }

    li{
        display: flex;
        height: 3rem;
    }

    .role-container{
        display: flex;
        width: 80%;
    }
    .role{
        display: flex;
        align-items: center;
        padding-left: 1rem;
        background: #252E37;
        width: 80%;
        border-radius: 9px;
        height: 100%;

    }
</style>