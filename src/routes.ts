
import Home from './routes/Home.svelte';
import NotFound from './routes/NotFound.svelte';

export const routes = {
  '/': Home,
  '*': NotFound
}