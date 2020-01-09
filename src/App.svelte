<script>
	import Heading from './Heading.svelte';
	import SelectCard from './SelectSchool/SelectCard.svelte';
	let selectedSchool = true;
</script>

<Heading hasSchool={selectedSchool}/>
<main>
	{#if !selectedSchool}
		<SelectCard />
	{:else}
		<SelectCard />
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
		position: absolute;
		top: 12vh;
		background: var(--primary);
		width: 100vw;
		height: 100%;
	}
	@media (prefers-color-scheme: light){
		:global(:root) {
			--light: #363636;
			--secondary: #C8C8A9;
			--primary: #83AF9B;
		}
	}
</style>