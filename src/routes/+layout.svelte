<script>
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	let { children } = $props();
</script>
<NavBar/>
{@render children()}
