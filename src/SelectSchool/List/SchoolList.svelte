<script>
    import { hasSchool, selectedSchool, showAll } from '../../stores.js';
    export let list;
    const sortedList = list.sort((a, b) => (a.label > b.label) ? 1 : -1);
    const directory = ((map, array) => (array.forEach(school => {
        let arr = map.get(school.label[0]) || [];
        map.set(school.label[0], (arr.push(school), arr));
    }), map))(new Map(), sortedList);
    const dirArr = [...directory.entries()];
    function setSchool(selectedValue){
        if(selectedValue){
            setCookie('school', JSON.stringify(selectedValue), 365);
            selectedSchool.set(selectedValue);
            hasSchool.set(true);
            showAll.set(false);
        }
    }
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
</script>

<div class="navigator">
    {#each dirArr as entry}
        <a href="#{entry[0]}">{entry[0]}</a>
    {/each}
</div>
{#each dirArr as entry}
    <div class="entries">
        <div class="key" id="{entry[0]}"><h3>{entry[0]}</h3></div>
        {#each entry[1] as school}
            <div class="values" on:click={() => {setSchool(school)}}>
                <p>{school.label}</p>
            </div>
        {/each}
    </div>
{/each}

<style>
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    .navigator{
        position: absolute;
        top: 12%;
        right: 2%;
        display: flex;
        height: 80%;
        justify-content: center;
        flex-direction: column;
        z-index: 100;
    }
    .entries{
        color: var(--light);
    }
    .key{
        color: var(--priority);
        background: var(--secondary);
        display: flex;
        align-items: center;
        height: 4vh;
        padding-left: 2vw;
        text-align: left;
        width: 100%;
    }
    .values{
        display: flex;
        align-items: center;
        padding-left: 4vw;
        height: 6vh;
        width: 80%;
        cursor: pointer;
    }
    a{
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
    .values:hover{
        background: rgba(156, 152, 152, 0.4)
    }
</style>