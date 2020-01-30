<script>
    import MdRefresh from 'svelte-icons/md/MdRefresh.svelte'; 
    import { hasSchool, requestedWeek } from './stores.js';
    function handleRefresh(){
        hasSchool.set(false);
        requestedWeek.set(0)
    }
</script>
<div class="contain">
    <h1>Åh nej!</h1>
    <h3>Något har gått snett, försök igen.</h3>
    <div class="icon" on:click={handleRefresh}><MdRefresh/></div>
</div>

<style>
    .icon{
        width: 15vh;
        height: 15vh;
        color: var(--priority);
        cursor: pointer;
    }
    .contain{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: auto;
    }
    h1{
        color: var(--priority);
    }
    h3{
        color: var(--light);
    }
</style>