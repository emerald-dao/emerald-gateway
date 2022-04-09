<script>
    import CreateProject from "$lib/components/CreateProject.svelte";
    import ProjectsComponent from "$lib/components/projects/ProjectsComponent.svelte";
import MediaQuery from "../MediaQuery.svelte";

  
     
</script>

<svelte:head>
    <title>Your Whitelists</title>
</svelte:head>
    <div class="card-container" />
    <div style="display: flex;">
        <MediaQuery query="(min-width: 1281px)" let:matches>
            {#if matches}
            <ProjectsComponent screenSize={"desktop"} />    
            {/if}
          </MediaQuery>
          <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
            {#if matches}
            <ProjectsComponent screenSize={"tablet"} />    
            {/if}
          </MediaQuery>
          <MediaQuery query="(max-width: 480px)" let:matches>
            {#if matches}
            <ProjectsComponent screenSize={"mobile"} />    
            {/if}
          </MediaQuery>
           
    </div>

<style>
</style>
