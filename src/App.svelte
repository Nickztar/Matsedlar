<script>
	import Heading from './Heading.svelte';
	import SelectCard from './SelectSchool/SelectCard.svelte';
	import GlideCarousel from './ShowSchool/GlideCarousel.svelte';
	import { hasSchool } from './stores.js';
</script>

<Heading />
<main>
	{#if !$hasSchool}
		<SelectCard />
	{:else}
		<GlideCarousel />
	{/if}
</main>

<style>
	:global(:root) {
		--light: #eee;   
		--secondary: rgba(41, 41, 41, 0.7);
		--priority: rgb(255, 187, 51);
		--strong-shadow: rgba(27,27,27,0.9);
		--primary: rgb(51, 51, 57);
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
		bottom: 0;
	}
	@media (prefers-color-scheme: light){
		:global(:root) {
			--light: #363636;
			--priority: #3d3939d0;
			--secondary: rgba(235, 229, 229, 0.90);
			--primary: rgb(149, 218, 187);
		}
	} 
</style>