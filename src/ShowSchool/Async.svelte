<script>
    import GlideCarousel from './GlideCarousel.svelte';
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
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
{:then data}
    <GlideCarousel foodData={data}/>
{:catch error}
    <h1>eoorooor</h1>
{/await}

<style>
    .lds-ring {
        display: inline-block;
        position: relative;
        margin: auto;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--priority);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--priority) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>