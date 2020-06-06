<script>
    import IoMdReturnLeft from 'svelte-icons/io/IoMdReturnLeft.svelte';
    import TiThumbsOk from 'svelte-icons/ti/TiThumbsOk.svelte';
    import { infoShown } from './stores.js';
    function handleReturn(){
        infoShown.set(false);
    }
</script>

<div class="contain">
    <h1>Matsedlar</h1>
    <h3>
        Matsedlar är en sida skapad som ett sidprojekt av <a class="nicke" href="https://github.com/Nickztar">Nicholas Broström</a>. 
        Klientsidan använder sig av JavaScript-ramverket <a class="svelte" href="https://svelte.dev/">Svelte</a>. 
        Serversidan till denna sida är gjord i Node och använder sig av <a href="https://en.wikipedia.org/wiki/Web_scraping">Webscraping</a>. 
        Tack till <a href="https://webmenu.foodit.se/">Matildas Matsedel</a> som har all data om skolmaten.
    </h3>
    <div class="icon" title="Got it" on:click={handleReturn}><TiThumbsOk/></div>
</div>

<style>
    .icon{
        width: 10vh;
        height: 10vh;
        color: var(--priority);
        cursor: pointer;
        margin: auto;
        margin-top: 5vh;
    }
    .contain{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: auto;
        width: 75%;
    }
    a{
        color: var(--priority);
    }
    .svelte{
        color: #ff3e00;
    }
    h1{
        color: var(--priority);
        margin: auto;
        margin-bottom: 5vh;
    }
    h3{
        color: var(--light);
        margin: 0;
    }
</style>