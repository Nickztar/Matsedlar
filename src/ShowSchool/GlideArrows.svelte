<script>
    import FaAngleLeft from 'svelte-icons/fa/FaAngleLeft.svelte';
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
    import FaAngleDoubleLeft from 'svelte-icons/fa/FaAngleDoubleLeft.svelte';
    import FaAngleDoubleRight from 'svelte-icons/fa/FaAngleDoubleRight.svelte';
    import { requestedWeek } from '../stores.js';
    function handleWeekDown(){
        requestedWeek.set($requestedWeek-1);
    }
    function handleWeekUp(){
        requestedWeek.set($requestedWeek+1);
    }
</script>

<div class="glide__arrows" data-glide-el="controls">
    <button title="Föregående vecka" aria-label="Goto last week" on:click={handleWeekDown} class="icon week"><FaAngleDoubleLeft/></button>
    <button title="Föregående dag" aria-label="Goto last day" class="glide__arrow glide__arrow--prev" data-glide-dir="<"><div class="icon"><FaAngleLeft/></div></button>
    <button title="Nästa dag" aria-label="Goto next day" class="glide__arrow glide__arrow--next" data-glide-dir=">"><div class="icon"><FaAngleRight/></div></button>
    <button title="Nästa vecka" aria-label="Goto next week" on:click={handleWeekUp} class="icon week"><FaAngleDoubleRight/></button>
</div>

<style>
    .glide__arrows{
        display: flex;
        height: 10vh;
        width: 100%;
        margin: 6vh auto 0;
        align-items: center;
        justify-content: space-around;
        background: var(--primary);
        z-index: 2000;
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
    .week{
        background: none;
        border: none;
        color: var(--lightArrow);
        padding: 0;
        transform: translateY(5px);
        cursor: pointer;
    }
    @media screen and (min-width: 580px){
        .glide__arrows{
            width: 60%;
        }
    }
</style>