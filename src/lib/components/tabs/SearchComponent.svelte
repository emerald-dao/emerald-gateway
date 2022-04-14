<script>
import Icon from "@iconify/svelte"
export let searchTerm;
</script>

<header >
    <div class="search">
        <input
          type="search"
          title={"Search ..."}
          placeholder="Search ..."
          bind:value={searchTerm}
          on:input />
      </div>
    <!-- <div class="icon-container flex-align" >
        <Icon icon="akar-icons:search" />
    </div>
    <div class="mt-1" >
        <input
            type="text"
            id="search-field"
            placeholder="Search ..."
            autocomplete="off"
            bind:value={searchTerm}
            on:input
             />
    </div> -->
</header>

<style>

header {
    border-bottom: 0.5px solid var(--form-element-border-color);
    /* height:3.6rem; */
    margin: 0;
    padding: 0;

}
.input-container {
    display: flex;
    height: 1rem;
    widows: 100%;
    justify-content: center;
}

input {
    margin: 0;
    padding: 0;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

}

.search-input {
    height: 1rem;
    max-height: 0.5rem;
    padding: 0;
    margin: 0;
}

.icon-container {
    width: 2rem;
    height: 3.1rem;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border: 1px solid var(--form-element-border-color);

}

.searchbar {
    display: flex;
    align-items: center;
    width: 12rem;
    height: 2rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
}
</style>
