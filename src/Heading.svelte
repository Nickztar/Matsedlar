<script>
    import GiKnifeFork from 'svelte-icons/gi/GiKnifeFork.svelte'
    import { hasSchool, selectedSchool, requestedWeek } from './stores.js';
    function selectSchool(){
        hasSchool.set(false);
        requestedWeek.set(0);
    }
</script>

<header>
    <div class="info">
        <div class="icon">
            <GiKnifeFork />
        </div>
        {#if $hasSchool}
            <h1 title="{$selectedSchool.label}" class="schoolName">{$selectedSchool.label}</h1>
        {:else}
            <h1>Matsedler</h1>
        {/if}
    </div>
    {#if $hasSchool}
        <button on:click={selectSchool}><h3>Byt skola</h3></button>
    {/if}
</header>

<style>
    * {
        font-family: 'Roboto', sans-serif;
    }
    .icon{
        align-self: center;
        height: 6vh;
        width: 6vh;
        color: var(--priority);
    }
    .info{
        width: 50%;
        display: flex;
        padding-left: 0.5rem;
    }
    header {
        position: relative;
        z-index: 1000;
        display: flex;
        text-align: center;
        justify-content: space-between;
        height: 10%;
        width: 100%;
        background: var(--header);
    }
    h1 {
        user-select: none;
        text-align: left;
        align-self: center;
        color: var(--light);
        
    }
    .schoolName{
        white-space: nowrap;
        overflow: hidden;
        width: 94%;
        text-overflow: ellipsis;
    }
    button {
        border: none;
        background: none;
        border-radius: 10px;
        height: 60%;
        margin: 0;
        width: auto;
        margin-right: 2vw;
        align-self: center;
        cursor: pointer;
    }
    button:active{
        background: none;
    }
    button:hover{
        opacity: 0.9;
    }
    h3 {
        color: var(--priority);
        text-align: center;
        margin: 0;
    }
    @media (prefers-color-scheme: light){
        h3, .icon{
            color: #fff;
        }
    }
</style>