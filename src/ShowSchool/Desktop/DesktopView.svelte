<script>
    import DeskDay from './DeskDay.svelte';
    import { requestedWeek, homeWeek } from '../../stores.js';
    import TiHome from 'svelte-icons/ti/TiHome.svelte';
    export let foodData;
    let displayReturn = false;
    function handleLast(){
        requestedWeek.set($requestedWeek-1);
    }
    function handleNext(){
        requestedWeek.set($requestedWeek+1);
    }
    function returnHome(){
        requestedWeek.set($homeWeek);
    }
    requestedWeek.subscribe((val)=>{
        if (val != $homeWeek){
            displayReturn = true;
        }
        else{
            displayReturn = false;
        }
    });
</script>

<div class="container">
    {#each foodData as food}
        <DeskDay data={food}/>
    {/each}
    <div class="changeWeek">
        <button class="last" on:click={handleLast}>Förra</button>
        {#if displayReturn}
            <div class="returnIcon" on:click={returnHome}>
                <TiHome/>
            </div>
        {/if}
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
        display: inline-flex;
        margin: 3vh auto 0;
        width: 80%;
        height: 10vh;
        align-items: center;
        justify-content: space-between;
    }
    .returnIcon{
        width: 8vh;
        height: 8vh;
        color: var(--lightArrow);
        cursor: pointer;
    }
    button{
        color: var(--lightArrow);
        background: none;
        outline: none;
        cursor: pointer;
        padding: 10px;
        border: 2px solid var(--lightBorder);
        border-radius: 5px;
        font-size: 1.5rem;
    }
</style>