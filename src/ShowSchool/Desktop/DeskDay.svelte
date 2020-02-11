<script>
    export let data;
    const day = data.day;
    const date = data.date;
    const food = data.foods;
</script>

<div class="card">
    <div class="container">
        <div class="info">
            <div class="day">
                <h2>{day}</h2>
            </div>
            <div class="date">
                <p>{date}</p>
            </div>
        </div>
        <div class="food">
            {#each food as dish}
                <div class="foods">{dish}</div>
            {/each}
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
    h2 {
        color: var(--priority);
    }
    .card{
        margin-top: 1vh;
        width: 85vw;
        border-radius: 0.4rem;
        background: var(--secondary);
        box-shadow: 0 0 3px var(--strong-shadow);
    }
    .info{
        width: 25%;
        padding: 0 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container{
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .food{
        margin-right: 2%;
        width: 60%;
    }
    .foods{
        margin: 3% 0;
        display: flex;
        align-items: center;
        height: auto;
        width: 100%;
        font-size: 1rem;
        text-align: left;
        padding: 0.3rem 0.5rem;
        border-radius: 0.3rem;
        color: var(--light);
        word-wrap: break-word;
    }
</style>