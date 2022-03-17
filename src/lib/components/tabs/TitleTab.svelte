<script>
    // import Icon from "@iconify/svelte";
  export let projectName

</script>

<main>
  <!-- {selectedId} -->
  <header>
    <h5 class="title">TAB 1</h5>
    <p>Something about Tab 1</p>
  </header>

  <section class="name-input-container">
    <h6>Name</h6>
    <input type="text" value={projectName} on:change={handleChange} />
  </section>

</main>

<style>
  .name-input-container{
    height: 40%;
    width: 100%;
  }

  h5{
    margin: 0;
    padding: 0;
  }

  header{
    height:10%;
  }

  .title {
    letter-spacing: 3px;
  }
</style>
