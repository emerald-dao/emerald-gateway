<script>
        import { createEventDispatcher } from 'svelte';
        import { modal} from "$lib/stores"
        import VerticalSpace from "../components/VerticalSpace.svelte"
        import Icon from "@iconify/svelte"

        let Modal

        modal.subscribe(val => Modal = val)

        // export let Modal.opened;
        let isHovered;

        // const dispatch = createEventDispatcher();


        function closeModal() {
          console.log("closing")
        // Modal.opened = false;
        // isHovered = false;
        $modal.opened = false
        // dispatch('closeModal', { Modal.opened });
    }


</script>

<div
  id="background"
  style="--display: {Modal.opened ? 'block' : 'none'}"
  on:click={closeModal}
/>
<main id="modal" style="--display: {Modal.opened ? 'block' : 'none'};">
  <header>
    <div>
      <h3>Modal Title</h3>
    </div>
    <div>
      <!-- <div
      on:click={closeModal}
      on:pointerenter={() => (isHovered = !isHovered)}
        on:pointerleave={() => (isHovered = !isHovered)}
      > -->
      <div
      on:click={closeModal}
      >
        <Icon
          icon="ant-design:close-circle-outlined"
          height={"1.4rem"}
          color={isHovered ? "var(--primary)" : "lightgrey"}
        />
      </div>
    </div>
  </header>
  <div style="width: 100%; height:70%; display:flex;
  flex-direction:column; 
  justify-content:center;
  align-items:center">
    <div style="width:80%">
      <h3 class="mt-1">Input 1</h3>
      <input placeholder="Input 1" />
    </div>
    <!-- <VerticalSpace value="1rem" /> -->
    <div style="width:80%">
      <h3 class="mt-0">Input 2</h3>
      <input placeholder="Input 2" />
    </div>
  </div>
  <footer >
    <div style="cursor: pointer;"
    on:click={closeModal}
    >
    ACTION 2

    </div>
  </footer>
</main>

<style>
  header {
    display: flex;
    flex-direction: row;
    height: 14%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;

    border-bottom: 2px solid var(--form-element-border-color);
  }

  section {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    height: 73%;
    width: 100%;
  }

  footer {
    color: var(--primary);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2rem;
    height: 15%;
    width: 100%;
    border-top: 2px solid var(--form-element-border-color);
  }

  #background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }

  #modal {
    display: var(--display);
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #141e26;
    filter: drop-shadow(0 0 20px #333);
    height: 60%;
    width: 42%;
    border-radius: 20px;
    border: 2px solid var(--form-element-border-color);
  }
</style>
