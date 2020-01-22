<!-- <script>
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
    import FaAngleLeft from 'svelte-icons/fa/FaAngleLeft.svelte';
    const foodData = [{day:'Fredag', date:'3 JAN', foods:['Usula', 'Manu']}, {day:'Lördag', date:'4 JAN', foods:['lasagne', 'tofu']}, {day:'Torsdag', date:'2 JAN', foods:['Köttbullar', 'Spagethi']}];

    import DayPart from './DayPart.svelte';
    let positions = [0,1,2]
</script>

<div class="holder">
    <DayPart currentIndex={positions[0]} data={foodData[0]}/>
    <DayPart currentIndex={positions[1]} data={foodData[1]}/>
    <DayPart currentIndex={positions[2]} data={foodData[2]}/>
</div>
<div class="control">
    <button class="icon" on:click={handleLeft}><FaAngleLeft /></button>
    <button class="icon" on:click={handleRight}><FaAngleRight/></button>
</div>
<style>
    .holder{
        width: 80%;
        margin-top: -10vh;
        height: 65vh;
        display: grid;
        grid-template-columns: 1fr 3.5fr 1fr;
        grid-template-areas: 'left center right';
        justify-content: center;
    }
    .control{
        margin-top: 3vh;
        width: 40%;
        height: 8vh;
        display: flex;
        justify-content: space-around;
    }
    .icon{
        background: var(--secondary);
        box-shadow: 0 0 5px var(--strong-shadow);
        cursor: pointer;
        border-radius: 50%;
        border: none;
        color: var(--light);
        height: 11vh;
        width: 11vh;
    }
</style> -->