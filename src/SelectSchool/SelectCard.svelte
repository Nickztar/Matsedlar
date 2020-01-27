<script>
    import FaMapPin from 'svelte-icons/fa/FaMapPin.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import Select from 'svelte-select';
    import { hasSchool, selectedSchool } from '../stores.js';
    const items = [
        { value: 0, label: "Kattegattgymnasiet" },
        { value: 1, label: "Sannarpsgymnasiet" }
    ];
    let selectedValue = null;
    function locateSchool(){

    }
    function setSchool(){
        if(selectedValue){
            setCookie('school', JSON.stringify(selectedValue), 365);
            selectedSchool.set(selectedValue);
            hasSchool.set(true);
        }
    }
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
</script>

<div class="contain">
    <h1>Hitta din skola</h1>
    <div class="conFind">
        <div class="conMenu">
            <Select {items} bind:selectedValue placeholder={'Välj skola...'}/>
        </div>
        <button id="submit" class="findLoc" on:click={setSchool}><div class="icon"><FaArrowRight /></div></button>
    </div>
    <div class="conButton">
        <button id="locate" class="find" on:click={locateSchool}><div class="icon"><FaMapPin /></div></button>
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
        margin: auto;
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
        color: var(--priority);
    }
    .conMenu{
        --padding: 0 20px;
        --background: var(--secondary);
        --listBackground: var(--secondary);
        --itemHoverBG: var(--secondary);
        color: var(--light);
        --inputColor: var(--light);
        --placeholderColor: var(--priority);
        --listShadow: 0 0 5px var(--strong-shadow);
        box-shadow: 0 0 5px var(--strong-shadow);
        --border: none;
        width: 65%;
        --height: 10vh;
        --inputFontSize: 1.2rem
    }
    .conButton{
        display: flex;
        display: none;
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
    .findLoc{
        display: block;
        border: none;
        background: var(--secondary);
        height: 10vh;
        width: 10vh;
        box-shadow: 0 0 5px var(--strong-shadow);
    }
</style>