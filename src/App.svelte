<script>
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  import Router, { location, querystring } from 'svelte-spa-router';
  import routes from './pages';
  import Navigation from '$components/Navigation.svelte';
  const queryClient = new QueryClient();
  const nonAuthPaths = ['/login', '/register'];

  const contain = (path) => nonAuthPaths.includes(path.toLowerCase());
</script>

<QueryClientProvider client={queryClient}>
  <Router {routes} />
  {#if !contain($location)}
    <Navigation />
  {/if}
</QueryClientProvider>
