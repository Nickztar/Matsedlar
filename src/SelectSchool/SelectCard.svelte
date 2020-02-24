<script>
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
    import FaSortAlphaDown from 'svelte-icons/fa/FaSortAlphaDown.svelte';
    import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
    import FindAsync from './Find/FindAsync.svelte';
    import Loading from '../Loading.svelte';
    import Select from 'svelte-select';
    import { onMount } from 'svelte';
    import { hasSchool, selectedSchool, showAll, findingSchool, lat, long, noSchool, loadingSchools } from '../stores.js';
    let input;
    onMount(() => {
        input = document.getElementsByTagName('input')[0];
        if ($noSchool){
            input.focus();
        }
    })
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
    function findSchool(){
        if (navigator.geolocation) {
            loadingSchools.set(true);
            navigator.geolocation.getCurrentPosition(pos => {
                lat.set(pos.coords.latitude);
                long.set(pos.coords.longitude);
                findingSchool.set(true);
            }, (err) => {handleError(err)}, { enableHighAccuracy: true });
        } else { 
            handleError();
            console.log('Geolocation is not supported')
        }
    }
    function handleError(err = ''){
        loadingSchools.set(false);
        noSchool.set(true);
        input.focus();
    }
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
</script>

{#if $loadingSchools}
    <div class="background">
        {#if $findingSchool}
            <FindAsync />
        {:else}
            <Loading/>
        {/if}
    </div>
{/if}
<div class="contain">
    <h1>Hitta din skola</h1>
    <div class="conFind">
        <div class="conMenu">
            <Select {loadOptions} noOptionsMessage='Sök efter skola' listPlacement='bottom' bind:selectedValue placeholder={'Välj skola...'}/>
        </div>
        <button id="submit" class="findLoc" on:click={setSchool}><div class="icon"><FaArrowRight /></div></button>
    </div>
    <div class="moreOptions">
        <button class="allSchools { $noSchool ? 'disable' : ''}" on:click={$noSchool ? ()=>{} : findSchool}>Hitta nära skolor</button>
        <button class="allSchools" on:click={allSchools}>Visa alla skolor</button>
        <button class="allSchoolsIcon { $noSchool ? 'disable' : ''}" on:click={$noSchool ? ()=>{} : findSchool}><div class="sortIcon"><MdLocationOn/></div></button>
        <button class="allSchoolsIcon" on:click={allSchools}><div class="sortIcon"><FaSortAlphaDown/></div></button>
    </div>
</div>


<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    div .disable{
        opacity: 0.7;
        cursor: default;
    }
    .background{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 200001;
        background-color: rgba(0,0,0,.5);
    }
    .moreOptions{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 8vh;
        margin-top: 12vh;
    }
    .allSchoolsIcon{
        background: var(--settings);
        outline: none;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        color: var(--light);
        padding: 1vh;
        display: none;
    }
    .sortIcon{
        width: 6vh;
        height: 6vh;
    }
    .allSchools{
        background: var(--settings);
        outline: none;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        color: var(--priority);
        padding: 2vh;
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
     @media screen and (max-width: 500px){
        .allSchoolsIcon{
            display: block;
        }
        .allSchools{
            display: none;
        }
    }
</style>