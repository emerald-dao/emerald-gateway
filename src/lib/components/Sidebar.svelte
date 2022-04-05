<script>
	export let open = false
</script>

<!-- <aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open> -->
    <!-- <main id="background"     style="--display: {open ? 'block' : 'none'}"
    >
     
    </main> -->
    <article class="closed" class:open>
	
        <div style="">
            <button class="mt-1">Connect Wallet</button>
    
        </div>
        <div class="mt-1" >
            <a class="block" href="#about">Your Whitelists</a>
        </div >
    
    </article>  


<style>

#background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
	right: 0%;
	transition: right 0.3s ease-in-out; 
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
}
	.closed {
        position: absolute;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
		right: -100%;
		transition: right 0.3s ease-in-out;
	}
	
	.open {
		right: 0;
	}
</style>