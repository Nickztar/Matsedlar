<script>
    import DeskDay from './DeskDay.svelte';
    import { requestedWeek } from '../../stores.js';
    export let foodData;
    function handleLast(){
        requestedWeek.set($requestedWeek-1);
    }
    function handleNext(){
        requestedWeek.set($requestedWeek+1);
    }
</script>

<div class="container">
    {#each foodData as food}
        <DeskDay data={food}/>
    {/each}
    <div class="changeWeek">
        <button class="last" on:click={handleLast}>Förra</button>
        <button class="next" on:click={handleNext}>Nästa</button>
    </div>
</div>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        scroll-behavior: smooth;
        display: flex;
        flex-direction: column;
        padding: 5vh 2vh;
        overflow-x: visible;
        overflow-y: auto;
    }
    .changeWeek{
        display: flex;
        margin: 3vh auto 0;
        width: 80%;
        height: 10vh;
        align-items: center;
        justify-content: space-between;
    }
    button{
        color: var(--lightArrow);
        background: none;
        outline: none;
        cursor: pointer;
        padding: 1% 1.5%;
        border: 2px solid var(--lightBorder);
        border-radius: 5px;
        font-size: 1.5rem;
    }
</style>