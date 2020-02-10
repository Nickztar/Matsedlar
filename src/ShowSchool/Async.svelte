<script>
    import GlideCarousel from './GlideCarousel.svelte';
    import DesktopView from './Desktop/DesktopView.svelte';
    import EmptyWeek from './EmptyWeek.svelte';
    import Loading from '../Loading.svelte';
    import Error from '../Error.svelte';
    import { selectedSchool, requestedWeek, homeWeek, prefersDesktop } from '../stores.js';
    import TiHome from 'svelte-icons/ti/TiHome.svelte';
    let displayReturn = false;
    let foodData = getData();
    async function getData(){
        const response = await fetch(`https://matsedlarna.herokuapp.com/${$selectedSchool.value}/${$requestedWeek}`);
        const json = await response.json();
        if (response.ok){
            return json;
        }else {
            throw new Error(json);
        }
    }
    requestedWeek.subscribe((val)=>{
        if (val != $homeWeek){
            displayReturn = true;
        }
        else{
            displayReturn = false;
        }
        foodData = getData();
    });
    function returnHome(){
        requestedWeek.set($homeWeek);
    }
</script>

{#await foodData}
    <Loading/>
{:then data}
    {#if data.length > 0}
        {#if displayReturn}
            <div class="returnIcon" on:click={returnHome}>
                <TiHome/>
            </div>
        {/if}
        {#if $prefersDesktop}
            <DesktopView foodData={data}/>
        {:else}
            <GlideCarousel foodData={data}/>
        {/if}
    {:else}
        <EmptyWeek/>
    {/if}
{:catch error}
    <Error/>
{/await}

<style>
    .returnIcon{
        position: absolute;
        top: 10%;
        left: 1%;
        width: 5vh;
        height: 5vh;
        color: var(--priority);
        cursor: pointer;
    }
</style>