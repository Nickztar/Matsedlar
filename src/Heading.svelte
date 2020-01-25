<script>
    import GiKnifeFork from 'svelte-icons/gi/GiKnifeFork.svelte'
    import { hasSchool } from './stores.js';
    function selectSchool(){
        hasSchool.set(false);
    }
</script>

<header>
    <div class="info">
        <div class="icon">
            <GiKnifeFork />
        </div>
        <h1>Matsedlar</h1>
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
        position: fixed;
        top: 0;
        z-index: 1000;
        display: flex;
        text-align: center;
        justify-content: space-between;
        height: 10%;
        width: 100%;
        background: var(--header);
    }
    h1 {
        align-self: center;
        color: var(--light);
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