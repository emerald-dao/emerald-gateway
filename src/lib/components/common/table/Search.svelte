<script context="module">
  let globalLabels;

  export function setLabels(labels) {
    globalLabels = labels;
  }
</script>

<script>
  import { createEventDispatcher, getContext } from "svelte";
  const dispatch = createEventDispatcher();
  const stateContext = getContext("state");

  export let filter = (w, text, index) => {
    const name = w.variables.name
        text = text.toLowerCase();
   const matches = name.indexOf(text) > -1
    return  matches 

    // // for (let i in wlName) {
    // //   console.log("wlName[i]", wlName[i].toString()
    // //       .toLowerCase().indexOf(text))
    // //   if (
    // //     wlName[i]
    // //       .toString()
    // //       .toLowerCase()
    // //       .indexOf(text) > -1
    // //   ) {
    // //     return true;
    // //   }
    // // }
    // // return false;
  };
  export let index = -1;
  export let text = "";

  export let labels = {
    placeholder: "Search",
    ...globalLabels
  };

  async function onSearch(event) {
    const state = stateContext.getState();
    const detail = {
      originalEvent: event,
      filter,
      index,
      text,
      page: state.page,
      pageIndex: state.pageIndex,
      pageSize: state.pageSize,
      whitelists: state.filteredWhitelists
    };
    dispatch("search", detail);

    if (detail.preventDefault !== true) {
      if (detail.text.length === 0) {
        stateContext.setWhitelists(state.whitelists);
      } else {
        stateContext.setWhitelists(
          //  detail.whitelists.filter(function (w) {
          //   const name = w.variables.name
          //   const newWhitelists = name.indexOf(text) > -1

          //    return  newWhitelists 
          // })
          detail.whitelists.filter(w => detail.filter(w, detail.text, index))
        );
      }
      stateContext.setPage(0, 0);
    } else {
      stateContext.setWhitelists(detail.whitelists);
    }
  }
</script>
<!-- 
<style>
  .search {
    width: 33.3%;
    float: right;
  }
  .search input {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 5px 3px;
  }

  @media screen and (max-width: 767px) {
    .search {
      width: 100%;
    }
  }
</style> -->

<div class="search">
  <input
    type="search"
    title={labels.placeholder}
    placeholder={labels.placeholder}
    bind:value={text}
    on:keyup={onSearch} />
</div>
