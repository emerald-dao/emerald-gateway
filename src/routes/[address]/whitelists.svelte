<script>
  import ProjectsComponent from "$lib/components/projects/ProjectsComponent.svelte";

  export let joined = false;
  export let whitelists;
  console.log("wl3", whitelists);
</script>

<svelte:head>
  <title>Whitelists</title>
</svelte:head>
<div class="card-container" />
<div style="display: flex;">
  <ProjectsComponent {joined} {whitelists} screenSize={"desktop"} />
</div>

<style>
</style>
