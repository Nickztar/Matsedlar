<script>
	import Heading from './Heading.svelte';
	import SelectCard from './SelectSchool/SelectCard.svelte';
	import Async from './ShowSchool/Async.svelte';
	import { hasSchool } from './stores.js';
</script>

<Heading />
<main>
	{#if !$hasSchool}
		<SelectCard />
	{:else}
		<Async />
	{/if}
</main>

<style>
	:global(:root) {
		--light: #eee;
		--lightBorder:rgba(255, 255, 255, 0.5);   
		--lightArrow:rgba(255, 255, 255);   
		--secondary: rgba(41, 41, 41);
		--priority: rgb(255, 187, 51);
		--strong-shadow: rgba(27,27,27);
		--primary: rgb(51, 51, 57);
		--text: #000;
		--header: rgb(14, 14, 14); 
	}
	main{
		align-items: center;
		display: flex;
		flex-direction: column;
		background: var(--primary);
		width: 100vw;
		height: 90%;
		overflow: hidden;
		position: absolute;
		top: 10%;
	}
	/* Disabled for now, fix colors */
	@media (prefers-color-scheme: light){
		:global(:root) {
			--light: rgb(14, 14, 14);
			--priority: #ff2727d0;
			--secondary: rgb(214, 214, 214);
			--primary: #eee;
			--lightBorder:rgb(155, 153, 153, 0.7);   
			--lightArrow:rgb(109, 109, 109);
			--header: #FF4C4Cd0; 
		}
	} 
</style>