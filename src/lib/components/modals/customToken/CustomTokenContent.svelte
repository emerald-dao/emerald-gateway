<script>
    export let mobile
</script>

<div style="width: 100%; height:{mobile ? "80%": "70%"}; display:flex;
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