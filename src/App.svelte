
<script lang="ts">
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import { routes } from './routes';

  import Navbar from './components/Navbar.svelte';
  import Sidebar from './components/Sidebar.svelte';

  onMount(() => {
    // This scrolls the view to hide the sidebar on load.
    const content = document.getElementById("content");
    content.scrollBy(260, 0); // Scroll by width of sidebar
    content.style.scrollBehavior = "smooth";
  });
</script>

<div class="app">
  <div id="content">
    <Sidebar />
    <main><Router {routes} /></main>
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
  
	#content {
    display: flex;
    flex: 1 1;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
	}

  main {
    max-height: 100%;
    min-width: 100%;
    overflow: auto;
    scroll-snap-align: end;
    scroll-snap-stop: always;
  }
</style>