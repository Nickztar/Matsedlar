<script>
    import { onMount } from 'svelte';
    import { lat, long, noSchool, selectedSchool, hasSchool, findingSchool, loadingSchools } from '../../stores.js';
    import Loading from '../../Loading.svelte';
    import MdClose from 'svelte-icons/md/MdClose.svelte'
    async function closestSchool() {
        const url = `https://api.skolverket.se/planned-educations/school-units?distance=0.5&latitude=${$lat}&longitude=${$long}&size=20`;
        const response = await fetch(url, { headers: { "Accept": "application/vnd.skolverket.plannededucations.api.v2.hal+json" }});
        const data = await response.json();
        if (data.body.page.totalElements > 0){
            const dupeNames = data.body._embedded.listedSchoolUnits.map(val => {
                return val.name.replace(/[0-9]/g, '').trim()
            });
            const names = [...new Set(dupeNames)];
            const schools = await getSchools(names);
            if (schools.length > 0){
                return schools
            }else{
                noSchool.set(true);
                throw new Error(404);
            }
        } else{
            noSchool.set(true);
            throw new Error(404);
        }
    }
    let schoolPromise = closestSchool();
    async function getSchools(names){
        const response = await fetch(`http://localhost:4000/schools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'names': names})
        });
        const json = await response.json();
        return json;
    }
    document.addEventListener('click', close)
    function close(){
        if ($findingSchool){
            findingSchool.set(false);
            loadingSchools.set(false);
        }
    }
    function setSchool(school, e){
        setCookie('school', JSON.stringify(school), 365);
        findingSchool.set(false);
        loadingSchools.set(false);
        selectedSchool.set(school);
        hasSchool.set(true);
    }
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
</script>

<button on:click={close} class="close"><MdClose/></button>
<div class="modal">
    {#await schoolPromise}
        <Loading />
    {:then schools}
        <h2>Hittade dessa skolor:</h2>
        {#each schools as school}
            <button on:click={(e) => {e.stopPropagation();setSchool(school)}} class="schools">{school.label}</button>
        {/each}
    {:catch error}
        <h1 on:click={close}>Hittade inga skolor...</h1>
    {/await}
</div>

<style>
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    .close{
        background: none;
        outline: none;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        width: 8vh;
        height: 8vh;
        color: var(--priority);
        position: absolute;
        top: 0;
        right: 0;
    }
    .modal{
        transition: all 0.5s;
        background-color: var(--modal);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 75%;
        border-radius: 1rem;
        height: 65vh;
    }
    h2, h1{
        color: var(--priority);
        margin-top: 7vh;
        margin-bottom: 5vh;
    }
    h1{
        cursor: pointer;
        margin: auto;
    }
    .schools{
        cursor: pointer;
        outline: none;
        border: none;
        color: var(--text);
        background-color: var(--priority);
        min-width: 75%;
        min-height: 6vh;
        max-width: 80%;
        text-align: center;
        border-radius: 0.2rem;
        padding: 0.2rem; 
    }
</style>