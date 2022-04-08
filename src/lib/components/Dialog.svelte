<script>
import {
    onMount
} from 'svelte';
import {
    dialog,
    tokens,
    selectedToken,
    collections,
    selectedCollection,
    activeTabVal
} from "../stores"
import VerticalSpace from "../components/VerticalSpace.svelte"
import Icon from "@iconify/svelte"
import AmountComponent from './dialog/AmountComponent.svelte';
import DiscordServersComponent from './dialog/DiscordServersComponent.svelte';
import TwitterAccountsComponent from './dialog/TwitterAccountsComponent.svelte';

// export let dialog.opened;
let isHovered;
let tokensVal;
let collectionsVal;
let dialogValue
let selectedVal
let selectedCollectionVal
let amountInput
let activeTabValue
export let mobile
const  width = mobile ? "80%" : "42%"
const  height = mobile ? "32%" : "46%"
const  bodyHeight = mobile ? "60%" : "64%"
const  headerHeight = mobile ? "20%" : "16%"
const  footerHeight = mobile ? "20%" : "20%"
const  saveWidth = mobile ? "32%" : "56%"

let borderColor
// this works here, but not in Sapper:

dialog.subscribe(val => {
    dialogValue = val
    if(dialogValue.title === "Discord Servers") {
    borderColor = "#5865F2"
} else if(dialogValue.title === "Twitter Accounts") {
    borderColor = "#1DA1F2"
} else {
    borderColor = "var(--primary)"
}
})

tokens.subscribe(val => tokensVal = val)
selectedToken.subscribe(val => selectedVal = val)
activeTabVal.subscribe(val => activeTabValue = val)



const handleChange = (e) =>  $tokens[selectedVal].amount = e.target.value

function closeDialog() {
    $dialog.opened = false
    isHovered = false;
}

const handleClose = () => {
      
    if (tokensVal[selectedVal].amount > 0) {
        closeDialog()
    } else {
        $tokens[selectedVal].selected = false
        closeDialog()
    }

}



</script>



<div
    id="background"
    style="--display: {dialogValue.opened ? 'block' : 'none'}"
    on:click={handleClose}
    />
    <main id="dialog" style="--display: {dialogValue.opened ? 'block' : 'none'}; --border-color:{borderColor}; --width:{width}; --height:{height}">
        <header style="height: {headerHeight};">
            <div>
                <h3>{dialogValue.title}</h3>
            </div>
            <div >
                <div
                    on:click={handleClose}
                    on:pointerenter={() => (isHovered = !isHovered)}
                    on:pointerleave={() => (isHovered = !isHovered)}
                    >
                    <Icon
                        icon="ant-design:close-circle-outlined"
                        height={"1.4rem"}
                        color={isHovered ? borderColor: "lightgrey"}
                        />
                        </div>
                        </div>
                        </header>
                       <div style="height: {bodyHeight};">
                        {#if dialogValue.title === "Discord Servers"}
                        <DiscordServersComponent />
                {:else if dialogValue.title === "Twitter Accounts"}
                    <TwitterAccountsComponent />
                {:else}
                <AmountComponent  selectedVal={selectedVal}/>

                {/if}
                       </div>
                       

                       
                        <div style="width:80%">
                        </div>

                    {#if dialogValue.title === "Token Amount"  }
                    <footer class="flex-align" style="height: {footerHeight};" >
                        <div  style="cursor: pointer;" on:click={handleClose}>
                            SAVE
                        </div>
                    </footer>
                    {/if}
                     
                        </main>

<style>
header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    padding-left: 2rem;

    border-bottom: 0.5px solid var(--border-color);
}

section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 73%;
    width: 100%;
}

footer {
    color: var(--border-color);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2rem;
    width: 100%;
    border-top: 0.5px solid var(--border-color);
}

#background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
}

#dialog {
    display: var(--display);
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #141e26;
    height: var(--height);
    width: var(--width);
    border-radius: 20px;
    border: 2px solid var(--border-color);
}
</style>

