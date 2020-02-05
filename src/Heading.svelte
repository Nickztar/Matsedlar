<script>
    import GiKnifeFork from 'svelte-icons/gi/GiKnifeFork.svelte';
    import FaSyncAlt from 'svelte-icons/fa/FaSyncAlt.svelte';
    import { hasSchool, selectedSchool, requestedWeek, homeWeek } from './stores.js';
    function selectSchool(){
        hasSchool.set(false);
        requestedWeek.set($homeWeek);
    }
</script>

<header>
    <div class="info">
        <div class="icon">
            <GiKnifeFork />
        </div>
        {#if $hasSchool}
            <h2 title="{$selectedSchool.label}" class="schoolName">{$selectedSchool.label}</h2>
        {:else}
            <h2>Matsedlar</h2>
        {/if}
    </div>
    {#if $hasSchool}
        <button on:click={selectSchool}><h3>Byt skola</h3><div class="change"><FaSyncAlt/></div></button>
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
    .change{
        color: var(--priority);
        align-self: center;
        height: 6vh;
        width: 6vh;
        display: none;
    }
    .info{
        width: calc(100% - 8vh);
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
    h2 {
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
        margin: 0;
        padding: 0;
        margin-right: 2vh;
        width: auto;
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
        padding: 2vh;
        width: auto;
        white-space: nowrap;
        height: 8vh;
    }
    @media (prefers-color-scheme: light){
        h3, .change, .icon{
            color: #fff;
        }
    }
    @media screen and (max-width: 500px){
        .change{
            display: block;
        }
        h3{
            display: none;
        }
    }
</style>