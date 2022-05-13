<script>
  import TokenComponent from "./TokenComponent.svelte";
  import { tokens, dialog, selectedToken } from "$lib/stores";

  export let token;

  function openDialog() {
    $dialog.title = "Token Amount";
    $dialog.opened = true;
  }

  const handleSelection = (id) => {
    // update token
    $selectedToken = id;
    $tokens[id].selected = !$tokens[id].selected;

    // check store state
    const tokenAmount = $tokens[id].amount;
    if (tokenAmount === 0) {
      openDialog();
    } else {
      //reset token amount and selection state
      $tokens[id].amount = 0;
      $tokens[id].selected = false;
    }
  };
</script>

<li class="token mt-1">
  <TokenComponent {...token} />
  <input
    type="checkbox"
    on:click={() => handleSelection(token.id)}
    class="checkbox"
  />
</li>

<style>
  .checkbox {
    display: flex;
    justify-content: end;
    width: 25px;
    height: 25px;
    padding-right: 1rem;
  }

  .token {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
  }

  .token:hover {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(56, 232, 198, 0.1);
    cursor: pointer;
    padding-left: 3%;
  }
</style>
