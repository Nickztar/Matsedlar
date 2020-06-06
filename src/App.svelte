<script>
	import Heading from './Heading.svelte';
	import Settings from './Settings.svelte';
	import Info from './Info.svelte';
	import SelectCard from './SelectSchool/SelectCard.svelte';
	import SchoolAsync from './SelectSchool/List/SchoolAsync.svelte';
	import Async from './ShowSchool/Async.svelte';
	import { hasSchool, showAll, findingSchool, infoShown } from './stores.js';
</script>

<Heading />
<main>
{#if $infoShown}
	<Info/>
{:else}
	{#if !$findingSchool}
		<Settings/>
	{/if}
	{#if !$hasSchool}
		{#if $showAll}
			<SchoolAsync />
		{:else}
			<SelectCard />
		{/if}
	{:else}
		<Async />
	{/if}
{/if}
	
</main>
		
<style>
	:global(:root) {
		--light: #eee;
		--lightBorder:rgba(255, 255, 255, 0.5);   
		--lightArrow:rgba(255, 255, 255);   
		--secondary: rgba(41, 41, 41);
		--modal: rgba(41, 41, 41,0.95);
		--priority: rgb(255, 187, 51);
		--strong-shadow: rgba(27,27,27);
		--primary: rgb(51, 51, 57);
		--text: #000;
		--header: rgb(14, 14, 14); 
		--headerText: rgb(255, 187, 51);
		--settings: rgb(27,27,27);
	}
	main{
		position: relative;
		top: 10%;
		align-items: center;
		display: flex;
		flex-direction: column;
		background: var(--primary);
		width: 100vw;
		height: 90%;
		z-index: 20000;
		overflow: hidden;
	}
	@media (prefers-color-scheme: light){
		:global(:root) {
			--light: rgb(14, 14, 14);
			--priority: #ff2727d0;
			--secondary: rgb(214, 214, 214);
			--modal: rgba(214, 214, 214,0.95);
			--primary: #eee;
			--lightBorder:rgb(155, 153, 153, 0.7);   
			--lightArrow:rgb(109, 109, 109);
			--header: #FF4C4Cd0; 
			--headerText: #eee;
			--settings: rgb(155, 153, 153, 0.7);
		}
	} 
</style>