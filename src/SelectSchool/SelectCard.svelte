<script>
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
    import FaSortAlphaDown from 'svelte-icons/fa/FaSortAlphaDown.svelte';
    import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
    import Loading from '../Loading.svelte';
    import Select from 'svelte-select';
    import { hasSchool, selectedSchool, showAll } from '../stores.js';
    let findingSchool = false;
    let noSchool = false;
    const loadOptions = async (filterText) => {
        const response = await fetch(`https://matsedlarna.herokuapp.com/schools?school=${filterText}`);
        const json = await response.json();
        return json;
    };
    const closestSchool = async (lat, long) => {
        if(noSchool) return;
        const url = `https://api.skolverket.se/planned-educations/school-units?distance=0.5&latitude=${lat}&longitude=${long}&size=1`;
        const response = await fetch(url, { headers: { "Accept": "application/vnd.skolverket.plannededucations.api.v2.hal+json" }});
        const data = await response.json();
        if (data.body.page.totalElements > 0){
            const name = data.body._embedded.listedSchoolUnits[0].name.replace(/[0-9]/g, '').trim()
            const school = await loadOptions(name);
            if (school.length > 0){
                selectedValue = school[0];
            }else{
                noSchool = true;
            }
        } else{
            noSchool = true;
        }
    }
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
            findingSchool = true;
            navigator.geolocation.getCurrentPosition(async pos => {
                await closestSchool(pos.coords.latitude, pos.coords.longitude);
                findingSchool = false;
            }, () => findingSchool = false);
        } else { 
            findingSchool = false;
            console.log('Geolocation is not supported')
        }
    }
    
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
</script>

{#if findingSchool}
    <div class="modal">
        <Loading />
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
        <button class="allSchools { noSchool ? 'disable' : ''}" on:click={noSchool ? ()=>{} : findSchool}>Hitta nära skolor</button>
        <button class="allSchools" on:click={allSchools}>Visa alla skolor</button>
        <button class="allSchoolsIcon { noSchool ? 'disable' : ''}" on:click={findSchool}><div class="sortIcon"><MdLocationOn/></div></button>
        <button class="allSchoolsIcon" on:click={allSchools}><div class="sortIcon"><FaSortAlphaDown/></div></button>
    </div>
    {#if noSchool}
        <div class="error">
            <h4>Kunde inte hitta en skola...</h4>
        </div>
    {/if}
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
    .modal{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
    .error{
        text-align: center;
        padding-top: 5vh;
        color: var(--priority);
        opacity: 0.6;
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