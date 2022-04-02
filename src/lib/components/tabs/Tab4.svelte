<script>
import Icon from "@iconify/svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"
import {
    emeraldIdVerif
} from '../../stores';
// import {
//     handleEvent
// } from "./utils"
import TabHeader from "./TabHeader.svelte";

export let emeraldIdVal
emeraldIdVerif.subscribe(val => emeraldIdVal = val)
const handleEvent = (e) => {
    $emeraldIdVerif.active = !emeraldIdVal.active
}
</script>

<div >
    <TabHeader title={"Emerald ID"} subtitle={"Something about Emerald ID"} />
    <button  class={emeraldIdVal.active ? "flex-align" : "outline mb-1 flex-align"}
    on:click={handleEvent}
    >
    Require
    <img class="logo" src="https://res.cloudinary.com/do4mactw0/image/upload/v1648233132/Emerald_Bot_Logo_olre0f.svg" alt="emeraldid"  />
    </button>
</div>

    
    <style>
.logo {
    object-fit: cover;
    height: 2rem;
    margin-left: 0.5rem;
}
</style>
