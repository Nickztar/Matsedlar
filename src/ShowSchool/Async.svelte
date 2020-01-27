<script>
    import GlideCarousel from './GlideCarousel.svelte';
    import Loading from '../Loading.svelte';
    import Error from '../Error.svelte';
    import { selectedSchool } from '../stores.js';
    const foodData = getData();
    async function getData(){
        const response = await fetch(`https://matsedlarna.herokuapp.com/${$selectedSchool}/0`);
        const json = await response.json();
        if (response.ok){
            return json;
        }else {
            throw new Error(json);
        }
    }
</script>

{#await foodData}
    <Loading/>
{:then data}
    <GlideCarousel foodData={data}/>
{:catch error}
    <Error/>
{/await}