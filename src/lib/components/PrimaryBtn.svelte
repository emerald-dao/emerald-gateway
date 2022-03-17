<script>

export let label
export let onPressed

</script>

<button class="primary-btn" on:click={onPressed}>
    {label}
</button>

<style>
  .primary-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 1.5rem;
    background-color: transparent;
    /* background-color: var(--primary); */
    border-radius: 50px;
    border: 2px solid var(--primary);
    color: var(--primary)
  }
  .primary-btn:hover{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 1.5rem;
    background-color: var(--primary);
    /* background-color: var(--primary); */
    border-radius: 50px;
    border: 2px solid var(--primary);
    color: #141E26
  }
</style>
