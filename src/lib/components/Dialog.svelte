<script>
    import {  onMount } from 'svelte';
    import { dialog, tokens, selectedToken } from "../stores"
    import VerticalSpace from "../components/VerticalSpace.svelte"
    import Icon from "@iconify/svelte"
import Dialog from './dialog.svelte';

    // export let dialog.opened;
    let isHovered;
    let tokensVal;
    let dialogValue
    let selectedVal
	let amountInput
	// this works here, but not in Sapper:


    dialog.subscribe(val => {
      dialogValue = val
      console.log("dialogValue", dialogValue )
    })

    tokens.subscribe(val => tokensVal = val)
    selectedToken.subscribe(val => selectedVal = val)

    
    const handleChange = (e) => $tokens[selectedVal].amount = e.target.value  
    



    function closeDialog() {
      $dialog.opened = false
    isHovered = false;

    
}

// const closeDialog = () => dialog.opened = false
  const handleClose = () => {
    console.log("tokens", $tokens)
    if(tokensVal[selectedVal].amount > 0) {
      closeDialog()
    } else {
      $tokens[selectedVal].selected = false
    closeDialog()
    }

   
  }

  // onMount(() => )


</script>

<div
id="background"
style="--display: {$dialog.opened ? 'block' : 'none'}"
on:click={closeDialog}
/>
<main id="dialog" style="--display: {$dialog.opened ? 'block' : 'none'};">
<header>
<div>
  <h3>Dialog title</h3>
</div>
<div>
  <!-- svelte-ignore missing-declaration -->
  <div
    on:click={closeDialog}
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
<div style="width: 100%; height:70%; display:flex;
  flex-direction:column; 
  justify-content:center;
  align-items:center">
  <div style="width:80%">
  <h3>Amount</h3>
  {#if $tokens[selectedVal].amount === 0 }
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
ACTION 2

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

border-bottom: 2px solid var(--form-element-border-color);
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
border-top: 2px solid var(--form-element-border-color);
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
filter: drop-shadow(0 0 20px #333);
height: 48%;
width: 42%;
border-radius: 20px;
border: 2px solid var(--form-element-border-color);
}
</style>
