
<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';

  import Navbar from './components/Navbar.svelte';
  import Sidebar from './components/Sidebar.svelte';
</script>

<div class="app">
  <div class="content">
    <Sidebar />
    <main>
      <Router {routes} />
    </main>
  </div>
  <Navbar />
</div>

<style lang="scss">
  .app {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  
	.content {
    display: flex;
    flex: 1 1;
    overflow: scroll;
    scroll-snap-type: x mandatory;
		text-align: center;
    width: 100%;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
	}

  main {
    min-width: 100%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
</style>