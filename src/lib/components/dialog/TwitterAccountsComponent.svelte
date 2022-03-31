<script>
import {
    tokens,
    twitterVerif
} from "$lib/stores";

export let selectedVal
let amountInput
let tokensVal
let accounts
let TwitterVerif

tokens.subscribe(val => tokensVal = val)
twitterVerif.subscribe(val => {
    accounts = val.accounts
})

const handleChange = (e) => $tokens[selectedVal].amount = e.target.value

function handleSelection() {

}
</script>

<div
    style="width: 100%; height:70%; display:flex;
    flex-direction:column;
    overflow-y:auto;
    align-items:center">
    <div style="width:80%">
        <ul class="mt-2">
            {#each accounts as account, i}
            <button class="account-container" >
                <div class="account" on:click={() => handleSelection(i)}>
                   <span style="color: #1DA1F2;">@</span> {account.label}
                </div>
            </button>
            {/each}
        </ul>

    </div>
</div>

    
    <style>
button {
    background-color: rgba(29 ,161, 242, 0.1);
    border: none;
    cursor: default;
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

.account-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;

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
