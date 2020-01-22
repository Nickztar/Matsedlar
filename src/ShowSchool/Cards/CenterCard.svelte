<script>
    import { fade } from 'svelte/transition';
    import { gotoIndex } from '../../stores.js';
    export let data;
    export let index;
    const day = data.day;
    const date = data.date;
    const food = data.foods;
    function handleIndex(i){
        gotoIndex.set(i);
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
    }
    .card{
        grid-area: center;
        align-self: center;
        justify-self: center;
        position: relative;
        z-index: 20;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        background: var(--secondary);
        box-shadow: 0 0 5px var(--strong-shadow);
    }
    .container{
        margin: 3vh auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .food{
        margin-top: 7vh;
        width: 80%;
        height: 40vh;
    }
    .foods{
        display: block;
        margin: 3vh auto;
        max-height: 17vh;
        padding: 1rem;
        font-size: 1.3rem;
        border-radius: 0.5rem;
        text-align: center;
        background: var(--priority);
        color: var(--primary);
        word-wrap: break-word;
    }
</style>