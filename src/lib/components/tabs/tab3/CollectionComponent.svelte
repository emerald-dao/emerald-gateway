<script>
    export let label;
    export let imgUrl;
</script>

<div class="collection-container-inactive">
    <img class="collection-logo" src={imgUrl} alt="logo" />

    <div class="label-inactive">
        {label}
    </div>
</div>

<style>
    img {
        max-width: 2.4rem;
        height: 100%;
        border-style: none;
        margin-left: -0.1rem;
        border-radius: 50px;
    }

    .label-inactive {
        width: 10rem;
        display: flex;
        justify-content: end;
    }

    .collection-container-inactive {
        position: relative;
        display: flex;
        width: 14rem;
        height: 70%;
        justify-content: space-between;
        border-radius: 50px;
        align-items: center;
        background-color: #252e37;
        font-weight: bold;
        padding-right: 0.8rem;
    }
</style>
