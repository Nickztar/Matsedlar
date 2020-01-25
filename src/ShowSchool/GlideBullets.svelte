<div class="bulletContainer">
    <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
        <button class="glide__bullet" data-glide-dir="=4"></button>
    </div>
</div>
<style>
    .bulletContainer{
        display: flex;
        height: 5vh;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }
    .glide__bullets{
        position: relative;
        bottom: auto;
        left: auto;
        transform: none;
    }
    .glide__bullet{
        background-color: var(--lightBorder);
    }
    .glide__bullet:hover, .glide__bullet:focus{
        border: none;
    }
</style>