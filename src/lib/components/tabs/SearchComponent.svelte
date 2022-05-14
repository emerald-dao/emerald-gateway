<script>
    import Icon from "@iconify/svelte";
    export let searchTerm;
</script>

<header>
    <div class="search">
        <input
            type="search"
            title={"Search ..."}
            placeholder="Search ..."
            id="no-margin"
            bind:value={searchTerm}
            on:input
        />
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
    #no-margin {
        margin: 0px;
        border: none;
    }

    header {
        border-bottom: 0.5px solid var(--form-element-border-color);
        /* height:3.6rem; */
        margin: 0;
        padding: 0;
    }

    input {
        margin: 0;
        padding: 0;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
</style>
