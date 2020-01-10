<script>
    import FaMapPin from 'svelte-icons/fa/FaMapPin.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import Select from 'svelte-select';
    let items = ["Kattegattgymnasiet","Söndrumsskolan","Sannarpsgymnasiet"];

    function locateSchool(){

    }
    function setSchool(){

    }
</script>

<div class="contain">
    <h1>Hitta din skola</h1>
    <div class="conFind">
        <div class="conMenu">
            <Select {items}/>
        </div>
    </div>
    <div class="conButton">
        <button id="locate" class="find" on:click={locateSchool}><div class="icon"><FaMapPin /></div></button>
        <button id="submit" class="find" on:click={setSchool}><div class="icon"><FaArrowRight /></div></button>
    </div>
</div>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    .contain{
        width: 80%;
        height: 65%;
    }
    .conFind{
        margin: 4vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        text-align: center;
        margin: 0 auto;
        color: var(--light);
    }
    .conMenu{
        --padding: 0 20px;
        --background: var(--secondary);
        --listBackground: var(--secondary);
        color: var(--light);
        --placeholderColor: var(--light);
        --borderRadius: 2rem;
        border-radius: 2rem;
        --listShadow: 0 0 5px var(--strong-shadow);
        box-shadow: 0 0 5px var(--strong-shadow);
        --border: none;
        width: 60%;
        --height: 12vh;
    }
    .conButton{
        display: flex;
        justify-content: center
    }
    .icon{
        cursor: pointer;
        height: 80%;
        background: none;
        color: var(--light);
    }
    .find{
        display: block;
        border: none;
        background: var(--secondary);
        height: 12vh;
        width: 12vh;
        border-radius: 50%;
        box-shadow: 0 0 5px var(--strong-shadow);
    }
    #locate{
        margin-right: 2vh;
    }
</style>