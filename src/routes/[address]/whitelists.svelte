<script>
    import CreateProject from "$lib/components/CreateProject.svelte";
    import ProjectsComponent from "$lib/components/projects/ProjectsComponent.svelte";
import MediaQuery from "../MediaQuery.svelte";

export let joined = false;
export let whitelists 
console.log("wl3",whitelists )
  
     
</script>

<svelte:head>
    <title>Whitelists</title>
</svelte:head>
    <div class="card-container" />
    <div style="display: flex;">
        <MediaQuery query="(min-width: 1281px)" let:matches>
            {#if matches}
            <ProjectsComponent joined={joined} whitelists={whitelists}   screenSize={"desktop"} />    
            {/if}
          </MediaQuery>
          <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
            {#if matches}
            <ProjectsComponent joined={joined} whitelists={whitelists} screenSize={"tablet"} />    
            {/if}
          </MediaQuery>
          <MediaQuery query="(max-width: 480px)" let:matches>
            {#if matches}
            <ProjectsComponent joined={joined} whitelists={whitelists} screenSize={"mobile"} />    
            {/if}
          </MediaQuery>
           
    </div>

<style>
</style>
