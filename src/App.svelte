<script lang='ts'>
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  import Router, { location } from 'svelte-spa-router';
  import routes from './pages';
  import Navigation from '$components/Navigation.svelte';
  const queryClient = new QueryClient();
  const nonAuthPaths = ['/login', '/register'];
  const hideNavigationPaths = [...nonAuthPaths, '/add', '/user/edit'];

  const contain = (path: string) => hideNavigationPaths.includes(path.toLowerCase());
</script>

<QueryClientProvider client={queryClient}>
  <Router {routes} />
  {#if !contain($location)}
    <Navigation />
  {/if}
</QueryClientProvider>
