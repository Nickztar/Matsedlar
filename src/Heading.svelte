<script>
    export let hasSchool;
    function selectSchool(){
        //Allow user to select new school
    }
</script>

<header>
    <h1>Matsedlar</h1>
    {#if hasSchool}
        <button on:click={selectSchool}><h2>Byt skola</h2></button>
    {/if}
</header>

<style>
    * {
        font-family: 'Roboto', sans-serif;
    }
    header {
        position: relative;
        z-index: 1000;
        display: flex;
        text-align: center;
        justify-content: space-between;
        padding: 0 1.2rem;
        height: 12vh;
        width: 100%;
        background: var(--primary);
        box-shadow: 0px 5px 7px 2px var(--light);
    }
    h1 {
        align-self: center;
        color: var(--light);
    }
    button {
        border: none;
        background: var(--secondary);
        border-radius: 10px;
        height: 60%;
        padding: 10px 17px;
        margin: 0;
        align-self: center;
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 5px 0px var(--strong-shadow);
        -moz-box-shadow: 0px 0px 5px 0px var(--strong-shadow);
        box-shadow: 0px 0px 5px 0px var(--strong-shadow);
    }
    button:active{
        background: var(--active);
    }
    h2 {
        color: var(--light);
        text-align: center;
        margin: 0;
    }
</style>