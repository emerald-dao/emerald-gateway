<script>
  export let handleClick;
</script>

<input type="checkbox" class="checkbox" on:click={handleClick} />

<style>
  input {
    display: flex;
    justify-content: end;
    width: 25px;
    height: 25px;
    padding-right: 1rem;
  }
</style>
