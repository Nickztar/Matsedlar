<script>
    let day = "Fredag";
    let date = '3 JAN';
    let food = ["Köttfärslimpa med rosepepparsås med potatis & lingonsylt", "Köttfärslimpa med rosepepparsås med potatis & lingonsylt"];
</script>
<div class="card">
    <div class="container">
        <div class="day">
            <h2>{day}</h2>
        </div>
        <div class="date">
            <p>{date}</p>
        </div>
        <div class="food">
            <div class="foods">{food[0]}</div>
            {#if food.length > 1}
                <div class="foods">{food[1]}</div>
            {/if}
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
        align-self: center;
        justify-self: center;
        position: relative;
        z-index: 20;
        width: 50%;
        height: 100%;
        border-radius: 0.5rem;
        background: var(--secondary);
        box-shadow: 0 0 5px var(--strong-shadow);
    }
    .container{
        margin: 5vh auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .food{
        margin-top: 8vh;
    }
    .foods{
        display: block;
        margin: 3vh auto;
        max-height: 20%;
        padding: 1rem;
        max-width: 80%;
        border-radius: 2rem;
        text-align: center;
        background: var(--primary);
    }
</style>