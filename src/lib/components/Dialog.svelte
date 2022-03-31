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

// export let dialog.opened;
let isHovered;
let tokensVal;
let collectionsVal;
let dialogValue
let selectedVal
let selectedCollectionVal
let amountInput
let activeTabValue

let borderColor
// this works here, but not in Sapper:

dialog.subscribe(val => {
    dialogValue = val
    console.log("dialogValue", dialogValue)
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
    <main id="dialog" style="--display: {dialogValue.opened ? 'block' : 'none'}; --border-color:{borderColor}">
        <header>
            <div>
                <h3>Dialog title</h3>
            </div>
            <div>
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
                      

                        <div style="width: 100%; height:70%; display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center">
                        <div style="width:80%">
                            <h3>Token Amount</h3>
                            {#if tokensVal[selectedVal].amount === 0 }
                            <input bind:this={amountInput} type="number" placeholder={0}  on:change={handleChange}  />
                            {:else}
                            <input bind:this={amountInput} type="number"  bind:value={$tokens[selectedVal].amount} on:change={handleChange}  />
                        
                            {/if}
                        </div>
                        <div style="width:80%">
                        </div>
                        </div>


                        <footer >
                            <div style="cursor: pointer;" on:click={handleClose}>
                                SAVE

                            </div>
                        </footer>
                        </main>

<style>
header {
    display: flex;
    flex-direction: row;
    height: 16%;
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
    height: 15%;
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
    height: 48%;
    width: 42%;
    border-radius: 20px;
    border: 2px solid var(--border-color);
}
</style>

<!-- <script>
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
    
    // export let dialog.opened;
    let isHovered;
    let tokensVal;
    let collectionsVal;
    let dialogValue
    let selectedVal
    let selectedCollectionVal
    let amountInput
    let activeTabValue
    // this works here, but not in Sapper:
    
    dialog.subscribe(val => {
        dialogValue = val
        console.log("dialogValue", dialogValue)
    })
    
    tokens.subscribe(val => tokensVal = val)
    // collections.subscribe(val => collectionsVal = val)
    selectedToken.subscribe(val => selectedVal = val)
    // selectedCollection.subscribe(val => selectedCollectionVal = val)
    activeTabVal.subscribe(val => activeTabValue = val)
    
    const handleChange = (e) => activeTabValue === 1 ?  $tokens[selectedVal].amount = e.target.value : $collections[selectedCollectionVal].amount = e.target.value
    
    function closeDialog() {
        $dialog.opened = false
        isHovered = false;
    }
    
    // const closeDialog = () => dialog.opened = false
    const handleClose = () => {
        // console.log("tokens", $tokens)
        console.log("activeTabValue", activeTabValue)
      switch (activeTabValue) {
          
        case 1:
        if (tokensVal[selectedVal].amount > 0) {
            closeDialog()
        } else {
            $tokens[selectedVal].selected = false
            closeDialog()
        }
          break;
    
        case 2:
        if (collectionsVal[selectedCollectionVal].amount > 0) {
            closeDialog()
        } else {
            console.log("its zero")
    
            $collections[selectedCollectionVal].selected = false
            closeDialog()
        }
          break;
      
        default:
          break;
      }
    
       
    
    }
    
    // onMount(() => )
    </script>
    
    
    
    <div
        id="background"
        style="--display: {$dialog.opened ? 'block' : 'none'}"
        on:click={handleClose}
        />
        <main id="dialog" style="--display: {$dialog.opened ? 'block' : 'none'};">
            <header>
                <div>
                    <h3>Dialog title</h3>
                </div>
                <div>
                    <div
                        on:click={handleClose}
                        on:pointerenter={() => (isHovered = !isHovered)}
                        on:pointerleave={() => (isHovered = !isHovered)}
                        >
                        <Icon
                            icon="ant-design:close-circle-outlined"
                            height={"1.4rem"}
                            color={isHovered ? "var(--primary)" : "lightgrey"}
                            />
                            </div>
                            </div>
                            </header>
                          
    
                            {#if activeTabValue === 1}
                            <div style="width: 100%; height:70%; display:flex;
                            flex-direction:column;
                            justify-content:center;
                            align-items:center">
                            <div style="width:80%">
                                <h3>Token Amount</h3>
                                {#if tokensVal[selectedVal].amount === 0 }
                                <input bind:this={amountInput} type="number" placeholder={0}  on:change={handleChange}  />
                                {:else}
                                <input bind:this={amountInput} type="number"  bind:value={$tokens[selectedVal].amount} on:change={handleChange}  />
                            
                                {/if}
                            </div>
                            <div style="width:80%">
                            </div>
                            </div>
                            {:else}
                            
                            <div style="width: 100%; height:70%; display:flex;
                            flex-direction:column;
                            justify-content:center;
                            align-items:center">
                            <div style="width:80%">
                                <h3>Collection Amount</h3>
                                {#if $collections[selectedCollectionVal].amount === 0 }
                                <input bind:this={amountInput} type="number" placeholder={0}  on:change={handleChange}  />
                                {:else}
                                <input bind:this={amountInput} type="number"  bind:value={$collections[selectedCollectionVal].amount} on:change={handleChange}  />
                            
                                {/if}
                            </div>
                            <div style="width:80%">
                            </div>
                            </div>
                            
                            {/if}
    
    
                            <footer >
                                <div style="cursor: pointer;" on:click={handleClose}>
                                    SAVE
    
                                </div>
                            </footer>
                            </main>
    
    <style>
    header {
        display: flex;
        flex-direction: row;
        height: 16%;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-right: 1rem;
        padding-left: 2rem;
    
        border-bottom: 0.5px solid var(--primary);
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
        color: var(--primary);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 2rem;
        height: 15%;
        width: 100%;
        border-top: 0.5px solid var(--primary);
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
        height: 48%;
        width: 42%;
        border-radius: 20px;
        border: 2px solid var(--primary);
    }
    </style>
     -->