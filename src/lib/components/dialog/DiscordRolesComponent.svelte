<script>
    import {
        discordVerif
    } from "$lib/stores";

    export let roles

function handleSelection() {
    
}
    </script>
    
    <div
        style="width: 100%; height:70%; display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center">
        <div style="width:80%">
            <ul class="mt-2">
                {#each roles as role, i}
                <button class="role-container mt-1" >
                    <div class="role" on:click={() => handleSelection(i)}>
                        {role.label}
                       
                    </div>
                    
                  
                </button>
                {/each}
            </ul>
            
        </div>
    </div>
    
    <style>
button{
    background-color: #5865F2;
    border-color: #5865F2;
    cursor:default;
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
.role-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;
    background-color: rgba(88, 101, 242, 0.1);
    border: none;
}
.role-container:hover {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(88, 101, 242, 0.1);
    border: none;

    /* border-radius: 12px; */
}


    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 73%;
        width: 100%;
    }
    </style>
    