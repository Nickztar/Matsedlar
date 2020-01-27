<script>
    import { fade } from 'svelte/transition';
    import { gotoIndex } from '../../stores.js';
    export let data;
    export let index;
    const day = formatDay(data.day);
    const date = data.date;
    const food = data.foods;
    
    function handleIndex(i){
        gotoIndex.set(i);
    }
    function formatDay(smallDay){
        let day = '';
        switch (smallDay){
            case 'MÅN':
                day = 'MÅNDAG';
                break;
            case 'TIS':
                day = 'TISDAG';
                break;
            case 'ONS':
                day = 'ONSDAG';
                break;
            case 'TOR':
                day = 'TORSDAG';
                break;
            default:
                day = 'FREDAG';
        }
        return day;
    }
</script>
<div class="card" on:click={handleIndex(index)}>
    <div class="container">
        <div class="day">
            <h2>{day}</h2>
        </div>
        <div class="date">
            <p>{date}</p>
        </div>
        <div class="food">
            <div class="foods">{food[0]}</div>
            {#if food.length > 1}
                <div class="foods">{food[1]}</div>
            {/if}
        </div>
    </div>
</div>
    
<style>
    *{
        margin: 0;
        padding: 0;
        color: var(--light);
        font-family: 'Roboto', sans-serif;
    }
    h2 {
        color: var(--priority);
        margin-top: 2vh;
    }
    .card{
        grid-area: center;
        align-self: center;
        justify-self: center;
        position: relative;
        z-index: 20;
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
        background: var(--secondary);
        box-shadow: 0 0 3px var(--strong-shadow);
    }
    .container{
        margin: 3vh auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .food{
        margin-top: 5vh;
        width: 80%;
        height: 40vh;
    }
    .foods{
        display: block;
        margin: 1.5vh auto;
        max-height: 17vh;
        padding: 1rem;
        font-size: 1rem;
        text-align: center;
        border-radius: 0.3rem;
        background: var(--priority);
        color: var(--text);
        word-wrap: break-word;
    }
</style>