<script>
    import FaMapPin from 'svelte-icons/fa/FaMapPin.svelte'
    import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
</script>

<div class="contain">
    <h1>Hitta din skola</h1>
    <div class="conFind">
        <button id="locate" class="find"><div class="icon"><FaMapPin /></div></button>
        <input type="text" placeholder="Skola">
        <button id="submit" class="find"><div class="icon"><FaArrowRight /></div></button>
    </div>
</div>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    .contain{
        width: 80%;
        height: 65%;
    }
    .conFind{
        margin: 4vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        text-align: center;
        margin: 0 auto;
        color: var(--light);
    }
    input{
        padding: 0 20px;
        width: auto;
        height: 15vw;
    }
    .icon{
        height: 80%;
        background: none;
        color: var(--light);
    }
    .find{
        width: 15vw;
        height: 15vw;
    }
    
</style>