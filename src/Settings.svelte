<script>
    import { fly, fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { prefersLight, prefersDesktop, menuOpen, hasSchool, infoShown } from './stores.js';
    import IoIosCog from 'svelte-icons/io/IoIosCog.svelte';
    import IoMdMoon from 'svelte-icons/io/IoMdMoon.svelte';
    import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte';
    import MdViewCarousel from 'svelte-icons/md/MdViewCarousel.svelte';
    import MdFormatAlignJustify from 'svelte-icons/md/MdFormatAlignJustify.svelte';
    import MdInfo from 'svelte-icons/md/MdInfo.svelte'
    document.addEventListener('click', handleBodyClick)
    updateColor($prefersLight);
    function handleShow(e){
        e.stopPropagation();
        menuOpen.set(!$menuOpen);
    }
    function handleInfo(e){
        e.stopPropagation();
        infoShown.set(true);
    }
    function handleColor(e){
        e.stopPropagation();
        prefersLight.set(!$prefersLight);
        setCookie('color', $prefersLight, 360);
        updateColor($prefersLight);
    }
    function handleBodyClick(){
		if($menuOpen){
			menuOpen.set(false);
		}
	}
    function handleDisplay(e){
        e.stopPropagation();
        prefersDesktop.set(!$prefersDesktop);
        setCookie('desktop', $prefersDesktop, 360);
    }
    function updateColor(val){
        const root = document.documentElement;
        if (val){
            root.style.setProperty('--light', 'rgb(14, 14, 14)');
            root.style.setProperty('--priority', ' #ff2727d0');
            root.style.setProperty('--secondary', ' rgb(214, 214, 214)');
            root.style.setProperty('--primary', ' #eee');
            root.style.setProperty('--lightBorder', ' rgb(155, 153, 153, 0.7)');
            root.style.setProperty('--lightArrow', 'rgb(109, 109, 109)');
            root.style.setProperty('--header', '#FF4C4Cd0');
            root.style.setProperty('--headerText', '#eee');
            root.style.setProperty('--settings', 'rgb(155, 153, 153, 0.7)');
            root.style.setProperty('--modal', 'rgba(214, 214, 214,0.95)');

        }
        else{
            root.style.setProperty('--light', '#eee');
            root.style.setProperty('--priority', ' rgb(255, 187, 51)');
            root.style.setProperty('--secondary', ' rgba(41, 41, 41)');
            root.style.setProperty('--primary', 'rgb(51, 51, 57)');
            root.style.setProperty('--lightBorder', ' rgba(255, 255, 255, 0.5)');
            root.style.setProperty('--lightArrow', 'rgba(255, 255, 255)');
            root.style.setProperty('--header', 'rgb(14, 14, 14)');
            root.style.setProperty('--headerText', 'rgb(255, 187, 51)');
            root.style.setProperty('--settings', 'rgb(27,27,27)');
            root.style.setProperty('--modal', 'rgba(41, 41, 41,0.95)');
        }
    }
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
</script>

<div class="sideMenu">
    {#if $menuOpen}
        <div class="handleMenu shown" in:fly={{x: 200, duration: 600, easing: quintOut }}>
            <div class="icon" on:click={handleShow}><IoIosCog/></div>
        </div>
        <div class="menuContent" in:fly={{x: 200, duration: 600, easing: quintOut }}>
            <div class="colorMode">
                {#if !$prefersLight}
                    <div class="icon dark" on:click={handleColor}><IoIosSunny/></div>
                {:else}
                    <div class="icon light" on:click={handleColor}><IoMdMoon/></div>
                {/if}
            </div>
            {#if $hasSchool}
                <div class="displayMode">
                    {#if !$prefersDesktop}
                        <div class="icon desktop" on:click={handleDisplay}><MdFormatAlignJustify/></div>
                    {:else}
                        <div class="icon mobile" on:click={handleDisplay}><MdViewCarousel/></div>
                    {/if}
                </div>
            {/if}
            <div class="info">
                {#if !$prefersLight}
                    <div class="icon dark" on:click={handleInfo}><MdInfo/></div>
                {:else}
                    <div class="icon light" on:click={handleInfo}><MdInfo/></div>
                {/if}
            </div>
        </div>
    {:else}
        <div class="handleMenu hidden" in:fly={{x: -100, duration: 800, easing: quintOut }} out:fade={{duration: 0}}>
            <div class="icon" on:click={handleShow}><IoIosCog/></div>
        </div>
    {/if}
</div>


<style>
    .sideMenu{
        display: flex;
        z-index: 200000;
        height: 8vh;
        top: .5%;
        right: 0;
        position: absolute;
        color: var(--secondary)
    }
    .icon{
        cursor: pointer;
        height: 6vh;
        width: 6vh;
    }
    div .light{
        color: #3f3e35;
    }
    div .dark{
        color: #f9d71c;
    }
    .handleMenu{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7vh;
        padding: 0 0.2rem;
        margin-right: 0.2rem;
        border-radius: 0.2rem;
        background: none;
        box-shadow: none;
        color: var(--priority);
    }
    .hidden .icon{
        animation: spin 650ms ease-out;
    }
    .shown .icon{
        animation: spin2 800ms -100ms ease-out;
    }
    .displayMode .icon{
        color: var(--light);
    }
    .info .icon{
        color: var(--light);
        padding: 2px;
    }
    .shown{
        background: var(--settings); 
        box-shadow: 0 0 3px var(--strong-shadow);
    }
    .hidden{
        color: var(--lightBorder);
        background: none;
        box-shadow: none;
    }
    .menuContent{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 0.2rem;
        height: 7vh;
        margin-right: 0.2rem;
        background: var(--settings); 
        box-shadow: 0 0 3px var(--strong-shadow);
        border-radius: 0.2rem;
    }
    .colorMode{
        padding-right: 0.2rem;
    }
    @keyframes spin{
        0%  {transform: rotate(-360deg)}
        100% {transform: rotate(0deg)} 
    }
    @keyframes spin2{
        0%  {transform: rotate(360deg)}
        100% {transform: rotate(0deg)} 
    }
</style>