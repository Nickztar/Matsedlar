<script>
    import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
    import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
    import Glide, { Controls, Keyboard, Swipe } from '@glidejs/glide/dist/glide.modular.esm';
    import CenterCard from './Cards/CenterCard.svelte';
    import GlideArrow from './GlideArrows.svelte';
    import GlideBullets from './GlideBullets.svelte';
    import { onMount } from 'svelte';
    import { gotoIndex, todayDate, requestedWeek } from '../stores.js';
    export let foodData;
    const startAt = setStartDate();
    let glide;
    onMount(() => {
        glide = new Glide('.glide', {
            type: 'slider',
            startAt: startAt,
            perView: 1,
            focusAt: "center",
            animationDuration: 350,
            peek: 35,
            dragThreshold: 100
        }).mount({ Controls, Keyboard, Swipe });
        reactivity();
        window.onresize = () => {
            reactivity();
        };
    });
    gotoIndex.subscribe(val => {
        if (glide != null){
            glide.go(`=${val}`);
        }
    });
    function reactivity(){
        if (window.innerWidth > 700){
            glide.update({perView: 2, peek: 35});
        }
        else if (window.innerWidth < 550){
            glide.update({perView: 1, peek: 35});
        }
        else {
            glide.update({peek: 100});
        }
    }
    function setStartDate(){
        const trimDate = $todayDate.substring(0,2).trim();
        let startPoint = 0;
        foodData.forEach((el, index) => {
            if(el.date.substring(0,2).trim() == trimDate){
                startPoint = index;
            }
        });
        return startPoint;
    }
    
</script>

<div class="glide mainGlide">
    <GlideBullets />
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            {#each foodData as food, index}
                <li class="glide__slide"><CenterCard data={food} index={index}/></li>
            {/each}
        </ul>
    </div>
    <GlideArrow />
</div>

<style>
    .mainGlide{
        width: 80%;
        position: absolute;
        flex-grow: 1;
    }
    .glide__slides{
        overflow: visible;
    }
    .glide__track{
        overflow: visible;
    }
</style>