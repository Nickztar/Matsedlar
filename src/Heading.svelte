<script>
    import GiKnifeFork from 'svelte-icons/gi/GiKnifeFork.svelte';
    import FaSyncAlt from 'svelte-icons/fa/FaSyncAlt.svelte';
    import IoMdSearch from 'svelte-icons/io/IoMdSearch.svelte';
    import MdKeyboardReturn from 'svelte-icons/md/MdKeyboardReturn.svelte'
    import { hasSchool, selectedSchool, requestedWeek, homeWeek, showAll, infoShown } from './stores.js';
    function selectSchool(){
        hasSchool.set(false);
        requestedWeek.set($homeWeek);
    }
    function handleReturn(){
        infoShown.set(false);
    }
    function showLess(){
        showAll.set(false);
    }
</script>

<header>
    <div class="info">
        <div class="icon">
            <GiKnifeFork />
        </div>
        {#if $hasSchool}
            <h2 class="schoolName">{$selectedSchool.label}</h2>
        {:else}
            <h1>Matsedlar</h1>
        {/if}
    </div>
    {#if $infoShown}
        <button on:click={handleReturn}><h3>Återgå</h3><div class="change"><MdKeyboardReturn/></div></button>
    {:else}
        {#if $hasSchool}
            <button on:click={selectSchool}><h3>Byt skola</h3><div class="change"><FaSyncAlt/></div></button>
        {/if}
        {#if $showAll}
            <button class="returner" on:click={showLess}>
                <div class="icon"><IoMdSearch/></div>
            </button>
        {/if}
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
        color: var(--headerText);
    }
    .change{
        color: var(--headerText);
        align-self: center;
        height: 5vh;
        width: 5vh;
        display: none;
    }
    .info{
        width: calc(100% - 7vh);
        display: flex;
        padding-left: 0.5rem;
    }
    header {
        position: absolute;
        z-index: 1000;
        display: flex;
        text-align: center;
        justify-content: space-between;
        height: 10%;
        width: 100%;
        background: var(--header);
    }
    h2, h1 {
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
        user-select: none;
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
        color: var(--headerText);
        text-align: center;
        padding: 2vh;
        width: auto;
        white-space: nowrap;
        height: 8vh;
        display: flex;
        align-items: center;
    }
    .returner, .change{
        animation: spin 400ms ease-out;
        overflow: visible;
    }
    @media screen and (max-width: 500px){
        .change{
            display: block;
        }
        h3{
            display: none;
        }
    }
    @keyframes spin{
        0%  {transform: rotate(0deg)}
        100% {transform: rotate(-360deg)} 
    }
</style>