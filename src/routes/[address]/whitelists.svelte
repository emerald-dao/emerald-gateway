<script>
    import CreateProject from "$lib/components/CreateProject.svelte";
    import ProjectsComponent from "$lib/components/projects/ProjectsComponent.svelte";
</script>

<svelte:head>
    <title>Your Projects</title>
</svelte:head>
<article>
    <h2>Your Projects</h2>
    <div class="card-container" />
    <div style="display: flex;">
        <CreateProject />
        <ProjectsComponent />
    </div>
</article>

<style>
</style>
