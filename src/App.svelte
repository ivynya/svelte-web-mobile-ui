
<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
</script>

<main>
  <Router {routes} />
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
	}
</style>