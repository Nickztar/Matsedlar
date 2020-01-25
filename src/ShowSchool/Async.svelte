<script>
    import GlideCarousel from './GlideCarousel.svelte';
    import Loading from '../Loading.svelte';
    const foodData = getData();
    async function getData(){
        const response = await fetch('https://matsedlarna.herokuapp.com/');
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
    <h1>eoorooor</h1>
{/await}