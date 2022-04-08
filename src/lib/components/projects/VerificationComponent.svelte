<script>
import {
    dialog
} from "$lib/stores";

export let selected
export let label
export let imgUrl
export let id

let color
let details = null

if (label === "Discord") {
    color = "#5865F2"
} else if (label === "Twitter") {
    color = "#1DA1F2"
} else {
    color = "var(--primary)"
}

if (label === "Discord" || label === "Twitter") {
    details = true
} else {
    details = false
}

function handleSeeDetails() {
    if (label === "Discord") {
        $dialog.title = "Discord Servers"
    } else {
        $dialog.title = "Twitter Accounts"
    }
    $dialog.opened = true
}
</script>

<div
    style="--border:{color}; --width:{details ? "16rem" : "9rem"};  height:2.6rem; "
    class={"verification-container-inactive"}

    >
    <div style="display: flex; height:100%; align-items: center; width:{details ? "60%" : "100%"} ">
        <div
            style="display:flex; justify-content:center; align-items:center; width: 2.6rem; height:100%; "
            >
            <img
                src={imgUrl}
                alt="logo"
                />
        </div>
        <!-- <div class={"label-inactive"} -->
        <div style="color: white; margin-left:0.3rem; width:100%"
            >
            {label}
        </div>
    </div>

    {#if details}
    <div class="flex-align see-details-container" on:click={handleSeeDetails} >
        See details
    </div>
    {/if}

</div>

<style>
.see-details-container {

    padding-left: 0.7rem;
    width: 50%;
    height: 100%;
    border-left: 2px solid blue;
    border-left-color: var(--border);
}

.see-details-container:hover {
    color: var(--border);
    cursor: pointer;
}

img {
    max-width: 2.4rem;
    /* min-width: 2.4rem; */
    height: 100%;
    border-style: none;
    margin-left: -0.1rem;
    border-radius: 50px;
}

.label-active {
    margin-left: 2rem;
    width: 10rem;
    display: flex;
    justify-content: end;
}

.label-inactive {
    /* margin-left: 2rem;
    width: 12rem; */
    width: 10rem;
    display: flex;
    justify-content: end;

}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    border-radius: 100px;
    /* position: absolute; */
    top: -0.6rem;
    right: 0px;
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.2rem;
}

.verification-container-active {
    /* position: relative; */
    display: flex;
    width: 16rem;
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252E37;
    font-weight: bold;

}

.verification-container-inactive {
    /* position: relative; */
    z-index: 92;
    display: flex;
    width: var(--width);
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    font-weight: bold;
    padding-right: 0.8rem;
    border: 2px solid var(--border);
    background-color: #252E37;

}
</style>
