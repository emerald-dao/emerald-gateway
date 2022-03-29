<script>
    import { twitterVerif } from "$lib/stores"

    let TwitterVerif;
    let selectedId 
    let inputVal
    twitterVerif.subscribe(val => {
        TwitterVerif = val
        selectedId = TwitterVerif.selectedId
        inputVal = TwitterVerif.accounts[selectedId]?.label
    })

    function handleInput(e) {
        $twitterVerif.accounts[selectedId].label = e.target.value
    }
    
 </script>


<div style="width: 100%; height:70%; display:flex;
flex-direction:column;
justify-content:center;
align-items:center">
<div style="width:80%">
    <h3 class="mt-1">Account Handle</h3>
    <input   value={inputVal} on:input={handleInput} />
</div>

</div>

<style>
    input:focus{
        border-color: #1DA1F2
    }
</style>