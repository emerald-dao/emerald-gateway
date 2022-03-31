<script>
import {
    tokens
} from "$lib/stores";

export let selectedVal
let amountInput
let tokensVal

tokens.subscribe(val => tokensVal = val)

const handleChange = (e) => $tokens[selectedVal].amount = e.target.value
</script>

<div
    style="width: 100%; height:70%; display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center">
    <div style="width:80%">
        <!-- <h3>Token Amount</h3> -->
        {#if tokensVal[selectedVal].amount === 0 }
        <input bind:this={amountInput} type="number" placeholder={0}  on:change={handleChange}  />
        {:else}
        <input bind:this={amountInput} type="number"  bind:value={$tokens[selectedVal].amount} on:change={handleChange}  />

        {/if}
    </div>
</div>

<style>
section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 73%;
    width: 100%;
}
</style>
