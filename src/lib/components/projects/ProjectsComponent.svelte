<script>
import {
    projects
} from "$lib/stores";

let Projects;

projects.subscribe(val => Projects = val)
</script>

<div class="projects-container">
        {#each Projects as project }
            <a href="projectDetails" >
                <div  class="card project-card">
                    <div>
                        <h1>
                            {project.name}
                        </h1>
                      
                    </div>

                    <div>
                        Entries: 0
                    </div>

                </div>
            </a>
        {/each}

</div>

<style>
.projects-container {
    display: flex;
    flex-wrap: true;
    max-width: 100%;
}

a {
    text-decoration: none;
}

p {
    font-size: medium;
}

.project-card {
    border-radius: 12px;
    background-color: #252E37;
    height: 16rem;
}

.project-card:hover {
    background-color: rgba(56, 232, 198, 0.03);
    cursor: pointer;
}
</style>
