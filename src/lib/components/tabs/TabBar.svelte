<script>
  import Icon from "@iconify/svelte";
  import EmeraldIdIcon from "$lib/components/tabs/EmeraldIdIcon.svelte";
  import { activeTabVal, tabs } from "$lib/stores";

  const autoScroll = (target) => {
    const el = document.querySelector(`#tab${$activeTabVal}`);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleAction = (action) => {
    if (action === "increment" && !($activeTabVal >= 6)) {
      $activeTabVal = $activeTabVal + 1;
    } else if (action === "decrement" && !($activeTabVal <= 0)) {
      $activeTabVal = $activeTabVal - 1;
    }
    autoScroll();
  };

  const handleClick = (tabValue) => {
    $activeTabVal = tabValue;
  }
  
</script>

<main class="main-container">
  <!-- TabBar -->
  <div on:click={() => handleAction("decrement")}>
    <Icon
      class="chevron-icon"
      icon="akar-icons:circle-chevron-left"
      height="36"
    />
  </div>

  <ul>
    {#each $tabs as item, i}
      <li
        style="--width:{'25%'}"
        id={`tab${i}`}
        class={$activeTabVal === item.value ? "active" : "inactive-tab"}
        on:click={() => handleClick(item.value)}
      >
        {#if i === 3}
          <div class="flex-align">
            <EmeraldIdIcon
              color={$activeTabVal === 3 ? "var(--primary)" : "white"}
            />
          </div>
        {:else}
          <Icon
            icon={item.icon}
            height="30"
            color={$activeTabVal === item.value
              ? "var(--primary)"
              : "lightgrey"}
          />
        {/if}
      </li>
    {/each}
  </ul>
  <div on:click={() => handleAction("increment")}>
    <Icon
      class="chevron-icon"
      icon="akar-icons:circle-chevron-right"
      height="36"
    />
  </div>
</main>

<style>
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 70%;
    width: 70%;
    max-width: 70%;
    overflow: scroll;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.08);
    list-style: none;
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  li {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--width);
    height: 100%;
    min-width: var(--width);
    cursor: pointer;
  }

  li.active {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #495057;
    background-color: #fff;
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
    background-color: rgba(56, 232, 198, 0.1);
    margin: 0;
    padding: 0;
    width: var(--width);
    height: 100%;
    min-width: var(--width);
  }

  .inactive-tab:hover {
    background: var(--form-element-border-color);
  }

  .main-container {
    margin-top: -6%;
    height: 3rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
