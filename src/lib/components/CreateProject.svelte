<script>
import Icon from "@iconify/svelte"
</script>

<a href="/create" >
    <div  class="card project-card flex-align">

        <Icon  icon="ant-design:plus-circle-outlined"
            height={"3.6rem"}
            color={"lightgrey"}
            />
            <div>
                <h1>
                    Add Whitelist
                </h1>

               
            </div>

            </div>
            </a>

<style>
a{
    text-decoration: none;
}

p {
    font-size: medium;
}

.project-card {
    border-radius: 12px;
    background-color: #252E37;
    height: 15rem;
    width: 11.6rem;
}

.project-card:hover {
    background-color: rgba(56, 232, 198, 0.03);
    cursor: pointer;
}
</style>
