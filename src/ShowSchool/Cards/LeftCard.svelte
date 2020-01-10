<script>
    let day = "Torsdag";
    let date = '2 JAN';
    let food = ["Köttfärslimpa med rosepepparsås med potatis & lingonsylt", "Köttfärslimpa med rosepepparsås med potatis & lingonsylt"];
</script>
<div class="card">
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
        align-self: center;
        position: relative;
        z-index: 10;
        width: 16%;
        margin-right: -3vw;
        height: 90%;
        border-radius: 0.5rem;
        background: var(--secondary);
        box-shadow: 0 0 5px var(--strong-shadow);
        transform: rotateY(20deg);
    }
    .container{
        text-align: left;
        margin: 5vh 0 0 1vh
    }
</style>