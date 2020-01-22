<script>
    import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
    import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
    import Glide, { Controls, Keyboard } from '@glidejs/glide/dist/glide.modular.esm';
    import { onMount } from 'svelte';
    import CenterCard from './Cards/CenterCard.svelte';
    import { gotoIndex } from '../stores.js';
    const foodData = [
        {day:'Måndag', date:'31 DEC', foods:['Pankakor med sylt och socket', 'Sallad inklusive Tomat och Mozarella']},
        {day:'Tisdag', date:'1 JAN', foods:['Veg Korv', 'Korv']},
        {day:'Onsdag', date:'2 JAN', foods:['Tomatpure', 'Soppa']},
        {day:'Torsdag', date:'2 JAN', foods:['Köttbullar', 'Spagethi']}, 
        {day:'Fredag', date:'3 JAN', foods:['Usula', 'Manu']} 
    ];
    let glide;
    onMount(() => {
        glide = new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 1,
            focusAt: "center",
            animationDuration: 500,
            peek: 35,
            dragThreshold: 100
        }).mount({ Controls, Keyboard });
        window.onresize = () => {
            if (window.innerWidth > 700){
                glide.update({perView: 2, peek: 35});
            }
            else if (window.innerWidth < 550){
                glide.update({perView: 1, peek: 35});
            }
            else {
                glide.update({peek: 100});
            }
        };
    });
    gotoIndex.subscribe(val => {
        if (glide != null){
            glide.go(`=${val}`);
        }
    });
        
</script>

<div class="glide mainGlide">
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            {#each foodData as food, index}
                <!-- Send index along to allow for click on div to goto, and to make some stand out -->
                <li class="glide__slide"><CenterCard data={food} index={index}/></li>
            {/each}
        </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
        <button class="glide__bullet" data-glide-dir="=4"></button>
    </div>
    <div class="glide">
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--next" data-glide-dir=">">next</button>
        </div>
    </div>
</div>

<style>
    .mainGlide{
        width: 80%;
        margin-top: 7vh;
    }
    .glide__slides{
        overflow: visible;
    }
    .glide__track{
        overflow: visible;
    }
    .glide__arrow{
        margin-top: 8vh;
    }
    .glide__arrow--next {
        right: 30%;
    }
    .glide__arrow--prev{
        left: 30%;
    }
    .glide__bullets{
        top: -1.8em;
    }
    @media screen and (max-width: 400px){
        .glide__arrow--next {
            right: 20px;
        }
        .glide__arrow--prev{
            left: 20px;
        }
    }
</style>