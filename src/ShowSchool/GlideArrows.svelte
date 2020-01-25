<script>
    import FaAngleLeft from 'svelte-icons/fa/FaAngleLeft.svelte';
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
</script>


<div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--prev" data-glide-dir="<"><div class="icon"><FaAngleLeft/></div></button>
    <button class="glide__arrow glide__arrow--next" data-glide-dir=">"><div class="icon"><FaAngleRight/></div></button>
</div>

<style>
    .glide__arrows{
        display: flex;
        height: 10vh;
        width: 60%;
        margin: 6vh auto 0;
        align-items: center;
        justify-content: space-between;
    }
    .glide__arrow{
        color: var(--lightArrow);
        border: 2px solid var(--lightBorder);
        padding: 0; 
        position: relative;
    }
    .icon{
        width: 8vh;
        height: 8vh;
    }
</style>