<script>
    import DeskDay from './DeskDay.svelte';
    export let foodData;

</script>

<div class="container">
    {#each foodData as food}
        <DeskDay data={food}/>
    {/each}
</div>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        display: flex;
        flex-direction: column;
        margin-top: 5vh;
        overflow: auto;
    }
</style>