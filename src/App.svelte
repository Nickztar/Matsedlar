<script>
	import Heading from './Heading.svelte';
	import SelectCard from './SelectSchool/SelectCard.svelte';
	import WeekCarousel from './ShowSchool/WeekCarousel.svelte';
	import { hasSchool } from './stores.js';
</script>

<Heading {hasSchool}/>
<main>
	{#if !hasSchool}
		<SelectCard />
	{:else}
		<WeekCarousel />
	{/if}
</main>

<style>
	:global(:root) {
		--light: rgb(177, 85, 137);   
		--secondary: #474747;
		--strong-shadow: rgba(27,27,27,0.9);
		--primary: #363636;
	}
	main{
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 12vh;
		background: var(--primary);
		width: 100vw;
		height: 100%;
	}
	@media (prefers-color-scheme: light){
		:global(:root) {
			--light: #363636;
			--secondary: rgb(221, 211, 211);
			--primary: #83AF9B;
		}
	}
</style>