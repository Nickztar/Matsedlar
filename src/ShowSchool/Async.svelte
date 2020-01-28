<script>
    import GlideCarousel from './GlideCarousel.svelte';
    import EmptyWeek from './EmptyWeek.svelte';
    import Loading from '../Loading.svelte';
    import Error from '../Error.svelte';
    import { selectedSchool, requestedWeek } from '../stores.js';
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
    requestedWeek.subscribe(()=>{
        foodData = getData();
    });
</script>

{#await foodData}
    <Loading/>
{:then data}
    {#if data.length > 0}
        <GlideCarousel foodData={data}/>
    {:else}
        <EmptyWeek/>
    {/if}
{:catch error}
    <Error/>
{/await}