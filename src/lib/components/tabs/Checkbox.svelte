<script>
  export let handleClick;
  export let selected;
</script>

<input type="checkbox" class="checkbox" checked={selected} on:click={handleClick} />

<style>
  input {
    display: flex;
    justify-content: end;
    width: 25px;
    height: 25px;
    padding-right: 1rem;
  }
</style>
