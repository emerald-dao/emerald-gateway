<script>
export let imgUrl
export let label
export let amount
export let i
</script>

<div
    style="--width:{'30%'}; --margin-left:{i === 0
    ? '0rem'
    : '0.8rem'}"
    class={"token-container"}
    >
    <div
        style="display:flex; justify-content:space-between; align-items:center; width: 2.6rem; height:2.6rem; "
        >
        <img
            style="height:100%; width:2.6rem;   border-radius: 50px; object-fit:cover"
            src={imgUrl}
            alt="logo"
            />
    </div>
    <div style="margin-right: 1rem;">
        {label}
    </div>
    <div class="amount-container">
        {parseFloat(amount).toFixed(2)}
    </div>
</div>

                <style>
.token-container {
    display: flex;
    width: var(--width);
    height: 70%;
    justify-content: space-between;
    border-radius: 50px;
    align-items: center;
    background-color: #252e37;
    font-weight: bold;
    margin-left: var(--margin-left);
}

.amount-container {
    color: #252e37;
    font-weight: bold;
    display: flex;
    height: 2.6rem;
    width: 36%;
    justify-content: center;
    align-items: center;
    background: white;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}
</style>
