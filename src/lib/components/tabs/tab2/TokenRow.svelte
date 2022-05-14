<script>
  import TokenComponent from "./TokenComponent.svelte";
  import Checkbox from "../Checkbox.svelte";
  export let token;

  function selectToken() {
    token.selected = !token.selected;
  }
</script>

<li class="token mt-1">
  <TokenComponent {...token} />
  <Checkbox handleClick={selectToken} />
</li>

<style>

  .token {
    display: flex;
    height: 3.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
  }

  .token:hover {
    background-color: rgba(56, 232, 198, 0.1);
    cursor: pointer;
  }
</style>
