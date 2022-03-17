<script>
    import { createEventDispatcher } from 'svelte';
    import { modal, tokens } from "../stores"
    import VerticalSpace from "../components/VerticalSpace.svelte"
    import Icon from "@iconify/svelte"

    export let isOpenDialog;
    export let id;
    let isHovered;
    let tokensVal;
    let amount = 0

    tokens.subscribe(val => tokensVal = val)


    const handleChange = (e) => $tokens[id].amount = e.target.value  
    

    const dispatch = createEventDispatcher();


    function closeDialog() {
    isOpenDialog = false;
    isHovered = false;
    dispatch('closeDialog', { isOpenDialog });
}

const handleClick = () => isOpenDialog = false



</script>

<div
id="background"
style="--display: {isOpenDialog ? 'block' : 'none'}"
on:click={closeDialog}
/>
<main id="dialog" style="--display: {isOpenDialog ? 'block' : 'none'};">
<header>
<div>
  <h3>Dialog title</h3>
</div>
<div>
  <!-- svelte-ignore missing-declaration -->
  <div
    on:click={handleClick}
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
  <input type="number" placeholder="0" value={amount ? amount : 0} on:change={handleChange}  />
</div>
<div style="width:80%">
</div>
</div>
<footer >
<div style="cursor: pointer;" on:click={handleClick}>
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
