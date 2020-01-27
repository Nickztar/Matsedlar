<script>
    import MdRefresh from 'svelte-icons/md/MdRefresh.svelte'; 
    import { hasSchool } from './stores.js';
    function handleRefresh(){
        hasSchool.set(false);
    }
</script>

<div class="icon" on:click={handleRefresh}><MdRefresh/></div>

<style>
    .icon{
        color: var(--priority);
        width: 10vh;
        height: 10vh;
        margin: auto;
        cursor: pointer;
    }
</style>