<script>
    import MdKeyboardReturn from 'svelte-icons/md/MdKeyboardReturn.svelte';
    import { requestedWeek } from '../stores.js';
    function returnHome(){
        if ($requestedWeek == 1)
        {
            requestedWeek.set(-1);
        }
        else{
            requestedWeek.set(0);
        }
    }
</script>

<div class="contain">¨
    <h1>Ingen mat tillgänglig!</h1>
    <h3>Återgå till nuvarande vecka.</h3>
    <div class="icon" on:click={returnHome}>
        <MdKeyboardReturn/>
    </div>
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