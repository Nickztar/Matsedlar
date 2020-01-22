<!-- <script>
    import { fly, fade } from 'svelte/transition';
    export let data;
    const day = data.day;
    const date = data.date;
</script>
<div class="card" out:fly={{x:200, duration:1000}}>
    <div class="container">
        <div class="day">
            <h4>{day}</h4>
        </div>
        <div class="date">
            <p>{date}</p>
        </div>
    </div>
</div>
<style>
    *{
        margin: 0;
        padding: 0;
        color: var(--light);
        font-family: 'Roboto', sans-serif;
    }
    .card{
        grid-area: left;
        align-self: center;
        position: relative;
        z-index: 10;
        margin-right: -3vw;
        height: 90%;
        border-radius: 0.5rem;
        background: var(--secondary);
        box-shadow: 0 0 5px var(--strong-shadow);
        transform: rotateY(20deg);
    }
    .container{
        text-align: left;
        margin: 5vh 0 0 2vh
    }
</style> -->