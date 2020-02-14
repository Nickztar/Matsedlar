<script>
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
    import Select from 'svelte-select';
    import { hasSchool, selectedSchool, showAll } from '../stores.js';
    const loadOptions = async (filterText) => {
        const response = await fetch(`https://matsedlarna.herokuapp.com/schools?school=${filterText}`);
        const json = await response.json();
        return json;
    };
    let selectedValue = null;
    function setSchool(){
        if(selectedValue){
            setCookie('school', JSON.stringify(selectedValue), 365);
            selectedSchool.set(selectedValue);
            hasSchool.set(true);
        }
    }
    function allSchools(){
        showAll.set(true);
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
            <Select {loadOptions} noOptionsMessage='Sök efter skola' listPlacement='bottom' bind:selectedValue placeholder={'Välj skola...'}/>
        </div>
        <button id="submit" class="findLoc" on:click={setSchool}><div class="icon"><FaArrowRight /></div></button>
    </div>
    <div class="moreOptions">
        <button class="allSchools" on:click={allSchools}>Visa alla skolor</button>
    </div>
</div>


<style>
    * {
        padding: 0;
        margin: 0;
    }
    .moreOptions{
        display: flex;
        align-items: center;
        justify-content: right;
        height: 8vh;
        margin-top: 12vh;
    }
    .allSchools{
        background: var(--settings);
        outline: none;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        color: var(--priority);
        margin: 0 auto;
        width: 40%;
        height: 100%;
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
        cursor: pointer;
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
        --inputFontSize: 1.2rem;
        --spinnerLeft: 30%;
        --spinnerColor: var(--priority);
    }
    .icon{
        cursor: pointer;
        height: 80%;
        background: none;
        color: var(--light);
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