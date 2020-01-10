<script>
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
    import FaAngleLeft from 'svelte-icons/fa/FaAngleLeft.svelte';

    import CenterCard from './Cards/CenterCard.svelte';
    import LeftCard from './Cards/LeftCard.svelte';
    import RightCard from './Cards/RightCard.svelte';

</script>
<div class="holder">
    <LeftCard />
    <CenterCard />
    <RightCard />
</div>
<div class="control">
    <button class="icon"><FaAngleLeft /></button>
    <button class="icon"><FaAngleRight/></button>
</div>
<style>
    .holder{
        width: 100%;
        margin-top: -10vh;
        height: 65vh;
        display: flex;
        justify-content: center;
    }
    .control{
        margin-top: 3vh;
        width: 40%;
        height: 8vh;
        display: flex;
        justify-content: space-around;
    }
    .icon{
        background: var(--secondary);
        box-shadow: 0 0 5px var(--strong-shadow);
        cursor: pointer;
        border-radius: 50%;
        border: none;
        color: var(--light);
        height: 11vh;
        width: 11vh;
    }
</style>