<script>
    import MdKeyboardReturn from 'svelte-icons/md/MdKeyboardReturn.svelte';
    import { requestedWeek, homeWeek } from '../stores.js';
    function returnHome(){
        requestedWeek.set($homeWeek);
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