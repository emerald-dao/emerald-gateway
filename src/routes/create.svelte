


<script>
import CreateProjectDetails from '$lib/components/CreateProjectDetails.svelte';
import MediaQuery from './MediaQuery.svelte';

import {
    PAGE_TITLE_EXTENSION
} from '$lib/constants';

</script>

<svelte:head>
    <title>Create Project {PAGE_TITLE_EXTENSION}</title>
    </svelte:head>


<MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <CreateProjectDetails screenSize="desktop" />
        {/if}
    </MediaQuery>
    <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
        {#if matches}
        <CreateProjectDetails screenSize="tablet" />
        {/if}
    </MediaQuery>
    <MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
        <CreateProjectDetails screenSize="mobile" />
        {/if}
    </MediaQuery>
    