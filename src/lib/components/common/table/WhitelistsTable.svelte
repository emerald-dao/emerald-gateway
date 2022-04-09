<script>
    //Row component is optional and only serves to render odd/even row, you can use <tr> instead.
      //Sort component is optional
      
      import Table, { Row, Sort } from "./Table.svelte";
      import { sortNumber, sortString } from "./sorting.js";
      import { formatter } from "$lib/flow/utils";
      import { page } from "$app/stores";
import ProjectsComponent from "$lib/components/projects/ProjectsComponent.svelte";
import Projects from "../../../../routes/[address]/whitelists.svelte";

      
      export let whitelists;
      let rows = [
          {id:0, name:"n1", description:"t1"},
          {id:0, name:"n1", description:"t1"},
          {id:0, name:"n1", description:"t1"},
        ];
      
      console.log('whitelistsTable:', whitelists);
      
      let pageCount = 0; //first page
      let pageSize = 25; 
      
      function onCellClick(row) {
        return;
      }
      
      function onSortNumber(event) {
        console.log(event.detail);
        event.detail.rows = sortNumber(
        event.detail.rows,
        event.detail.dir,
        event.detail.key
        );
      }
      
      function onSortString(event) {
        console.log(event.detail);
        event.detail.rows = sortString(
        event.detail.rows,
        event.detail.dir,
        event.detail.key
        );
      }
    </script>
    <!-- <article> -->
        <Table {pageCount} {pageSize} {rows} let:rows={rows2} labels={{ empty: "This account has not created any whitelists.", loading: "Loading whitelists..."}} >
            <thead slot="head">
             
            </thead>
            <tbody>
                <Projects />
            </tbody>
          </Table>
    <!-- </article> -->
   
    
    <style>
        .project-card {
            
    border-radius: 12px;
    background-color: #252e37;
    height: var(--height);
    width: 50%;
}

.project-card:hover {
    background-color: rgba(152, 189, 182, 0.1);
    cursor: pointer;
}
      .table-image {
        max-width: 75px;
        height:auto;
      }
      
      .event-description {
        line-height: 1;
        opacity: 0.6;
        font-size: 0.6rem;
        color: var(--color);
      }
      
      td:hover {
        opacity:0.8;
      }
      
    </style>