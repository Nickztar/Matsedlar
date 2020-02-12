<script>
    import Loading from '../../Loading.svelte';
    import SchoolList from './SchoolList.svelte';
    const getSchools = async () => {
        const response = await fetch(`https://matsedlarna.herokuapp.com/schools`);
        const json = await response.json();
        return json;
    };
    const schools = getSchools();
</script>

<div class="container">
    {#await schools}
        <Loading />
    {:then list}
        <SchoolList {list} />
    {:catch error}
        Fel
    {/await}
</div>

<style>
    .container{
        width: 100%;
        padding: 0 5%;
        margin: auto;
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        overflow-y: scroll;
    }
</style>